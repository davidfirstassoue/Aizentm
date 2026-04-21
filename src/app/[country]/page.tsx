import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  COUNTRIES,
  COUNTRY_CODES,
  PACKS,
  isCountryCode,
  type CountryCode,
} from "@/lib/countries";
import { t } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { WhyAizen } from "@/components/WhyAizen";
import { TimeIsMoney } from "@/components/TimeIsMoney";
import { AgentsAtWork } from "@/components/AgentsAtWork";
import { ContactHub } from "@/components/ContactHub";
import { FAQ } from "@/components/FAQ";
import { GrowthStats } from "@/components/GrowthStats";

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
      <section className="pt-[100px] md:pt-[180px] pb-[60px] md:pb-[100px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }}>
            <Reveal delay={0.1}>
              <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                {info.flag} {copy.countryHero.eyebrowStudio} ·{" "}
                {capital.toUpperCase()}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-cinematic text-hero mt-6">
                {copy.countryHero.titleLines[0]}
                <br />
                <span className="text-[color:var(--text-muted)]">
                  {copy.countryHero.titleLines[1]}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-2xl text-[16px] not-italic font-normal text-[color:var(--text-muted)]">
                {copy.countryHero.subtitle(countryWithPrep, capital, isMorocco)}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
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

      <WhyAizen lang={lang} />

      <TimeIsMoney lang={lang} />

      <AgentsAtWork lang={lang} />

      <ContactHub lang={lang} />

      <section id="pricing" className="py-[60px] md:py-[120px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }} className="mb-6 md:mb-12">
            <Reveal>
              <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                {copy.pricing.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-cinematic text-title-lg mt-4">
                {copy.pricing.title}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-3xl text-[14px] not-italic font-normal text-[color:var(--text-muted)]">
                {copy.pricing.valueProp}
              </p>
            </Reveal>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ gridColumn: "2 / -2" }}
          >
            {PACKS.map((pack, idx) => (
              <Reveal key={pack.id} delay={0.2 + idx * 0.1}>
                <article
                  className={`border rounded-[var(--radius-sm)] p-5 md:p-8 flex flex-col transition-all duration-300 h-full group relative ${
                    pack.id === "odoo-cloud"
                      ? "border-[color:var(--primary)] bg-[color:var(--primary)]/[0.02]"
                      : "border-[color:var(--border-soft)] hover:border-[color:var(--primary)] hover:bg-[color:var(--primary)]/[0.03]"
                  }`}
                >
                  {pack.id === "odoo-cloud" && (
                    <span className="absolute -top-3 left-8 bg-[color:var(--text)] text-[color:var(--bg)] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                      {lang === "en" ? "Most popular" : "Le plus populaire"}
                    </span>
                  )}
                  <p className="text-label text-cinematic text-[color:var(--text-muted)] group-hover:text-[color:var(--primary)] transition-colors">
                    {copy.pricing.packLabel}
                  </p>
                  <h3 className="text-cinematic text-[22px] md:text-[24px] mt-2 group-hover:text-[color:var(--text)] transition-colors">
                    {pack.name}
                  </h3>
                  <p className="mt-2 text-[12px] not-italic font-normal text-[color:var(--text-muted)] group-hover:text-[color:var(--text)] transition-colors opacity-80">
                    {pack.tagline}
                  </p>
                  <ul className="mt-6 space-y-2 flex-1">
                    {pack.features.map((f) => (
                      <li
                        key={f}
                        className="text-[12px] not-italic font-normal text-[color:var(--text-muted)] before:content-['—'] before:mr-2"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact" className="cp-outline-btn mt-8">
                    {copy.pricing.startCta}
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <div style={{ gridColumn: "2 / -2" }} className="mt-10 md:mt-16 text-center">
            <Reveal delay={0.4}>
              <p className="text-[14px] not-italic font-normal text-[color:var(--text-muted)] mb-8">
                {copy.pricing.footerText(info.currency)}
              </p>
              <Link href="#contact" className="cp-solid-btn mx-auto inline-flex">
                {copy.pricing.finalCta}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-[60px] md:py-[120px]">
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

      <section className="py-[40px] md:py-[80px]">
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
