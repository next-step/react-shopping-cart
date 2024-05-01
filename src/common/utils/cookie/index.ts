import { CookieOptions } from './type'

/**
 * @summary name에 해당하는 쿠키 값을 가져온다.
 * @reference https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#example_2_get_a_sample_cookie_named_test2
 */
export function getCookie<T>(name: T) {
  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1]

  return decodeURIComponent(cookie || '')
}

/**
 * @summary 쿠키를 저장한다.
 * @reference https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
 */
export function setCookie<Key extends string, Value>(
  name: Key,
  value: Value,
  options: CookieOptions
) {
  const cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(JSON.stringify(value))}`

  // eslint-disable-next-line no-shadow
  const cookieOptions = Object.entries(options).reduce((prev, [key, value]) => {
    switch (key) {
      case 'expires':
        return (prev += `; expires=${(value as Date).toUTCString()}`)
      default:
        return (prev += `; ${key}=${value}`)
    }
  }, '')

  document.cookie = cookieString + cookieOptions
}
