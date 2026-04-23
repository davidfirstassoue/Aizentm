"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useCallback } from "react";
import { COUNTRIES, isCountryCode } from "@/lib/countries";
import { AFRICA_PATHS, TARGET_ISO } from "./africa-paths";

type TooltipState = {
  x: number;
  y: number;
  iso: string;
  name: string;
  flag?: string;
} | null;

export function AfricaMap() {
  const router = useRouter();
  const [hoveredIso, setHoveredIso] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent, iso: string, name: string) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        iso,
        name,
        flag: isCountryCode(iso.toLowerCase())
          ? COUNTRIES[iso.toLowerCase() as keyof typeof COUNTRIES]?.flag
          : undefined,
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setHoveredIso(null);
    setTooltip(null);
  }, []);

  return (
    <div className="relative w-full max-w-[550px] mx-auto" ref={containerRef}>
      {/* Floating tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none absolute z-50"
          style={{
            left: tooltip.x + 14,
            top: tooltip.y - 18,
            transform: "translateY(-100%)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px 6px 10px",
              background: "var(--text)",
              color: "var(--bg)",
              borderRadius: "6px",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            {tooltip.flag && (
              <span style={{ fontSize: "13px" }}>{tooltip.flag}</span>
            )}
            <span>{tooltip.name}</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              style={{ opacity: 0.6 }}
            >
              <path
                d="M2 5h6M5 2l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Arrow pointing down-left */}
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "5px solid var(--text)",
              marginLeft: "10px",
            }}
          />
        </div>
      )}

      <svg
        viewBox="345 430 200 200"
        className="w-full h-auto"
        role="img"
        aria-label="Carte interactive des pays francophones d'Afrique"
        style={{ overflow: "visible" }}
      >
        {AFRICA_PATHS.map((country) => {
          const isTarget = TARGET_ISO.has(country.iso);
          const isHover = hoveredIso === country.iso;
          const fill = isTarget
            ? isHover
              ? "var(--text)"
              : "color-mix(in srgb, var(--text) 22%, transparent)"
            : "color-mix(in srgb, var(--text) 6%, transparent)";
          const stroke = isTarget ? "var(--text)" : "var(--border-faint)";
          const strokeWidth = isTarget ? 0.6 : 0.3;

          const pathData = Array.isArray(country.d) ? country.d : [country.d];

          const commonHandlers = isTarget
            ? {
                onMouseEnter: (e: React.MouseEvent) => {
                  setHoveredIso(country.iso);
                  handleMouseMove(e, country.iso, country.name);
                },
                onMouseMove: (e: React.MouseEvent) => {
                  handleMouseMove(e, country.iso, country.name);
                },
                onMouseLeave: handleMouseLeave,
                onFocus: () => setHoveredIso(country.iso),
                onBlur: handleMouseLeave,
                onClick: () => {
                  const code = country.iso.toLowerCase();
                  if (isCountryCode(code)) router.push(`/${code}`);
                },
                onKeyDown: (e: React.KeyboardEvent) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    const code = country.iso.toLowerCase();
                    if (isCountryCode(code)) router.push(`/${code}`);
                  }
                },
                tabIndex: 0,
                role: "link" as const,
                "aria-label": `Voir l'offre ${country.name}`,
                style: { cursor: "pointer", outline: "none" },
              }
            : { style: { pointerEvents: "none" as const } };

          return (
            <g key={country.iso} {...commonHandlers}>
              {pathData.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  strokeLinejoin="round"
                  style={{ transition: "fill 0.2s ease" }}
                />
              ))}
            </g>
          );
        })}
      </svg>

      <div className="mt-8 text-center min-h-[28px]">
        {!hoveredIso && (
          <p className="text-label text-cinematic text-[color:var(--text-muted)]">
            Survolez un pays pour le découvrir
          </p>
        )}
      </div>
    </div>
  );
}
