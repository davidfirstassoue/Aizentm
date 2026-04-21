"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

const STORAGE_KEY = "aizen-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("theme-light", theme === "light");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check theme during initialization to avoid cascading renders
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("theme-light")
        ? "light"
        : "dark";
    }
    return "dark";
  });

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Activer le mode jour" : "Activer le mode nuit"}
      className="inline-flex items-center justify-center w-10 h-10 border border-[color:var(--border-soft)] rounded-[var(--radius-sm)] hover:border-[color:var(--border-strong)] transition-colors"
      suppressHydrationWarning
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
