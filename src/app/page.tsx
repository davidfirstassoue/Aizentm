import Link from "next/link";
import { AfricaMap } from "@/components/AfricaMap";
import { Reveal } from "@/components/Reveal";
import { WhyAizen } from "@/components/WhyAizen";
import { TimeIsMoney } from "@/components/TimeIsMoney";
import { AgentsAtWork } from "@/components/AgentsAtWork";
import { ContactHub } from "@/components/ContactHub";
import { FAQ } from "@/components/FAQ";
import { t } from "@/lib/i18n";

export default function Home() {
  const lang = "fr" as const;
  const hero = t(lang).hero;

  return (
    <>
      <section className="relative min-h-screen flex items-end pb-12 md:pb-24 overflow-hidden">
        <div className="display-grid w-full relative z-10">
          <div style={{ gridColumn: "2 / -2" }}>
            <Reveal delay={0.1}>
              <p className="text-label text-cinematic text-[color:var(--text-muted)] mb-6">
                {hero.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-cinematic text-hero">
                {hero.titleLines[0]}
                <br />
                <span className="text-[color:var(--text-muted)]">
                  {hero.titleLines[1]}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-2xl text-[16px] not-italic font-normal text-[color:var(--text-muted)]">
                {hero.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10 flex items-center gap-4 md:gap-8 flex-wrap">
                <Link href="#contact" className="cp-solid-btn">
                  {hero.ctaPrimary}
                </Link>
                <Link href="#map" className="cp-link">
                  <span className="cp-link__label">{hero.ctaSecondary}</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TimeIsMoney lang={lang} />

      <WhyAizen lang={lang} />

      <section id="map" className="py-[40px] md:py-[80px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }} className="text-center mb-8 md:mb-20">
            <Reveal>
              <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                Choisissez votre pays
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-cinematic text-title-lg mt-4">
                Une offre locale,
                <br />
                un studio global.
              </h2>
            </Reveal>
          </div>
          <div className="col-content md:col-narrow">
            <Reveal delay={0.2} yOffset={60}>
              <AfricaMap />
            </Reveal>
          </div>
        </div>
      </section>

      <AgentsAtWork lang={lang} />

      <ContactHub lang={lang} />

      <FAQ lang={lang} />
    </>
  );
}
