import { useEffect, useState } from 'react'

import { Store } from './store'

/**
 * @summary 스토어를 리액트에서 상태로 사용할 수 있도록 도와주는 hook
 */
export const useStore = <T>(store: Store<T>) => {
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState())
    })

    return unsubscribe
  }, [store])

  return [state, store.setState] as const
}
