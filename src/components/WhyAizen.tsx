import { Reveal } from "./Reveal";
import { t, type Lang } from "@/lib/i18n";


export function WhyAizen({
  lang,
}: {
  lang: Lang;
}) {
  const copy = t(lang).whyAizen;

  return (
    <section id="expertise" className="py-[40px] md:py-[80px]">
      <div className="display-grid">
        <div style={{ gridColumn: "2 / -2" }} className="mb-8 md:mb-16">
          <Reveal>
            <p className="text-label text-cinematic text-[color:var(--text-muted)]">
              {copy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-cinematic text-title-lg mt-4">{copy.title}</h2>
          </Reveal>
        </div>
        <div
          className="flex flex-col gap-6"
          style={{ gridColumn: "2 / -2" }}
        >
          {copy.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.2 + idx * 0.1}>
              <article className="border border-[color:var(--border-soft)] rounded-[var(--radius-sm)] p-5 md:p-8 lg:p-12 hover:border-[color:var(--primary)] hover:bg-[color:var(--primary)]/[0.03] transition-all duration-300 group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="md:col-span-2 lg:col-span-1">
                  <p className="text-label text-cinematic text-[color:var(--text-muted)] group-hover:text-[color:var(--primary)] transition-colors">
                    0{idx + 1}
                  </p>
                </div>
                <div className="md:col-span-5 lg:col-span-4">
                  <h3 className="text-cinematic text-[20px] md:text-[24px] leading-tight md:-mt-1">
                    {card.title}
                  </h3>
                </div>
                <div className="md:col-span-5 lg:col-span-7">
                  <p className="text-[15px] md:text-[16px] leading-[1.6] not-italic font-normal text-[color:var(--text-muted)] group-hover:text-[color:var(--text)] transition-colors md:-mt-1">
                    {card.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
