import Link from "next/link";
import { AfricaMap } from "@/components/AfricaMap";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
        <div className="display-grid w-full relative z-10">
          <div style={{ gridColumn: "2 / -2" }}>
            <Reveal delay={0.1}>
              <p className="text-label text-cinematic text-[color:var(--text-muted)] mb-6">
                Studio · Automatisation IA & Web
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-cinematic text-hero">
                Aizen
                <br />
                <span className="text-[color:var(--text-muted)]">
                  pour les PME
                </span>
                <br />
                africaines.
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-8">
                <Link href="#map" className="cp-outline-btn">
                  Choisir ma région
                </Link>
                <Link href="#expertise" className="cp-link">
                  <span className="cp-link__label">Découvrir l&apos;expertise</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="map" className="py-[160px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }} className="text-center mb-20">
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
          <div style={{ gridColumn: "3 / -3" }}>
            <Reveal delay={0.2} yOffset={60}>
              <AfricaMap />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="expertise" className="py-[160px]">
        <div className="display-grid">
          <div style={{ gridColumn: "2 / -2" }} className="mb-16">
            <Reveal>
              <p className="text-label text-cinematic text-[color:var(--text-muted)]">
                Expertise
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-cinematic text-title-lg mt-4">
                Automatiser.
                <br />
                Vendre. Scaler.
              </h2>
            </Reveal>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ gridColumn: "2 / -2" }}
          >
            {[
              { title: "Chat", desc: "Discutez avec notre équipe en direct." },
              { title: "Rendez-vous", desc: "Planifiez un appel stratégique de 30 min." },
              { title: "Email", desc: "Recevez un devis personnalisé sous 24h." },
            ].map((card, idx) => (
              <Reveal key={card.title} delay={0.2 + idx * 0.1}>
                <div className="border border-[color:var(--border-soft)] rounded-[var(--radius-sm)] p-8 hover:border-[color:var(--primary)] hover:bg-[color:var(--primary)]/[0.03] transition-all duration-300 h-full group">
                  <p className="text-label text-cinematic text-[color:var(--text-muted)] group-hover:text-[color:var(--primary)] transition-colors">
                    Contact
                  </p>
                  <h3 className="text-cinematic text-[28px] mt-3">{card.title}</h3>
                  <p className="mt-4 text-[13px] not-italic font-normal text-[color:var(--text-muted)] group-hover:text-[color:var(--text)] transition-colors">
                    {card.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
