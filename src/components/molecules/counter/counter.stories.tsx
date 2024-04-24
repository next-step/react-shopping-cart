import { Meta, StoryObj } from '@storybook/react'
import { Counter } from './counter'
import { useState } from 'react'

const meta: Meta<typeof Counter> = {
  title: 'molecules/Counter',
  component: Counter,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const Template = () => {
  const [value, setValue] = useState(0)
  return (
    <Counter
      value={value}
      onIncrement={(value, max) => {
        if (value <= max) setValue(value)
      }}
      onDecrement={(value, min) => {
        if (value >= min) setValue(value)
      }}
    />
  )
}

export const Default = {
  render: () => <Template />,
} satisfies Story
