"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export function Reveal({ children, delay = 0, className = "", yOffset = 40 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom easing for premium feel
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
