import {
  Children,
  HTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
  isValidElement,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  CarouselContextProvider,
  CarouselContextValue,
  useCarouselContext,
} from './carousel-context'
import { cx } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { IconButton, IconButtonProps } from '@/components/atoms'

/*------------------------------------------------------------------------------
Carousel Component
-------------------------------------------------------------------------------*/

export interface CarouselRootProps extends PropsWithChildren {
  /** item 요소 너비 */
  itemWidth?: CarouselContextValue['itemWidth']
  /** item 요소 간 간격 */
  itemGap?: CarouselContextValue['itemGap']
  /** viewport 요소 너비 */
  viewportWidth?: CarouselContextValue['viewportWidth']
  /** carousel 시작 요소 index */
  defaultSlideIndex?: number
}

export const CarouselRoot = ({
  children,
  itemGap = '10px',
  itemWidth = '240px',
  viewportWidth = '300px',
  defaultSlideIndex = 0,
}: CarouselRootProps) => {
  const [slideLength, setSlideLength] = useState(0)
  const [slideIndex, setSlideIndex] = useState(defaultSlideIndex)

  const contextValue = useMemo(
    () => ({
      slideLength,
      setSlideLength,
      slideIndex,
      setSlideIndex,
      itemWidth,
      itemGap,
      viewportWidth,
    }),
    [slideLength, setSlideLength, slideIndex, setSlideIndex, itemWidth, itemGap, viewportWidth],
  )

  return <CarouselContextProvider value={contextValue}>{children}</CarouselContextProvider>
}

/*------------------------------------------------------------------------------
CarouselViewport Component
-------------------------------------------------------------------------------*/

export interface CarouselViewportProps extends HTMLAttributes<HTMLDivElement> {
  width?: string
}

export const CarouselViewport = ({ children, className, ...props }: CarouselViewportProps) => {
  const { setSlideLength, slideIndex, itemWidth, itemGap, viewportWidth } = useCarouselContext()
  const slideItemList = Children.toArray(children).filter(isValidElement)
  const slideLength = slideItemList.length

  /* inline css value */
  const paddingLeft = `calc((${viewportWidth} - ${itemWidth}) / 2)`
  const itemContainerWidth = `calc(${slideLength} * ${viewportWidth})`
  const itemContainerTransform = `translateX(calc(-1 * ${slideIndex} * (1.5 * ${itemWidth} - 0.5 * ${viewportWidth} + ${itemGap} + ${paddingLeft}))`

  useEffect(() => {
    setSlideLength(slideLength)
  }, [])

  return (
    <div
      className={cx(
        className,
        flex({
          alignItems: 'center',
          overflow: 'hidden',
        }),
      )}
      style={{
        width: viewportWidth,
        paddingLeft,
      }}
    >
      <div
        className={flex({
          transition: '0.3s ease-in-out',
        })}
        style={{
          width: itemContainerWidth,
          transform: itemContainerTransform,
          gap: itemGap,
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

/*------------------------------------------------------------------------------
CarouselItem Component
-------------------------------------------------------------------------------*/

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {}

export const CarouselItem = ({ className, ...props }: CarouselItemProps) => {
  const { itemWidth } = useCarouselContext()
  return <div className={className} style={{ width: itemWidth }} {...props} />
}

/*------------------------------------------------------------------------------
CarouselNavigate Component
-------------------------------------------------------------------------------*/
export interface CarouselNavigateProps extends Omit<IconButtonProps, 'source'> {
  to: 'prev' | 'next'
  iconSource: IconButtonProps['source']
}

export const CarouselNavigate = ({ iconSource, onClick, to, ...props }: CarouselNavigateProps) => {
  const { slideIndex, slideLength, setSlideIndex } = useCarouselContext()

  const prevNavigateDisabled = slideIndex <= 0
  const nextNavigateDisabled = slideLength === undefined || slideIndex >= slideLength - 1

  const navigateToPrev = () => {
    if (prevNavigateDisabled) return
    setSlideIndex(index => index - 1)
  }

  const navigateToNext = () => {
    if (nextNavigateDisabled) return
    setSlideIndex(index => index + 1)
  }

  const handleClickNavigateButton: MouseEventHandler<HTMLButtonElement> = e => {
    if (to === 'prev') {
      navigateToPrev()
    } else {
      navigateToNext()
    }
    onClick?.(e)
  }

  return <IconButton source={iconSource} onClick={handleClickNavigateButton} {...props} />
}

export const Carousel = Object.assign(CarouselRoot, {
  Viewport: CarouselViewport,
  Item: CarouselItem,
  Navigate: CarouselNavigate,
})
