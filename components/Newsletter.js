"use client";
import { useState } from "react";
import Link from "next/link";

// Monthly newsletter sign-up. Sent straight to Kit (kit.com), which emails a confirmation link (double opt-in).
const FORM_ID = "10191374";

const S = {
  ar: {
    title: "النشرة الشهرية",
    text: "مرة في الشهر: مواعيد التقديم القريبة، والمنح التي فتحت، والرسوم أو الشروط التي تغيّرت. مجانية، وتقدر تلغي الاشتراك في أي وقت.",
    label: "بريدك الإلكتروني",
    consent: "أوافق على استلام النشرة الشهرية، وقرأت",
    privacy: "سياسة الخصوصية",
    btn: "اشترك",
    sending: "جارٍ الإرسال...",
    ok: "شكراً! أرسلنا لك رسالة تأكيد. افتح بريدك واضغط على رابط التأكيد ليبدأ اشتراكك (راجع مجلد الرسائل غير المرغوب فيها إن لم تجدها).",
    bad: "تأكد من كتابة البريد الإلكتروني بشكل صحيح.",
    err: "تعذّر الاشتراك الآن. حاول مرة أخرى بعد قليل.",
    needConsent: "يجب الموافقة أولاً.",
  },
  en: {
    title: "Monthly newsletter",
    text: "Once a month: upcoming deadlines, scholarships that opened, and fees or requirements that changed. Free, and you can unsubscribe at any time.",
    label: "Your email",
    consent: "I agree to receive the monthly newsletter and have read the",
    privacy: "privacy policy",
    btn: "Subscribe",
    sending: "Sending...",
    ok: "Thanks! We sent you a confirmation email. Open it and click the link to start your subscription (check your spam folder if you don't see it).",
    bad: "Please check the email address.",
    err: "We couldn't subscribe you right now. Please try again shortly.",
    needConsent: "Please tick the consent box first.",
  },
};

export default function Newsletter({ lang }) {
  const s = S[lang];
  const base = lang === "ar" ? "" : "/en";
  const [state, setState] = useState("idle");
  const [msg, setMsg] = useState("");

  async function submit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    if (!f.consent.checked) { setState("error"); setMsg(s.needConsent); return; }
    setState("sending");
    try {
      const fd = new FormData();
      fd.append("email_address", f.email.value.trim());
      const r = await fetch(`https://app.kit.com/forms/${FORM_ID}/subscriptions`, { method: "POST", body: fd, headers: { Accept: "application/json" } });
      const j = await r.json().catch(() => ({}));
      if (j.status === "success" || j.status === "quarantined") { setState("done"); setMsg(s.ok); f.reset(); }
      else if (j.errors?.fields?.includes("email_address")) { setState("error"); setMsg(s.bad); }
      else { setState("error"); setMsg(s.err); }
    } catch { setState("error"); setMsg(s.err); }
  }

  return (
    <section className="newsletter" id="newsletter">
      <h2>{s.title}</h2>
      <p>{s.text}</p>
      {state === "done" ? (
        <p className="nl-ok" role="status">{msg}</p>
      ) : (
        <form onSubmit={submit} noValidate>
          <div className="nl-row">
            <input type="email" name="email" required autoComplete="email" dir="ltr" placeholder="name@example.com" aria-label={s.label} />
            <button className="btn gold" disabled={state === "sending"}>{state === "sending" ? s.sending : s.btn}</button>
          </div>
          <label className="nl-consent">
            <input type="checkbox" name="consent" />
            <span>{s.consent} <Link href={`${base}/privacy`}>{s.privacy}</Link>.</span>
          </label>
          {state === "error" && <p className="nl-err" role="alert">{msg}</p>}
        </form>
      )}
    </section>
  );
}
