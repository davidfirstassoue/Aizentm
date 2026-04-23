import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-[80px] md:mt-[200px] border-t border-[color:var(--border-faint)] py-16">
      <div className="display-grid">
        <div style={{ gridColumn: "2 / -2" }}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-0">
            <div className="md:col-span-4">
              <Logo size={80} />
              <p className="mt-4 text-[12px] text-[color:var(--text-muted)] not-italic font-normal max-w-xs">
                Automatisation IA & création web pour les Entreprises et les PME africaines.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-6">
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
            <div className="md:col-span-2 md:col-start-9">
              <p className="text-label text-cinematic text-[color:var(--text-muted)]">Réseaux</p>
              <div className="mt-4 flex gap-4">
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.031 4.388 11.031 10.125 11.927v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.104 24 18.104 24 12.073z"/></svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[color:var(--text-muted)] hover:text-[color:var(--text)] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>
            <div className="md:col-span-2 md:col-start-11" id="footer-contact">
              <p className="text-label text-cinematic text-[color:var(--text-muted)]">Contact</p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="mailto:hello@aizen.africa" className="text-[12px] not-italic font-normal no-underline text-[color:var(--text)]">
                    hello@aizen.africa
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="mt-8 md:mt-16 pt-8 border-t border-[color:var(--border-faint)] text-[10px] text-cinematic text-[color:var(--text-muted)]"
          style={{ gridColumn: "2 / -2" }}
        >
          © {new Date().getFullYear()} Aizen — Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
