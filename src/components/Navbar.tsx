"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

// Home: Expertise → Nos agents IA → Régions → Contact → FAQ
const HOME_LINKS = [
  { label: "Expertise",      href: "/#expertise" },
  { label: "Nos agents IA",  href: "/#agents" },
  { label: "Régions",        href: "/#map" },
  { label: "Contact",        href: "/#contact" },
  { label: "FAQ",            href: "/#faq" },
];

// Country (FR): Expertise → Forfaits → Contact → Devis
const COUNTRY_LINKS_FR = [
  { label: "Expertise", href: "#expertise" },
  { label: "Forfaits",  href: "#pricing" },
  { label: "Contact",   href: "#contact" },
  { label: "Devis",     href: "#contact" },
];

// Country (EN): Expertise → Plans → Contact → Quote
const COUNTRY_LINKS_EN = [
  { label: "Expertise", href: "#expertise" },
  { label: "Plans",     href: "#pricing" },
  { label: "Contact",   href: "#contact" },
  { label: "Quote",     href: "#contact" },
];

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: "-10% 0px -85% 0px",
  threshold: 0,
};

function hrefToId(href: string): string | null {
  const idx = href.indexOf("#");
  return idx !== -1 ? href.slice(idx + 1) : null;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const intersectingRef = useRef<Set<string>>(new Set());
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const isEnglish = pathname === "/za" || pathname === "/ke";
  const links = isHome ? HOME_LINKS : isEnglish ? COUNTRY_LINKS_EN : COUNTRY_LINKS_FR;

  const sectionIds = useMemo(
    () => [...new Set(links.map((l) => hrefToId(l.href)).filter(Boolean) as string[])],
    [links]
  );

  const handleIntersection = useCallback<IntersectionObserverCallback>(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) intersectingRef.current.add(e.target.id);
        else intersectingRef.current.delete(e.target.id);
      });
      const winner =
        [...intersectingRef.current].sort((a, b) => {
          const tA = document.getElementById(a)?.getBoundingClientRect().top ?? 0;
          const tB = document.getElementById(b)?.getBoundingClientRect().top ?? 0;
          return tA - tB;
        })[0] ?? null;
      setActiveId(winner);
    },
    []
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    const elements: Element[] = [];

    const rafId = requestAnimationFrame(() => {
      observer = new IntersectionObserver(handleIntersection, OBSERVER_OPTIONS);
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) { observer.observe(el); elements.push(el); }
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      observer?.disconnect();
      intersectingRef.current.clear();
      setActiveId(null);
    };
  }, [sectionIds, handleIntersection]);

  return (
    <header className="cp-nav-wrap">
      <nav className="display-grid items-center">
        <div style={{ gridColumn: "2 / span 3" }}>
          <Link
            href="/"
            className="flex items-center no-underline text-[color:var(--text)] hover:opacity-80 transition-opacity"
            aria-label="Aizen Home"
          >
            <div className="relative h-[50px] w-[140px] md:w-[300px]">
              <AnimatePresence mode="wait" initial={false}>
                {!scrolled ? (
                  <motion.span
                    key="text"
                    className="text-cinematic text-[20px] md:text-[28px] tracking-tight text-[color:var(--text)] absolute inset-0 flex items-center"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.25 }}
                  >
                    AIZEN
                  </motion.span>
                ) : (
                  <motion.div
                    key="logo"
                    className="absolute inset-0 flex items-center"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Logo size={50} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Link>
        </div>

        <ul
          className="hidden md:flex items-center gap-8 justify-center"
          style={{ gridColumn: "5 / span 6" }}
        >
          {links.map((link) => {
            const id = hrefToId(link.href);
            const isActive = id !== null && id === activeId;
            return (
              <li key={`${link.label}-${link.href}`}>
                <Link href={link.href} className="cp-link">
                  <span
                    className={`cp-link__label text-cinematic tracking-[0.1em]${isActive ? " cp-link__label--active" : ""}`}
                    style={isActive ? { opacity: 1 } : undefined}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          className="flex items-center justify-end gap-3"
          style={{ gridColumn: "11 / span 3" }}
        >
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
