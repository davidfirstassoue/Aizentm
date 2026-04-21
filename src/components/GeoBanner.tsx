"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { COUNTRIES, isCountryCode, type CountryCode } from "@/lib/countries";

const DISMISS_KEY = "aizen-geo-dismissed";
const COOKIE_NAME = "aizen-detected-country";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.split("; ").find((c) => c.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

export function GeoBanner() {
  const [country, setCountry] = useState<CountryCode | null>(null);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY) === "1") return;
    const detected = readCookie(COOKIE_NAME);
    if (detected && isCountryCode(detected)) setCountry(detected);
  }, []);

  if (!country) return null;

  const info = COUNTRIES[country];

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setCountry(null);
  };

  return (
    <div
      role="region"
      aria-label="Version régionale détectée"
      className="fixed bottom-6 right-6 z-[60] max-w-sm border border-[color:var(--border-soft)] bg-[color:var(--bg)] p-5 rounded-[var(--radius-sm)]"
    >
      <p className="text-label text-cinematic text-[color:var(--text-muted)]">
        Version régionale
      </p>
      <p className="mt-2 text-[14px] not-italic font-normal">
        Nous avons détecté que vous êtes au {info.flag} <strong>{info.name}</strong>. Voir l&apos;offre locale ?
      </p>
      <div className="mt-4 flex items-center gap-3">
        <Link
          href={`/${info.code}`}
          onClick={dismiss}
          className="cp-outline-btn"
        >
          Voir {info.name}
        </Link>
        <button type="button" onClick={dismiss} className="text-label text-cinematic text-[color:var(--text-muted)]">
          Ignorer
        </button>
      </div>
    </div>
  );
}
