"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { STUDIO_PACKS, AI_PACKS, type Pack } from "@/lib/countries";
import type { Lang } from "@/lib/i18n";

type Gamme = "web" | "ai";

const LABELS = {
  fr: {
    eyebrow: "Forfaits",
    title: "Choisissez votre formule.",
    tabWeb: "Studio Web",
    tabAi: "IA & Automatisation",
    subtitleWeb: "Ton entreprise mérite une présence à sa hauteur.",
    subtitleAi: "Tes meilleurs éléments ne sont pas recrutés pour saisir des données et envoyer des relances.",
    footer: "Tous nos forfaits sont sur devis — réponse personnalisée sous 24h.",
  },
  en: {
    eyebrow: "Pricing",
    title: "Choose your plan.",
    tabWeb: "Web Studio",
    tabAi: "AI & Automation",
    subtitleWeb: "Your business deserves a presence at its level.",
    subtitleAi: "Your best people weren't hired to enter data and send follow-ups.",
    footer: "All plans are on quote — personalised response within 24h.",
  },
} as const;

export function PricingSection({ lang }: { lang: Lang }) {
  const [gamme, setGamme] = useState<Gamme>("ai");
  const l = LABELS[lang];

  const tabs: { key: Gamme; label: string }[] = [
    { key: "web", label: l.tabWeb },
    { key: "ai",  label: l.tabAi  },
  ];

  const packs    = gamme === "web" ? STUDIO_PACKS : AI_PACKS;
  const subtitle = gamme === "web" ? l.subtitleWeb : l.subtitleAi;
  const gridCols = gamme === "web"
    ? "grid-cols-1 md:grid-cols-3"
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

  return (
    <section id="pricing" className="py-[40px] md:py-[80px]">
      <div className="display-grid">
        {/* Header */}
        <div style={{ gridColumn: "2 / -2" }} className="mb-8 md:mb-12">
          <Reveal>
            <p className="text-label text-cinematic text-[color:var(--text-muted)]">
              {l.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-cinematic text-title-lg mt-4">{l.title}</h2>
          </Reveal>

          {/* Toggle */}
          <Reveal delay={0.15}>
            <div className="flex gap-2 mt-8 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setGamme(tab.key)}
                  className={`text-cinematic text-[11px] tracking-[0.1em] px-5 py-3 rounded-[var(--radius-pill)] border transition-all duration-200 ${
                    gamme === tab.key
                      ? "border-[color:var(--primary)] bg-[color:var(--primary)] text-[color:var(--bg)]"
                      : "border-[color:var(--border-soft)] text-[color:var(--text-muted)] hover:border-[color:var(--primary)] hover:text-[color:var(--text)]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Sous-titre gamme */}
          <AnimatePresence mode="wait">
            <motion.p
              key={gamme}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-4 max-w-2xl text-[14px] not-italic font-normal text-[color:var(--text-muted)]"
            >
              {subtitle}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Grille de forfaits */}
        <div style={{ gridColumn: "2 / -2" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={gamme}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`grid ${gridCols} gap-4`}
            >
              {packs.map((pack, idx) => (
                <PackCard key={pack.id} pack={pack} idx={idx} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Note bas de grille */}
          <div className="mt-10 text-center">
            <p className="text-[13px] not-italic font-normal text-[color:var(--text-muted)]">
              {l.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackCard({ pack, idx }: { pack: Pack; idx: number }) {
  return (
    <Reveal delay={0.05 + idx * 0.07}>
      <article
        className={`border rounded-[var(--radius-sm)] flex flex-col transition-all duration-300 h-full group relative ${
          pack.featured
            ? "border-[color:var(--primary)] bg-[color:var(--primary)]/[0.03] p-6 md:p-8"
            : "border-[color:var(--border-soft)] hover:border-[color:var(--primary)] hover:bg-[color:var(--primary)]/[0.02] p-5 md:p-7"
        }`}
      >
        {pack.badge && (
          <span className="absolute -top-3 left-6 bg-[color:var(--text)] text-[color:var(--bg)] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
            {pack.badge}
          </span>
        )}

        <div className="flex-1">
          <p className="text-label text-cinematic text-[color:var(--text-muted)] group-hover:text-[color:var(--primary)] transition-colors">
            {pack.tagline}
          </p>
          <h3 className={`text-cinematic mt-2 leading-tight group-hover:text-[color:var(--text)] transition-colors ${pack.featured ? "text-[26px] md:text-[28px]" : "text-[22px] md:text-[24px]"}`}>
            {pack.name}
          </h3>
          <p className="mt-3 text-[12px] not-italic font-normal text-[color:var(--text-muted)] leading-snug">
            {pack.target}
          </p>

          <ul className="mt-6 space-y-2">
            {pack.features.map((f) => (
              <li key={f} className="text-[12px] not-italic font-normal text-[color:var(--text-muted)] flex gap-2">
                <span className="text-[color:var(--primary)] shrink-0 mt-px">—</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-5 border-t border-[color:var(--border-faint)] flex flex-col gap-3">
          <p className="text-[10px] text-cinematic text-[color:var(--text-muted)]">
            {pack.delay}
          </p>
          <Link
            href="#contact"
            className={`w-full justify-center ${pack.featured ? "cp-solid-btn-sm" : "cp-outline-btn"}`}
          >
            {pack.cta}
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
