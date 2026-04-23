"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { t, type Lang } from "@/lib/i18n";

export function FAQ({ lang }: { lang: Lang }) {
  const copy = t(lang).faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[40px] md:py-[80px]">
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

        <div className="col-content md:col-narrow">
          <ul className="divide-y divide-[color:var(--border-soft)] border-t border-b border-[color:var(--border-soft)]">
            {copy.items.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <li key={item.q}>
                  <Reveal delay={0.1 + idx * 0.05} yOffset={20}>
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 md:gap-6 py-6 text-left group"
                    >
                      <span className="text-cinematic text-[15px] md:text-[18px] text-[color:var(--text)] group-hover:text-[color:var(--primary)] transition-colors">
                        {item.q}
                      </span>
                      <span className="shrink-0 text-[color:var(--text-muted)] group-hover:text-[color:var(--primary)] transition-colors">
                        {isOpen ? (
                          <Minus size={20} strokeWidth={1.5} />
                        ) : (
                          <Plus size={20} strokeWidth={1.5} />
                        )}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-8 md:pr-10 text-[14px] not-italic font-normal text-[color:var(--text-muted)] leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
