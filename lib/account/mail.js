// Sign-in emails, sent with Resend (resend.com). Needs RESEND_API_KEY and MAIL_FROM (an address on a domain verified in Resend).
import { SIGNIN_MAIL } from "../accountText";

export const mailConfigured = () => Boolean(process.env.RESEND_API_KEY && process.env.MAIL_FROM);
// Local and preview testing only: no email is sent and the link is returned to the page instead.
export const mockMail = () => process.env.AUTH_MOCK_MAIL === "1" && process.env.VERCEL_ENV !== "production";

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

export async function sendSignIn({ to, link, lang, brand }) {
  const m = SIGNIN_MAIL[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";
  const html = `<div dir="${dir}" style="font-family:Arial,Tahoma,sans-serif;font-size:16px;line-height:1.7;color:#13234b;max-width:520px">
<p>${esc(m.hello)}</p>
<p>${esc(m.body)}</p>
<p><a href="${esc(link)}" style="display:inline-block;background:#13234b;color:#fff;padding:12px 22px;border-radius:8px;text-decoration:none">${esc(m.button)}</a></p>
<p style="font-size:14px;color:#555">${esc(m.expiry)}</p>
<p style="font-size:14px;color:#555">${esc(m.ignore)}</p>
<p style="font-size:14px;color:#555">${esc(brand)}</p>
</div>`;
  const text = `${m.hello}\n\n${m.body}\n${link}\n\n${m.expiry}\n${m.ignore}\n\n${brand}`;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.MAIL_FROM, to: [to], subject: `${m.subject} | ${brand}`, html, text }),
    signal: AbortSignal.timeout(10000),
  });
  if (!r.ok) throw new Error(`resend ${r.status} ${(await r.text()).slice(0, 200)}`);
}
