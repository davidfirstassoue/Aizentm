import { Reveal } from "./Reveal";
import { t, type Lang } from "@/lib/i18n";

export function ContactHub({ lang }: { lang: Lang }) {
  const copy = t(lang).contact;

  return (
    <section id="contact" className="py-[60px] md:py-[140px]">
      <div className="display-grid">
        <div style={{ gridColumn: "2 / -2" }} className="mb-8 md:mb-16">
          <Reveal>
            <p className="text-label text-cinematic text-[color:var(--text-muted)]">
              {copy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-cinematic text-title-lg mt-4 max-w-4xl">
              {copy.title}
            </h2>
          </Reveal>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          style={{ gridColumn: "2 / -2" }}
        >
          {copy.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.2 + idx * 0.1}>
              <div className="border border-[color:var(--border-soft)] rounded-[var(--radius-sm)] p-5 md:p-8 hover:border-[color:var(--primary)] hover:bg-[color:var(--primary)]/[0.03] transition-all duration-300 h-full group">
                <p className="text-label text-cinematic text-[color:var(--text-muted)] group-hover:text-[color:var(--primary)] transition-colors">
                  0{idx + 1}
                </p>
                <h3 className="text-cinematic text-[22px] md:text-[28px] mt-3">
                  {card.title}
                </h3>
                <p className="mt-4 text-[13px] not-italic font-normal text-[color:var(--text-muted)] group-hover:text-[color:var(--text)] transition-colors">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
