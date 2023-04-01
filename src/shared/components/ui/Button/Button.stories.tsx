import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { GiShoppingCart } from 'react-icons/gi'

import { Button } from '.'
// import { UI_SIZE, UI_VARIANT } from 'constants/ui'

export default {
  title: 'components/Button',
  component: Button,
  parameters: {
    componentSubtitle: '버튼 컴포넌트',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Fill = Template.bind({})
Fill.args = {
  size: 'md',
  color: 'primary',
  textArea: 'Button',
  variant: 'fill',
  onClick: action('onClick'),
}

export const Outline = Template.bind({})
Outline.args = {
  size: 'md',
  color: 'primary',
  textArea: 'Button',
  variant: 'outline',
  onClick: action('onClick'),
}

export const Text = Template.bind({})
Text.args = {
  size: 'md',
  color: 'primary',
  textArea: 'Button',
  variant: 'text',
  onClick: action('onClick'),
}

export const IconButton = Template.bind({})
IconButton.args = {
  size: 'md',
  color: 'primary',
  variant: 'text',
  onClick: action('onClick'),
  iconArea: <GiShoppingCart />,
}
