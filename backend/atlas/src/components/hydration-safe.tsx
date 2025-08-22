'use client'

import { useEffect, useState } from 'react'

interface HydrationSafeProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function HydrationSafe({ children, fallback }: HydrationSafeProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return fallback || (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    )
  }

  return <>{children}</>
}

export function ClientOnly({ children, fallback }: HydrationSafeProps) {
  return <HydrationSafe fallback={fallback}>{children}</HydrationSafe>
}
