import { ComponentStory, ComponentMeta } from '@storybook/react'

import Img from './index'

export default {
  title: 'Img',
  component: Img,
} as ComponentMeta<typeof Img>

const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />

export const Default = Template.bind({})

Default.args = {
  src: 'https://avatars.githubusercontent.com/u/22632046?s=200&v=4',
}
