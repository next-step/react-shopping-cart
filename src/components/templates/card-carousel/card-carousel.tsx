import { Carousel } from '@/components/molecules'
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

export interface CardCarouselProps {
  onClickAddCardButton: () => void
}

export const CardCarousel = ({ onClickAddCardButton }: CardCarouselProps) => {
  return (
    <Carousel viewportWidth="320px" itemWidth="220px">
      <div className={flex({ gap: '10px', justifyContent: 'center', width: '100%' })}>
        <Carousel.Navigate to="prev" iconSource={IconChevronLeft} />
        <Carousel.Viewport
          className={css({
            height: '200px',
            backgroundColor: 'token(colors.gray.100)',
            borderRadius: '8px',
          })}
        >
          <Carousel.Item
            className={flex({
              height: '160px',
              backgroundColor: 'token(colors.aqua.dark)',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
            })}
          >
            등록된 카드 1
          </Carousel.Item>
          <Carousel.Item
            className={flex({
              height: '160px',
              backgroundColor: 'token(colors.brown)',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
            })}
          >
            등록된 카드 2
          </Carousel.Item>
          <Carousel.Item
            className={flex({
              cursor: 'pointer',
              height: '160px',
              backgroundColor: 'token(colors.gray.300)',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '4px',
            })}
            onClick={onClickAddCardButton}
          >
            +
          </Carousel.Item>
        </Carousel.Viewport>
        <Carousel.Navigate to="next" iconSource={IconChevronRight} />
      </div>
    </Carousel>
  )
}
