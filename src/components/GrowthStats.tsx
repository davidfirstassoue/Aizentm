"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "./Reveal";
import { t, type Lang } from "@/lib/i18n";
import {
  Stethoscope,
  Building2,
  Truck,
  ShoppingCart,
  GraduationCap,
  Hotel,
  Calculator,
  Store,
} from "lucide-react";
import Link from "next/link";

const ICON_MAP: Record<string, React.ElementType> = {
  Stethoscope,
  Building2,
  Truck,
  ShoppingCart,
  GraduationCap,
  Hotel,
  Calculator,
  Store,
};

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOut = 1 - Math.pow(1 - progress, 4);

        setCount(Math.floor(easeOut * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
}

export function GrowthStats({ lang }: { lang: Lang }) {
  const copy = t(lang).ctaBlock;

  return (
    <section className="py-[60px] md:py-[140px] border-t border-[color:var(--border-soft)]">
      <div className="display-grid">
        <div style={{ gridColumn: "2 / -2" }} className="mb-10 md:mb-24">
          <Reveal>
            <p className="text-label text-cinematic text-[color:var(--text-muted)]">
              {copy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-cinematic text-title-lg mt-4 max-w-[800px]">
              {copy.title}
            </h2>
          </Reveal>
        </div>

        {/* PART 1: Animated Counters */}
        <div style={{ gridColumn: "2 / -2" }} className="mb-16 md:mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-16 lg:gap-12">
            {copy.stats.map((stat, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <div className="flex flex-col">
                  <div className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-cinematic text-[color:var(--text)] mb-4 flex items-center leading-none">
                    {stat.prefix}
                    <Counter value={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="h-[2px] w-8 bg-[color:var(--text)] mb-4 opacity-20" />
                  <p className="text-[12px] uppercase tracking-[0.05em] font-bold text-[color:var(--text-muted)] max-w-[180px]">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* PART 2: Sectors */}
        <div style={{ gridColumn: "1 / -1" }} className="mb-16 md:mb-40 overflow-hidden border-y border-[color:var(--border-faint)] py-10">
          <div className="w-full px-[var(--page-padding-mobile)] md:px-[var(--page-padding)] mb-8">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.1em] font-bold text-[color:var(--text-muted)]">
                {copy.sectorsLabel}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex gap-6 md:gap-10 overflow-x-auto pb-4 px-[var(--page-padding-mobile)] md:px-[var(--page-padding)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {copy.sectors.map((sector, i) => {
                const Icon = ICON_MAP[sector.icon];
                return (
                  <div key={i} className="flex items-center gap-3 md:gap-4 whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity">
                    {Icon && <Icon size={20} className="md:size-6" />}
                    <span className="text-[13px] md:text-[14px] font-medium tracking-[0.05em] uppercase">{sector.name}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* PART 3: Quote & CTA */}
        <div style={{ gridColumn: "2 / -2" }} className="text-center max-w-[900px] mx-auto">
          <Reveal>
            <p className="text-[22px] md:text-[36px] lg:text-[46px] italic font-light leading-tight mb-8 md:mb-10 text-[color:var(--text)]">
              &quot;{copy.quote}&quot;
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[12px] uppercase tracking-[0.1em] font-bold text-[color:var(--text-muted)] mb-10 md:mb-20">
              {copy.signature}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/#contact"
              className="cp-solid-btn"
            >
              {copy.cta}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
