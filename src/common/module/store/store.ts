export interface Store<T> {
  getState: () => T
  setState: (next: T | ((prev: T) => T)) => void
  subscribe: (callback: () => void) => () => void
}

/**
 * @summary 스토어를 생성한다.
 */
export const createStore = <T>(initialValue: T): Store<T> => {
  let state = initialValue
  const callbacks = new Set<() => void>()

  const getState = () => {
    return state
  }

  const setState = (next: T | ((prev: T) => T)) => {
    state = typeof next === 'function' ? (next as (prev: T) => T)(state) : next

    callbacks.forEach((callback) => callback())
  }

  const subscribe = (callback: () => void) => {
    callbacks.add(callback)

    return () => callbacks.delete(callback)
  }

  return {
    getState,
    setState,
    subscribe,
  }
}
