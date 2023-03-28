import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProductItem from './index'

export default {
  title: 'ProductItem',
  component: ProductItem,
} as ComponentMeta<typeof ProductItem>

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />

export const Default = Template.bind({})

Default.args = {
  src: 'https://avatars.githubusercontent.com/u/22632046?s=200&v=4',
  alt: '이미지 사진',
  textValue1: 'text1',
  textValue2: 'text2',
  buttonValue: 'button',
}
