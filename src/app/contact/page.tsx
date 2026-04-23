import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Aizen",
  description: "Contactez l'équipe Aizen. Envoyez-nous un message et recevez une réponse personnalisée sous 24h.",
};

export default function ContactPage() {
  return (
    <section className="py-[80px] md:py-[140px]">
      <div className="display-grid">
        <div style={{ gridColumn: "2 / -2" }} className="max-w-2xl mx-auto w-full text-center">
          <p className="text-label text-cinematic text-[color:var(--text-muted)]">Contact</p>
          <h1 className="text-cinematic text-title-lg mt-4">
            Écrivez-nous.
          </h1>
          <p className="mt-4 text-[14px] not-italic font-normal text-[color:var(--text-muted)] mx-auto max-w-lg">
            Décrivez votre situation en quelques lignes. Notre équipe vous répond sous 24h avec une proposition concrète.
          </p>
        </div>

        <div style={{ gridColumn: "2 / -2" }} className="mt-12 md:mt-16 flex justify-center">
          <ContactForm lang="fr" />
        </div>
      </div>
    </section>
  );
}
