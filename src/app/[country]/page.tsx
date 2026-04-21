import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  COUNTRIES,
  COUNTRY_CODES,
  PACKS,
  formatPrice,
  isCountryCode,
  type CountryCode,
} from "@/lib/countries";
import { Reveal } from "@/components/Reveal";

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
  return {
    title: `Aizen ${c.name} — Automatisation IA & Web`,
    description: `Offres Aizen adaptées au marché ${c.name}. Sites, sécurité, Odoo, serveurs dédiés en ${c.currency}.`,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { country } = await params;
  if (!isCountryCode(country)) notFound();

  const info = COUNTRIES[country];

  return (
    <>
      <section className="pt-[180px] pb-[120px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }}>
            <Reveal delay={0.1}>
              <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                {info.flag} Aizen · {info.name}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-cinematic text-hero mt-6">
                Un studio IA
                <br />
                à {info.capital}.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-8 max-w-xl text-[16px] not-italic font-normal text-[color:var(--text-muted)]">
                Des forfaits pensés pour les PME {info.demonym} : hébergement local, tarifs en {info.currency}, support francophone.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-10">
                <Link href="#pricing" className="cp-outline-btn">
                  Voir les forfaits
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-[120px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }} className="mb-16">
            <Reveal>
              <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                Forfaits
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-cinematic text-title-lg mt-4">
                Des offres claires.
              </h2>
            </Reveal>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{ gridColumn: "2 / -2" }}
          >
            {PACKS.map((pack, idx) => (
              <Reveal key={pack.id} delay={0.2 + idx * 0.1}>
                <article className="border border-[color:var(--border-soft)] rounded-[var(--radius-sm)] p-8 flex flex-col hover:border-[color:var(--primary)] hover:bg-[color:var(--primary)]/[0.03] transition-all duration-300 h-full group">
                  <p className="text-label text-cinematic text-[color:var(--text-muted)] group-hover:text-[color:var(--primary)] transition-colors">
                    Pack
                  </p>
                  <h3 className="text-cinematic text-[24px] mt-2 group-hover:text-[color:var(--text)] transition-colors">{pack.name}</h3>
                  <p className="mt-2 text-[12px] not-italic font-normal text-[color:var(--text-muted)] group-hover:text-[color:var(--text)] transition-colors opacity-80">
                    {pack.tagline}
                  </p>
                  <p className="mt-6 text-cinematic text-[28px]">
                    {formatPrice(info.prices[pack.id], info.currency)}
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
                  <Link href="/#contact" className="cp-outline-btn mt-8">
                    Démarrer
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }}>
            <Reveal delay={0.1}>
              <div
                className="relative p-16 rounded-[var(--radius-sm)] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in srgb, var(--primary) 4%, transparent), transparent 70%)",
                  border: "1px solid var(--border-soft)",
                }}
              >
                <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                  Toujours inclus
                </p>
                <h3 className="text-cinematic text-title-lg mt-4">
                  + pratique. + sécurisé.
                  <br />+ rapide.
                </h3>
                <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    "Mises à jour continues",
                    "Sauvegardes chiffrées",
                    "Support francophone",
                    "SEO local",
                    "Monitoring 24/7",
                    "Formation équipe",
                  ].map((item, idx) => (
                    <Reveal key={item} delay={0.2 + idx * 0.05} yOffset={20}>
                      <li className="text-[14px] not-italic font-normal">
                        <span className="text-cinematic text-[color:var(--text-muted)] mr-2">
                          +
                        </span>
                        {item}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-[120px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }} className="mb-12">
            <Reveal>
              <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                Aizen ❤ l&apos;innovation
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-cinematic text-title-lg mt-4">
                Des PME qui avancent.
              </h2>
            </Reveal>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            style={{ gridColumn: "2 / -2" }}
          >
            {[1, 2, 3, 4].map((i, idx) => (
              <Reveal key={i} delay={0.2 + idx * 0.1}>
                <div
                  className="aspect-[4/5] border border-[color:var(--border-soft)] rounded-[var(--radius-sm)] hover:border-[color:var(--primary)] transition-colors"
                  style={{
                    background:
                      "linear-gradient(135deg, color-mix(in srgb, var(--primary) 8%, transparent), transparent 80%)",
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[120px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }} className="text-center">
            <Reveal>
              <Link href="/" className="cp-link">
                <span className="cp-link__label">← Retour à l&apos;accueil</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
