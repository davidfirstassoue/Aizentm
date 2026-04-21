import React from "react";
import Image from "next/image";

/**
 * Aizen Logo Component
 * Uses the user's provided PNG assets.
 * Implements a CSS-based theme swap for perfect transition.
 */
export const Logo = ({
  className = "",
  size = 24,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <div className={`relative flex items-center ${className}`} style={{ height: size, width: size * 6 }}>
      {/* Light Logo for Dark Mode (Default) */}
      <div className="absolute inset-0 theme-light:hidden">
        <Image
          src="/logo_blanc.png"
          alt="Aizen"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
      {/* Dark Logo for Light Mode */}
      <div className="absolute inset-0 hidden theme-light:block">
        <Image
          src="/logo_noir.png"
          alt="Aizen"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </div>
  );
};
