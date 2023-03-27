import { useState, useEffect, useCallback } from 'react'
import { z } from 'zod'

import { asyncRequest } from '@/domains'

interface UseFetchOptions {
  enabled?: boolean
  schema?: z.ZodTypeAny
}

type UseFetchReturnType<T> = {
  payload: T | null
  isLoading: boolean
  error: string | null
}

const useFetch = <T>(url: string, options: UseFetchOptions = { enabled: true }): UseFetchReturnType<T> => {
  const [payload, setPayload] = useState<T | null>(null)
  const [isLoading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      const response = await asyncRequest(url)

      if (!response.ok) {
        return Promise.reject(
          `response.ok에서 false가 반환됐어요. 에러 내용: ${response.status}, ${response.statusText}}`,
        )
      }
      const json = await response.json()
      if (options.schema) {
        options.schema.parse(json)
      }

      setPayload(json)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError(String(error))
      }
      throw error
    } finally {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  useEffect(() => {
    if (options.enabled === false) return
    fetchData()
  }, [options.enabled, fetchData])

  return { payload, isLoading, error }
}

export default useFetch
