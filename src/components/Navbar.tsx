"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

// Home: Expertise → Régions → Nos agents IA → Contact → FAQ
const HOME_LINKS = [
  { label: "Expertise",      href: "/#expertise" },
  { label: "Régions",        href: "/#map" },
  { label: "Nos agents IA",  href: "/#agents" },
  { label: "Contact",        href: "/#contact" },
  { label: "FAQ",            href: "/#faq" },
];

// Country (FR): Expertise → Nos agents IA → Forfaits → Contact → FAQ
const COUNTRY_LINKS_FR = [
  { label: "Expertise",     href: "#expertise" },
  { label: "Nos agents IA", href: "#agents" },
  { label: "Forfaits",      href: "#pricing" },
  { label: "Contact",       href: "#contact" },
  { label: "FAQ",           href: "#faq" },
];

// Country (EN): Expertise → AI Agents → Plans → Contact → FAQ
const COUNTRY_LINKS_EN = [
  { label: "Expertise",  href: "#expertise" },
  { label: "AI Agents",  href: "#agents" },
  { label: "Plans",      href: "#pricing" },
  { label: "Contact",    href: "#contact" },
  { label: "FAQ",        href: "#faq" },
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
        <div style={{ gridColumn: "2 / span 2" }}>
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
          className="hidden md:flex items-center gap-6 justify-center"
          style={{ gridColumn: "4 / span 8" }}
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
          style={{ gridColumn: "12 / span 2" }}
        >
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
