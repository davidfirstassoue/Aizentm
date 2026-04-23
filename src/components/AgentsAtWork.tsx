"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { t, type Lang, type SectorKey } from "@/lib/i18n";

export function AgentsAtWork({ lang }: { lang: Lang }) {
  const copy = t(lang).agents;
  const [active, setActive] = useState<SectorKey>("supermarche");

  const activeSector = copy.sectors[active];
  const isQuickSector = active === "pme";

  return (
    <section id="agents" className="py-[40px] md:py-[80px]">
      <div className="display-grid">
        <div style={{ gridColumn: "2 / -2" }} className="mb-6 md:mb-12">
          <Reveal>
            <p className="text-label text-cinematic text-[color:var(--text-muted)]">
              {copy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-cinematic text-title-lg mt-4">{copy.title}</h2>
          </Reveal>
        </div>

        <div style={{ gridColumn: "2 / -2" }} className="mb-6 md:mb-10">
          <Reveal delay={0.15}>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 md:mx-0 md:px-0 md:flex-wrap">
              {copy.sectorsOrder.map((key) => {
                const isActive = active === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActive(key)}
                    className={`text-cinematic text-[11px] tracking-[0.1em] whitespace-nowrap px-5 py-3 rounded-[var(--radius-pill)] border transition-all duration-200 ${
                      isActive
                        ? "border-[color:var(--primary)] bg-[color:var(--primary)] text-[color:var(--bg)]"
                        : "border-[color:var(--border-soft)] text-[color:var(--text-muted)] hover:border-[color:var(--primary)] hover:text-[color:var(--text)]"
                    }`}
                  >
                    {copy.sectors[key].label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div style={{ gridColumn: "2 / -2" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {isQuickSector && "items" in activeSector ? (
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeSector.items.map((item) => (
                    <li
                      key={item}
                      className="border border-[color:var(--border-soft)] rounded-[var(--radius-sm)] p-5 md:p-6 text-[14px] not-italic font-normal text-[color:var(--text)] hover:border-[color:var(--primary)] transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : "cards" in activeSector ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeSector.cards.map((card) => (
                    <article
                      key={card.title}
                      className="border border-[color:var(--border-soft)] rounded-[var(--radius-sm)] p-5 md:p-8 hover:border-[color:var(--primary)] hover:bg-[color:var(--primary)]/[0.03] transition-all duration-300"
                    >
                      <h3 className="text-cinematic text-[18px] md:text-[20px] leading-tight">
                        {card.title}
                      </h3>
                      <div className="mt-6 space-y-5">
                        <div>
                          <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                            {copy.labels.problem}
                          </p>
                          <p className="mt-2 text-[13px] not-italic font-normal text-[color:var(--text-muted)]">
                            {card.problem}
                          </p>
                        </div>
                        <div>
                          <p className="text-label text-cinematic text-[color:var(--primary)]">
                            {copy.labels.agent}
                          </p>
                          <p className="mt-2 text-[13px] not-italic font-normal text-[color:var(--text)]">
                            {card.agent}
                          </p>
                        </div>
                        <div>
                          <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                            {copy.labels.result}
                          </p>
                          <p className="mt-2 text-[13px] not-italic font-normal text-[color:var(--text)]">
                            {card.result}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ gridColumn: "2 / -2" }} className="mt-8 md:mt-14">
          <Reveal delay={0.2}>
            <div className="border-t border-[color:var(--border-soft)] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-[14px] not-italic font-normal text-[color:var(--text-muted)]">
                {copy.cta}
              </p>
              <Link href="/#contact" className="cp-solid-btn">
                {copy.ctaLink}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
