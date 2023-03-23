export const asyncRequest = (url: string, options?: RequestInit) => {
  return fetch(url, options)
}
