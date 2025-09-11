"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "success" | "warning" | "info" | "accent";

type Size = "sm" | "md" | "lg";

interface IconTextProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-2.5 py-1 text-xs gap-1.5",
  md: "px-3 py-1.5 text-sm gap-2",
  lg: "px-3.5 py-2 text-base gap-2.5",
};

const variantClasses: Record<Variant, string> = {
  default: "chip",
  success: "chip-success",
  warning: "chip-warning",
  info: "chip-info",
  accent: "chip-accent",
};

export function IconText({ icon, children, className, variant = "default", size = "md" }: IconTextProps) {
  return (
    <span className={cn(variantClasses[variant], sizeClasses[size], className)}>
      <span className="inline-flex items-center justify-center">{icon}</span>
      <span>{children}</span>
    </span>
  );
}
