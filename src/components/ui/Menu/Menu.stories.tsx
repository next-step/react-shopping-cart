import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Menu from './Menu'
import { withRouter } from 'storybook-addon-react-router-v6'
import { MENU } from '../../../constants/menu'

export default {
  title: 'components/Menu',
  component: Menu,
  parameters: {
    componentSubtitle: '메뉴 컴포넌트',
  },
  decorators: [withRouter],
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => (
  <header className='flex w-full bg-emerald-400 text-white items-center p-2'>
    <Menu {...args} />
  </header>
)

export const Default = Template.bind({})
Default.args = {
  menus: MENU,
}
