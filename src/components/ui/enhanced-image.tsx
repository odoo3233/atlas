"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface EnhancedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  containerClassName?: string;
  hoverEffect?: boolean;
  professional?: boolean;
}

export function EnhancedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
  quality = 90,
  placeholder = "empty",
  blurDataURL,
  containerClassName,
  hoverEffect = true,
  professional = true,
}: EnhancedImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        professional && "professional-card",
        hoverEffect && "group",
        containerClassName,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "hq-image transition-all duration-300",
          hoverEffect && "group-hover:scale-105",
          className,
        )}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      {hoverEffect && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </div>
  );
}

export function HeroImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("image-container", className)}>
      <EnhancedImage
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        priority={true}
        quality={95}
        professional={true}
        hoverEffect={false}
        className="w-full h-full"
      />
    </div>
  );
}

export function ProductImage({
  src,
  alt,
  className,
  placeholder = "empty",
}: {
  src: string;
  alt: string;
  className?: string;
  placeholder?: "blur" | "empty";
}) {
  return (
    <EnhancedImage
      src={src}
      alt={alt}
      width={400}
      height={400}
      quality={85}
      professional={true}
      hoverEffect={true}
      className={cn("aspect-square", className)}
      placeholder={placeholder}
    />
  );
}

export function ServiceImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <EnhancedImage
      src={src}
      alt={alt}
      width={600}
      height={400}
      quality={90}
      professional={true}
      hoverEffect={true}
      className={cn("aspect-video", className)}
    />
  );
}
