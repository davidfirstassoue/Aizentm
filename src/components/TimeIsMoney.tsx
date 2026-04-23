import { Reveal } from "./Reveal";
import { t, type Lang } from "@/lib/i18n";

export function TimeIsMoney({ lang }: { lang: Lang }) {
  const copy = t(lang).stats;

  return (
    <section className="py-[40px] md:py-[80px]">
      <div className="display-grid">
        <div style={{ gridColumn: "2 / -2" }}>
          <Reveal delay={0.1}>
            <div
              className="relative p-6 md:p-12 lg:p-16 rounded-[var(--radius-sm)] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--primary) 6%, transparent), transparent 70%)",
                border: "1px solid var(--border-soft)",
              }}
            >
              <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                {copy.eyebrow}
              </p>
              <h2 className="text-cinematic text-title-lg mt-4 max-w-3xl">
                {copy.title}
              </h2>

              <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                {copy.items.map((item, idx) => (
                  <Reveal key={item.figure} delay={0.2 + idx * 0.1} yOffset={20}>
                    <div className="border-t border-[color:var(--border-soft)] pt-6">
                      <p className="text-cinematic text-[32px] md:text-[40px] lg:text-[48px] leading-none">
                        {item.figure}
                      </p>
                      <p className="mt-5 text-[14px] not-italic font-normal text-[color:var(--text)]">
                        {item.desc}
                      </p>
                      <p className="mt-4 text-[13px] not-italic font-normal text-[color:var(--text-muted)] italic">
                        → {item.linkToAizen}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
