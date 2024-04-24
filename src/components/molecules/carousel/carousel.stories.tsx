import { Meta, StoryObj } from '@storybook/react'
import { Carousel } from './carousel'
import { flex } from '@styled-system/patterns'
import { css } from '@styled-system/css'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

const meta = {
  title: 'molecules/Carousel',
  component: Carousel,
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta

type Story = StoryObj<typeof meta>

export const Default = {
  render: () => (
    <Carousel itemGap="20px">
      <div className={flex({ gap: '10px' })}>
        <Carousel.Navigate to="prev" iconSource={IconChevronLeft} size={24} />
        <Carousel.Viewport
          className={css({ height: '320px', backgroundColor: 'token(colors.gray.100)' })}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <Carousel.Item
              key={num}
              className={css({ background: 'token(colors.aqua.light)', height: '240px' })}
            >
              {num}
            </Carousel.Item>
          ))}
        </Carousel.Viewport>
        <Carousel.Navigate to="next" iconSource={IconChevronRight} size={24} />
      </div>
    </Carousel>
  ),
} satisfies Story
