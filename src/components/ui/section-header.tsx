"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  icon?: React.ReactNode;
  badgeKey?: string;
  titleKey?: string;
  subtitleKey?: string;
  fallbackBadge?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  align?: "center" | "start";
  className?: string;
}

export function SectionHeader({
  icon,
  badgeKey,
  titleKey,
  subtitleKey,
  fallbackBadge,
  fallbackTitle,
  fallbackSubtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const { t } = useTranslation();

  const alignment = align === "center" ? "text-center items-center" : "text-start items-start";

  return (
    <div className={cn("flex flex-col gap-4 mb-10", alignment, className)}>
      {(badgeKey || fallbackBadge) && (
        <div className="inline-flex items-center px-4 py-2 glass rounded-full text-base font-semibold animate-fade-in">
          {icon && <span className="mr-3 rtl:mr-0 rtl:ml-3">{icon}</span>}
          {badgeKey ? t(badgeKey, fallbackBadge) : fallbackBadge}
        </div>
      )}
      {(titleKey || fallbackTitle) && (
        <h2 className="text-3xl md:text-4xl font-bold text-foreground animate-fade-in">
          {titleKey ? t(titleKey, fallbackTitle) : fallbackTitle}
        </h2>
      )}
      {(subtitleKey || fallbackSubtitle) && (
        <p className="text-lg text-muted-foreground max-w-3xl animate-fade-up">
          {subtitleKey ? t(subtitleKey, fallbackSubtitle) : fallbackSubtitle}
        </p>
      )}
    </div>
  );
}


