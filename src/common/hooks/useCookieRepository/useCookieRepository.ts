import { useEffect, useState } from 'react'

import { getCookie, setCookie } from '../../utils/cookie'
import { CookieOptions } from '../../utils/cookie/type'

interface CookieRepository<Key extends string, Value = unknown> {
  get(): Value | undefined
  set(value: Value): void
  remove(key: Key): void
  update(key: Key, value: Value): void
  clear(): void
}

/**
 * @summary 쿠키 레파지토리
 */
export const useCookie = <Key extends string, Value = unknown>(
  key: Key,
  option?: CookieOptions
): CookieRepository<Key, Value> => {
  const [cookie, setStateCookie] = useState<Value | undefined>()

  useEffect(() => {
    const initializeCookie = () => {
      // eslint-disable-next-line no-shadow
      const cookie = getCookie(key)

      if (cookie) {
        setStateCookie(JSON.parse(cookie) as Value)
      }
    }

    initializeCookie()
  }, [key])

  const get = () => {
    return cookie
  }

  const set = (value: Value) => {
    setStateCookie(value)

    setCookie(key, JSON.stringify(value), option ?? {})
  }

  const remove = () => {
    throw new Error('Not Implemented')
  }

  const update = () => {
    throw new Error('Not Implemented')
  }

  const clear = () => {
    throw new Error('Not Implemented')
  }

  return {
    get,
    set,
    remove,
    update,
    clear,
  }
}
