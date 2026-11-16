"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { T } from "../lib/i18n";
import { ACC } from "../lib/accountText";

// The sign-in link opens this page with the token after "#". Signing in needs a button press,
// so email link scanners that open the link don't use it up.
export default function LoginConfirm({ lang }) {
  const a = ACC[lang];
  const base = T[lang].base;
  const [tok, setTok] = useState(null);
  const [state, setState] = useState("idle");
  useEffect(() => {
    const m = window.location.hash.match(/^#t=([\w-]+)$/);
    setTok(m ? m[1] : "");
    if (m) history.replaceState(null, "", window.location.pathname);
  }, []);

  async function go() {
    setState("busy");
    try {
      const r = await fetch("/api/auth/confirm", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ t: tok }) });
      const d = await r.json().catch(() => ({}));
      if (r.ok) { window.location.replace(d.next || `${base}/account`); return; }
      setState(d.error === "not_configured" ? "off" : d.error === "limit" ? "limit" : "bad");
    } catch { setState("fail"); }
  }

  const msg = { bad: a.confirmBad, off: a.errOff, limit: a.errLimit, fail: a.errFail }[state];
  return (
    <article className="acc">
      <h1>{a.confirmTitle}</h1>
      {tok === "" || state === "bad" ? (
        <div className="acc-box"><p>{a.confirmBad}</p><Link className="btn" href={`${base}/login`}>{a.newLink}</Link></div>
      ) : (
        <div className="acc-box">
          <p>{a.confirmLead}</p>
          <button className="btn" onClick={go} disabled={!tok || state === "busy"}>{state === "busy" ? a.confirming : a.confirmBtn}</button>
          {msg && <p className="acc-err" role="alert">{msg}</p>}
        </div>
      )}
    </article>
  );
}
