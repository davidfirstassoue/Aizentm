"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="cp-nav-wrap">
      <nav className="display-grid items-center">
        <div style={{ gridColumn: "2 / span 3" }}>
          <Link
            href="/"
            className="flex items-center no-underline text-[color:var(--text)] hover:opacity-80 transition-opacity"
            aria-label="Aizen Home"
          >
            <div className="relative h-[50px] w-[300px]">
              <AnimatePresence mode="wait" initial={false}>
                {!scrolled ? (
                  <motion.span
                    key="text"
                    className="text-cinematic text-[28px] tracking-[0.15em] text-[color:var(--text)] absolute inset-0 flex items-center"
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
          <li>
            <Link
              href="/#expertise"
              className="text-cinematic text-[10px] tracking-[0.1em] no-underline text-[color:var(--text)]"
            >
              Expertise
            </Link>
          </li>
          <li>
            <Link
              href="/#map"
              className="text-cinematic text-[10px] tracking-[0.1em] no-underline text-[color:var(--text)]"
            >
              Régions
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="text-cinematic text-[10px] tracking-[0.1em] no-underline text-[color:var(--text)]"
            >
              Contact
            </Link>
          </li>
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
