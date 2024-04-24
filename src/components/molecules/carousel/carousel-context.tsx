import { Property } from '@styled-system/types/csstype'
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext } from 'react'

export interface CarouselContextValue {
  slideLength: number
  setSlideLength: Dispatch<SetStateAction<number>>
  slideIndex: number
  setSlideIndex: Dispatch<SetStateAction<number>>
  viewportWidth?: Property.Width
  itemWidth?: Property.Width
  itemGap?: Property.Gap
}

export const CarouselContext = createContext<CarouselContextValue | null>(null)

export interface CarouselContextProviderProps extends PropsWithChildren {
  value: CarouselContextValue
}

export const CarouselContextProvider = ({ value, children }: CarouselContextProviderProps) => {
  return <CarouselContext.Provider value={value}>{children}</CarouselContext.Provider>
}

export const useCarouselContext = () => {
  const ctx = useContext(CarouselContext)
  if (!ctx) throw new Error('useCarouselContext should be within CarouselContextProvider.')
  return ctx
}
