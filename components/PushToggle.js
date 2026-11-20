"use client";
// "Alert me on this device": deadline alerts by Web Push for the programmes in My list and the application tracker.
// No email and no account needed. The browser's push address and the followed programme ids are all we keep.
import { useEffect, useState } from "react";
import Link from "@/components/Link";
import { BASE } from "../lib/site";
import { getSaved, onSavedChange } from "../lib/saved";
import { getApps, onAppsChange } from "../lib/apps";

const KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || "";
const ON = "mng-push";
const TX = {
  ar: {
    title: "تنبيهات المواعيد على هذا الجهاز", text: "نرسل لك تنبيهاً على الموبايل قبل آخر موعد تقديم بـ 14 يوماً و3 أيام ويوم واحد، للبرامج المحفوظة في قائمتك وفي متابعة التقديم. بدون بريد إلكتروني ولا حساب.",
    on: "شغّل التنبيهات", off: "أوقف التنبيهات", active: (n) => `التنبيهات تعمل على هذا الجهاز (${n} برنامج).`, none: "احفظ برنامجاً أولاً لتصلك مواعيده.",
    denied: "التنبيهات ممنوعة لهذا الموقع في إعدادات المتصفح. فعّلها من الإعدادات ثم حاول مرة أخرى.",
    ios: "على آيفون: ثبّت التطبيق على الشاشة الرئيسية أولاً، ثم افتحه من الأيقونة وشغّل التنبيهات.", install: "طريقة التثبيت",
    fail: "لم نستطع تشغيل التنبيهات الآن. حاول لاحقاً.", unsupported: "متصفحك لا يدعم التنبيهات.",
  },
  en: {
    title: "Deadline alerts on this device", text: "We alert you on your phone 14 days, 3 days and 1 day before the application deadline of the programmes in My list and the application tracker. No email and no account.",
    on: "Turn on alerts", off: "Turn off alerts", active: (n) => `Alerts are on for this device (${n} programmes).`, none: "Save a programme first to get its deadlines.",
    denied: "Notifications are blocked for this site in your browser settings. Allow them there and try again.",
    ios: "On iPhone: add the app to your home screen first, then open it from the icon and turn on alerts.", install: "How to install",
    fail: "We couldn't turn on alerts right now. Try again later.", unsupported: "Your browser doesn't support notifications.",
  },
};

const ids = () => [...new Set([...getSaved().filter((k) => k.startsWith("p:")), ...getApps().map((a) => a.k).filter((k) => k.startsWith("p:"))].map((k) => k.slice(2)))];
function keyBytes(b64) {
  const pad = "=".repeat((4 - (b64.length % 4)) % 4);
  const raw = atob((b64 + pad).replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from([...raw].map((c) => c.charCodeAt(0)));
}
async function registration() {
  const existing = await navigator.serviceWorker.getRegistration(`${BASE}/`);
  return existing || navigator.serviceWorker.register(`${BASE}/sw.js`, { scope: `${BASE}/` });
}
const post = (sub, lang) => fetch(`${BASE}/api/push`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sub, ids: ids(), lang }) });

export default function PushToggle({ lang }) {
  const x = TX[lang];
  const [state, setState] = useState("loading"); // loading | unsupported | ios | off | on | denied
  const [n, setN] = useState(0);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setN(ids().length);
    const ok = KEY && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
    const iosBrowser = /iP(hone|ad|od)/.test(navigator.userAgent) && !window.matchMedia("(display-mode: standalone)").matches;
    if (!ok) { setState(iosBrowser ? "ios" : "unsupported"); return; }
    if (Notification.permission === "denied") { setState("denied"); return; }
    let on = false;
    try { on = localStorage.getItem(ON) === "1"; } catch {}
    setState(on && Notification.permission === "granted" ? "on" : "off");
  }, []);

  // Keep the followed programmes up to date while alerts are on.
  useEffect(() => {
    if (state !== "on") return;
    const sync = () => { setN(ids().length); registration().then((r) => r.pushManager.getSubscription()).then((s) => s && post(s.toJSON(), lang)).catch(() => {}); };
    const a = onSavedChange(sync), b = onAppsChange(sync);
    return () => { a?.(); b?.(); };
  }, [state, lang]);

  const turnOn = async () => {
    setErr(""); setBusy(true);
    try {
      const perm = await Notification.requestPermission();
      if (perm !== "granted") { setState(perm === "denied" ? "denied" : "off"); setBusy(false); return; }
      const reg = await registration();
      await navigator.serviceWorker.ready;
      const sub = (await reg.pushManager.getSubscription()) || (await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: keyBytes(KEY) }));
      const r = await post(sub.toJSON(), lang);
      if (!r.ok) throw new Error("save");
      try { localStorage.setItem(ON, "1"); } catch {}
      setState("on");
    } catch { setErr(x.fail); }
    setBusy(false);
  };
  const turnOff = async () => {
    setBusy(true);
    try {
      const reg = await registration();
      const sub = await reg.pushManager.getSubscription();
      if (sub) {
        await fetch(`${BASE}/api/push`, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ endpoint: sub.endpoint }) }).catch(() => {});
        await sub.unsubscribe().catch(() => {});
      }
    } catch {}
    try { localStorage.removeItem(ON); } catch {}
    setState("off"); setBusy(false);
  };

  if (!KEY || state === "loading") return null;
  return (
    <section className="card push-box">
      <h2>{x.title}</h2>
      <p>{x.text}</p>
      {state === "unsupported" && <p className="meta">{x.unsupported}</p>}
      {state === "ios" && <p className="meta">{x.ios} <Link href={`${lang === "en" ? "/en" : ""}/install`}>{x.install}</Link></p>}
      {state === "denied" && <p className="meta">{x.denied}</p>}
      {state === "off" && <><button className="btn" type="button" disabled={busy} onClick={turnOn}>{x.on}</button>{n === 0 && <p className="meta">{x.none}</p>}</>}
      {state === "on" && <><p>{x.active(n)}</p><button className="btn ghost" type="button" disabled={busy} onClick={turnOff}>{x.off}</button></>}
      {err && <p className="ask-err" role="alert">{err}</p>}
    </section>
  );
}
