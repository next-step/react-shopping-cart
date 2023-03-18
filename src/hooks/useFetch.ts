import { useState, useEffect } from 'react'

type UseFetchReturnType<T> = {
  payload: T | null
  isLoading: boolean
  isError: boolean
}

const useFetch = <T>(url: string): UseFetchReturnType<T> => {
  const [payload, setPayload] = useState<T | null>(null)
  const [isLoading, setLoading] = useState<boolean>(true)
  const [isError, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const json = await response.json()
        setPayload(json)
      } catch (error) {
        // Todo: 에러 핸들링
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { payload, isLoading, isError }
}

export default useFetch
