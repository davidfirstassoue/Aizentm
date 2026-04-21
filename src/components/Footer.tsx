import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-[200px] border-t border-[color:var(--border-faint)] py-16">
      <div className="display-grid">
        <div style={{ gridColumn: "2 / span 4" }}>
          <Logo size={80} />
          <p className="mt-4 text-[12px] text-[color:var(--text-muted)] not-italic font-normal max-w-xs">
            Automatisation IA & création web pour les PME africaines.
          </p>
        </div>
        <div style={{ gridColumn: "7 / span 3" }}>
          <p className="text-label text-cinematic text-[color:var(--text-muted)]">Studio</p>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/#expertise" className="text-[12px] not-italic font-normal no-underline text-[color:var(--text)]">
                Expertise
              </Link>
            </li>
            <li>
              <Link href="/#map" className="text-[12px] not-italic font-normal no-underline text-[color:var(--text)]">
                Régions
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ gridColumn: "10 / span 4" }} id="contact">
          <p className="text-label text-cinematic text-[color:var(--text-muted)]">Contact</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="mailto:hello@aizen.africa" className="text-[12px] not-italic font-normal no-underline text-[color:var(--text)]">
                hello@aizen.africa
              </a>
            </li>
          </ul>
        </div>
        <div
          className="mt-16 pt-8 border-t border-[color:var(--border-faint)] text-[10px] text-cinematic text-[color:var(--text-muted)]"
          style={{ gridColumn: "2 / -2" }}
        >
          © {new Date().getFullYear()} Aizen — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
