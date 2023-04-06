import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Logo from './Logo'
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'components/Logo',
  component: Logo,
  parameters: {
    componentSubtitle: 'Service Logo Component',
  },
  decorators: [withRouter],
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = () => <Logo />

export const Default = Template.bind({})
