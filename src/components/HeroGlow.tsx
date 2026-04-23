"use client";

import { motion } from "framer-motion";

export function HeroGlow({ color }: { color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse 70% 55% at 20% 55%, ${color}, transparent 70%)`,
      }}
    />
  );
}
