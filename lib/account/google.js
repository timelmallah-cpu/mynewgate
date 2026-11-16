// "Sign in with Google" (OpenID Connect, authorisation code flow with PKCE). We only ask for the email address.
import { createHash, randomBytes } from "node:crypto";

export const googleConfigured = () => Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
export const GCOOKIE = "dg_g"; // short-lived state for one Google sign-in attempt

const b64u = (b) => Buffer.from(b).toString("base64url");

export function startParams(redirectUri) {
  const state = b64u(randomBytes(24));
  const verifier = b64u(randomBytes(48));
  const challenge = b64u(createHash("sha256").update(verifier).digest());
  const q = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID, redirect_uri: redirectUri, response_type: "code",
    scope: "openid email", state, code_challenge: challenge, code_challenge_method: "S256", prompt: "select_account",
  });
  return { url: `https://accounts.google.com/o/oauth2/v2/auth?${q}`, state, verifier };
}

// Swaps the code for an ID token straight from Google's token endpoint (over TLS), then checks who it is for.
export async function finish({ code, verifier, redirectUri }) {
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ code, code_verifier: verifier, client_id: process.env.GOOGLE_CLIENT_ID, client_secret: process.env.GOOGLE_CLIENT_SECRET, redirect_uri: redirectUri, grant_type: "authorization_code" }),
    signal: AbortSignal.timeout(10000),
  });
  if (!r.ok) throw new Error(`google token ${r.status}`);
  const { id_token } = await r.json();
  const p = JSON.parse(Buffer.from(String(id_token).split(".")[1] || "", "base64url").toString("utf8"));
  const now = Math.floor(Date.now() / 1000);
  if (p.aud !== process.env.GOOGLE_CLIENT_ID) throw new Error("google aud");
  if (!["https://accounts.google.com", "accounts.google.com"].includes(p.iss)) throw new Error("google iss");
  if (!(p.exp > now)) throw new Error("google exp");
  if (p.email_verified !== true || !p.email) throw new Error("google email");
  return p.email;
}
