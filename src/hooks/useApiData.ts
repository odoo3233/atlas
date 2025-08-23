import { useState, useEffect, useCallback, useRef } from 'react'
import { handleError } from '@/lib/error-handler'

interface UseApiDataOptions {
  cacheTime?: number // Time in milliseconds
  refetchInterval?: number
  enabled?: boolean
}

interface CacheEntry {
  data: any
  timestamp: number
}

// Simple in-memory cache
const cache = new Map<string, CacheEntry>()

export function useApiData<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: UseApiDataOptions = {}
) {
  const {
    cacheTime = 5 * 60 * 1000, // 5 minutes default
    refetchInterval,
    enabled = true
  } = options

  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const intervalRef = useRef<NodeJS.Timeout>()

  const fetchData = useCallback(async (skipCache = false) => {
    try {
      // Check cache first
      if (!skipCache && cache.has(key)) {
        const cached = cache.get(key)!
        const age = Date.now() - cached.timestamp
        
        if (age < cacheTime) {
          setData(cached.data)
          setLoading(false)
          return cached.data
        }
      }

      setLoading(true)
      setError(null)
      
      const result = await fetcher()
      
      // Update cache
      cache.set(key, {
        data: result,
        timestamp: Date.now()
      })
      
      setData(result)
      return result
    } catch (err) {
      const { message } = handleError(err)
      setError(message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [key, fetcher, cacheTime])

  useEffect(() => {
    if (enabled) {
      fetchData()
    }

    // Set up refetch interval if specified
    if (refetchInterval && enabled) {
      intervalRef.current = setInterval(() => {
        fetchData(true) // Skip cache on interval refetch
      }, refetchInterval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [fetchData, refetchInterval, enabled])

  const refetch = useCallback(() => {
    return fetchData(true) // Skip cache on manual refetch
  }, [fetchData])

  const mutate = useCallback((newData: T) => {
    setData(newData)
    cache.set(key, {
      data: newData,
      timestamp: Date.now()
    })
  }, [key])

  return {
    data,
    loading,
    error,
    refetch,
    mutate
  }
}

// Hook for paginated data
export function usePaginatedData<T>(
  key: string,
  fetcher: (page: number, limit: number) => Promise<{ data: T[]; total: number }>,
  options: UseApiDataOptions & { limit?: number } = {}
) {
  const { limit = 10, ...apiOptions } = options
  const [page, setPage] = useState(1)
  const [items, setItems] = useState<T[]>([])
  const [total, setTotal] = useState(0)

  const paginatedFetcher = useCallback(async () => {
    const result = await fetcher(page, limit)
    setItems(result.data)
    setTotal(result.total)
    return result
  }, [fetcher, page, limit])

  const { loading, error, refetch } = useApiData(
    `${key}-page-${page}-limit-${limit}`,
    paginatedFetcher,
    apiOptions
  )

  const totalPages = Math.ceil(total / limit)

  const goToPage = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage)
    }
  }, [totalPages])

  const nextPage = useCallback(() => {
    goToPage(page + 1)
  }, [page, goToPage])

  const prevPage = useCallback(() => {
    goToPage(page - 1)
  }, [page, goToPage])

  return {
    items,
    loading,
    error,
    page,
    totalPages,
    total,
    goToPage,
    nextPage,
    prevPage,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
    refetch
  }
}
