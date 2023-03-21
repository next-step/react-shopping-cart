import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './index'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
}

export const Rectangle = Template.bind({})

Rectangle.args = {
  children: '장바구니',
  size: 'rectangle',
  backgroundColor: 'brown',
  color: 'white',
  fontSize: 'large',
  fontWeight: 'bold',
}
