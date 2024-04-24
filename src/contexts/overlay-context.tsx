import {
  createContext,
  Fragment,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

export interface OverlayContextValue {
  open: (id: string) => (element: ReactNode) => void
  close: (id: string) => () => void
}

export interface OverlayState {
  id: string
  element: ReactNode
}

export const OverlayContext = createContext<OverlayContextValue | null>(null)

export interface OverlayContextProviderProps extends PropsWithChildren {
  container?: Element
}

export const OverlayContextProvider = ({ children, container }: OverlayContextProviderProps) => {
  const [overlay, setOverlay] = useState<OverlayState[]>([])

  const openOverlay = useCallback(
    (id: string) => (element: ReactNode) => {
      setOverlay(prev => [...prev, { id, element }])
    },
    [],
  )

  const closeOverlay = useCallback(
    (_id: string) => () => {
      setOverlay(prev => prev.filter(({ id }) => id !== _id))
    },
    [],
  )

  const contextValue = useMemo(
    () => ({
      open: openOverlay,
      close: closeOverlay,
    }),
    [openOverlay, closeOverlay],
  )

  return (
    <OverlayContext.Provider value={contextValue}>
      {createPortal(
        <>
          {overlay.map(({ element: OverlayElement }, key) => (
            <Fragment key={key}>{OverlayElement}</Fragment>
          ))}
        </>,
        container ?? document.body,
      )}
      {children}
    </OverlayContext.Provider>
  )
}

export const useOverlayContext = () => {
  const context = useContext(OverlayContext)
  if (!context) throw new Error('OverlayContext should be used in OverlayContextProvider')
  return context
}
