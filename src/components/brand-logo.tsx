"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  variant?: "default" | "white" | "mono";
}

const sizeMap = {
  sm: { width: 80, height: 40 },
  md: { width: 120, height: 60 },
  lg: { width: 160, height: 80 },
  xl: { width: 200, height: 100 },
};

export function BrandLogo({
  className,
  size = "md",
  animated = false,
  variant = "default",
}: BrandLogoProps) {
  const dimensions = sizeMap[size];

  // Use the appropriate logo based on variant
  const logoSrc =
    variant === "default" ? "/assets/logo.png" : "/assets/logo.png";
  const logoAlt = "Atlas Al Sharq";

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        animated && "group",
        className,
      )}
    >
      {/* Animated glow effect */}
      {animated && (
        <div
          className="absolute inset-0 rounded-full bg-atlas-gold-500/20 blur-xl motion-reduce:hidden animate-atlas-glow"
          aria-hidden="true"
        />
      )}

      {/* Logo with optional animation */}
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={dimensions.width}
        height={dimensions.height}
        className={cn(
          "relative z-10 h-auto",
          variant === "white" && "brightness-0 invert",
          variant === "mono" && "grayscale",
          animated && [
            "transition-all duration-700 ease-out",
            "group-hover:scale-110 motion-reduce:group-hover:scale-100",
            "motion-reduce:animate-none animate-atlas-fade-in",
          ],
        )}
        priority
      />

      {/* Animated shine effect for hover */}
      {animated && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 motion-reduce:hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-atlas-shine animate-atlas-shine" />
        </div>
      )}
    </div>
  );
}

// Export a static version for SSR contexts
export function BrandLogoStatic(props: Omit<BrandLogoProps, "animated">) {
  return <BrandLogo {...props} animated={false} />;
}

