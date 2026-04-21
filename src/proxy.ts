import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { codeFromIso } from "@/lib/countries";

export function proxy(request: NextRequest) {
  const res = NextResponse.next();

  const existing = request.cookies.get("aizen-detected-country");
  if (existing) return res;

  const iso =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    null;

  const code = codeFromIso(iso);
  if (code) {
    res.cookies.set("aizen-detected-country", code, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
    });
  }

  return res;
}

export const config = {
  matcher: ["/"],
};
