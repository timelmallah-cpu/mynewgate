// Sign-in emails. Sent with Brevo (brevo.com) when BREVO_API_KEY is set, otherwise with Resend (RESEND_API_KEY).
// MAIL_FROM is the sender, e.g. "Daleel Abroad <login@daleelabroad.com>", on a domain verified with that service.
import { SIGNIN_MAIL } from "../accountText";

export const mailConfigured = () => Boolean((process.env.BREVO_API_KEY || process.env.RESEND_API_KEY) && process.env.MAIL_FROM);

function sender() {
  const f = process.env.MAIL_FROM.trim();
  const m = f.match(/^(.*)<([^>]+)>$/);
  return m ? { name: m[1].trim().replace(/^"|"$/g, ""), email: m[2].trim() } : { email: f };
}
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
  const subject = `${m.subject} | ${brand}`;
  if (process.env.BREVO_API_KEY) {
    const r = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": process.env.BREVO_API_KEY, "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ sender: sender(), to: [{ email: to }], subject, htmlContent: html, textContent: text, tags: ["signin"] }),
      signal: AbortSignal.timeout(10000),
    });
    if (!r.ok) throw new Error(`brevo ${r.status} ${(await r.text()).slice(0, 200)}`);
    return;
  }
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.MAIL_FROM, to: [to], subject, html, text }),
    signal: AbortSignal.timeout(10000),
  });
  if (!r.ok) throw new Error(`resend ${r.status} ${(await r.text()).slice(0, 200)}`);
}
