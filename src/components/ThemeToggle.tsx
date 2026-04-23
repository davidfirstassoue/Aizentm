"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

const STORAGE_KEY = "aizen-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("theme-light", theme === "light");
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setMounted(true);
    const currentTheme = document.documentElement.classList.contains("theme-light") ? "light" : "dark";
    setTheme(currentTheme);
  }, []);

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
    >
      {!mounted ? (
        <div className="w-4 h-4" /> // Placeholder while mounting
      ) : theme === "dark" ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
    </button>
  );
}
