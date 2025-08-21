"use client"

import React from "react"
import Link from "next/link"
import { ShoppingBag, Store, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface StoreLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "animated" | "minimal"
}

export function StoreLogo({ 
  className, 
  size = "md", 
  variant = "default" 
}: StoreLogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12", 
    lg: "h-16 w-16"
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl"
  }

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
  }

  if (variant === "minimal") {
    return (
      <Link href="/products" className={cn("group", className)}>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className={cn(
            "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105",
            sizeClasses[size]
          )}>
            <Store className={cn("transition-transform duration-300 group-hover:rotate-12", iconSizes[size])} />
            <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-yellow-400 animate-pulse" />
          </div>
          <span className={cn(
            "font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600",
            textSizes[size]
          )}>
            متجر أطلس الشرق
          </span>
        </div>
      </Link>
    )
  }

  if (variant === "animated") {
    return (
      <Link href="/products" className={cn("group", className)}>
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className={cn(
            "relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110",
            sizeClasses[size]
          )}>
            <Store className={cn("transition-all duration-500 group-hover:rotate-12", iconSizes[size])} />
            <Sparkles className={cn(
              "absolute -top-1 -right-1 text-yellow-400 animate-bounce",
              size === "sm" ? "h-2 w-2" : size === "md" ? "h-3 w-3" : "h-4 w-4"
            )} />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600",
              textSizes[size]
            )}>
              متجر أطلس الشرق
            </span>
            <span className={cn(
              "text-xs text-gray-500 transition-colors duration-300 group-hover:text-blue-500",
              size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"
            )}>
              منتجات عالية الجودة
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href="/products" className={cn("group", className)}>
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <div className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105",
          sizeClasses[size]
        )}>
          <ShoppingBag className={cn("transition-transform duration-300 group-hover:scale-110", iconSizes[size])} />
          <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-yellow-400" />
        </div>
        <div className="flex flex-col">
          <span className={cn(
            "font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600",
            textSizes[size]
          )}>
            متجر أطلس الشرق
          </span>
          <span className={cn(
            "text-xs text-gray-500 transition-colors duration-300 group-hover:text-blue-500",
            size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"
          )}>
            اكتشف منتجاتنا المميزة
          </span>
        </div>
      </div>
    </Link>
  )
}

// شعار المتجر للهيدر
export function HeaderStoreLogo() {
  return (
    <Link href="/products" className="group">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <div className="relative flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
          <Store className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
          <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
        </div>
        <span className="font-semibold text-white text-sm transition-colors duration-300 group-hover:text-blue-200">
          متجر أطلس الشرق
        </span>
      </div>
    </Link>
  )
}

// شعار المتجر للصفحة الرئيسية
export function HeroStoreLogo() {
  return (
    <Link href="/products" className="group">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="relative flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-110">
          <Store className="h-8 w-8 transition-all duration-500 group-hover:rotate-12" />
          <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-yellow-400 animate-bounce" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
            متجر أطلس الشرق
          </span>
          <span className="text-base text-gray-600 transition-colors duration-300 group-hover:text-blue-500">
            اكتشف مجموعة متنوعة من المنتجات عالية الجودة
          </span>
        </div>
      </div>
    </Link>
  )
}

