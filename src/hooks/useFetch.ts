import { useState, useEffect } from 'react'

interface UseFetchOptions {
  enabled?: boolean
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

  useEffect(() => {
    if (!options.enabled) return

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const json = await response.json()
        setPayload(json)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError(String(error))
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, options.enabled])

  return { payload, isLoading, error }
}

export default useFetch
