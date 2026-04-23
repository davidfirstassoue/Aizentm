import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  COUNTRIES,
  COUNTRY_CODES,
  isCountryCode,
  type CountryCode,
} from "@/lib/countries";
import { t } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { HeroGlow } from "@/components/HeroGlow";
import { WhyAizen } from "@/components/WhyAizen";
import { TimeIsMoney } from "@/components/TimeIsMoney";
import { AgentsAtWork } from "@/components/AgentsAtWork";
import { ContactHub } from "@/components/ContactHub";
import { FAQ } from "@/components/FAQ";
import { GrowthStats } from "@/components/GrowthStats";
import { PricingSection } from "@/components/PricingSection";

type Params = { country: string };

export function generateStaticParams(): { country: CountryCode }[] {
  return COUNTRY_CODES.map((country) => ({ country }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { country } = await params;
  if (!isCountryCode(country)) return { title: "Aizen" };
  const c = COUNTRIES[country];
  const displayName = c.language === "en" ? c.nameEn ?? c.name : c.name;
  if (c.language === "en") {
    return {
      title: `Aizen ${displayName} — AI & Web Automation`,
      description: `Aizen plans tailored to the ${displayName} market. Sites, security, Odoo, dedicated servers priced in ${c.currency}.`,
    };
  }
  return {
    title: `Aizen ${displayName} — Automatisation IA & Web`,
    description: `Offres Aizen adaptées au marché ${displayName}. Sites, sécurité, Odoo, serveurs dédiés en ${c.currency}.`,
  };
}

function getFrenchPreposition(country: string): string {
  const c = country.toLowerCase();
  const au = ["gabon", "maroc", "sénégal", "cameroun", "mali", "burkina faso", "niger", "bénin", "togo", "congo", "tchad", "rwanda", "burundi", "kenya"];
  if (au.includes(c)) return `au ${country}`;
  const en = ["côte d'ivoire", "rdc", "guinée", "guinée-bissau", "guinée équatoriale", "mauritanie", "algérie", "tunisie", "libye", "centrafrique", "afrique du sud"];
  if (en.includes(c)) return `en ${country}`;
  const a = ["madagascar", "djibouti", "sao tomé-et-principe"];
  if (a.includes(c)) return `à ${country}`;
  if (["a", "e", "i", "o", "u"].includes(c[0])) return `en ${country}`;
  if (c.endsWith("e")) return `en ${country}`;
  return `au ${country}`;
}

export default async function CountryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { country } = await params;
  if (!isCountryCode(country)) notFound();

  const info = COUNTRIES[country];
  const lang = info.language;
  const copy = t(lang);

  const countryName = lang === "en" ? info.nameEn ?? info.name : info.name;
  const capital = info.capital;
  const isMorocco = country === "ma";

  const countryWithPrep = lang === "en" ? `in ${countryName}` : getFrenchPreposition(countryName);

  return (
    <>
      <section className="relative pt-[100px] md:pt-[180px] pb-[60px] md:pb-[100px] overflow-hidden">
        {info.color && <HeroGlow color={info.color} />}
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }} className="relative z-10">
            <Reveal delay={0.1}>
              <p className="text-label text-cinematic text-[color:var(--primary)]">
                {info.flag} {copy.countryHero.eyebrowStudio}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-cinematic text-hero mt-4 leading-[0.92]">
                {capital.toUpperCase()}
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-cinematic text-title-lg mt-5 text-[color:var(--text-muted)] leading-tight">
                {copy.countryHero.titleLines[0]}
                <br />
                {copy.countryHero.titleLines[1]}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="mt-6 max-w-2xl text-[16px] not-italic font-normal text-[color:var(--text-muted)]">
                {copy.countryHero.subtitle(countryWithPrep, capital, isMorocco)}
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-10 flex items-center gap-4 md:gap-8 flex-wrap">
                <Link href="#contact" className="cp-solid-btn">
                  {copy.countryHero.ctaPrimary}
                </Link>
                <Link href="#pricing" className="cp-link">
                  <span className="cp-link__label">
                    {copy.countryHero.ctaSecondary}
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TimeIsMoney lang={lang} />

      <WhyAizen lang={lang} />

      <AgentsAtWork lang={lang} />

      <ContactHub lang={lang} />

      <PricingSection lang={lang} />

      <section className="py-[40px] md:py-[80px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }}>
            <Reveal delay={0.1}>
              <div
                className="relative p-6 md:p-12 lg:p-16 rounded-[var(--radius-sm)] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--primary) 4%, transparent), transparent 70%)",
                  border: "1px solid var(--border-soft)",
                }}
              >
                <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                  {copy.included.eyebrow}
                </p>
                <h3 className="text-cinematic text-title-lg mt-4">
                  {copy.included.title[0]}
                  <br />
                  {copy.included.title[1]}
                </h3>
                <ul className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {copy.included.points.map((item, idx) => (
                    <Reveal key={item} delay={0.2 + idx * 0.05} yOffset={20}>
                      <li className="border-t border-[color:var(--border-soft)] pt-5">
                        <span className="text-cinematic text-[color:var(--primary)] text-[20px] mr-2">
                          +
                        </span>
                        <span className="text-[14px] not-italic font-normal text-[color:var(--text)]">
                          {item}
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GrowthStats lang={lang} />

      <FAQ lang={lang} />

      <section className="py-[24px] md:py-[48px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }} className="text-center">
            <Reveal>
              <Link href="/" className="cp-link">
                <span className="cp-link__label">{copy.misc.backHome}</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
