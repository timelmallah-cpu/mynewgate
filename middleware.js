// The old production address moves permanently to the new domain (same path and query).
// Preview deployments use other *.vercel.app addresses and are not affected.
import { NextResponse } from "next/server";

const OLD_HOST = "mynewgate.vercel.app";
const NEW_ORIGIN = "https://bawabatalsafar.com";

export function middleware(req) {
  if (req.headers.get("host") !== OLD_HOST) return NextResponse.next();
  const { pathname, search } = req.nextUrl;
  return NextResponse.redirect(`${NEW_ORIGIN}${pathname}${search}`, 308);
}

export const config = { matcher: "/((?!_next/static|_next/image).*)" };
