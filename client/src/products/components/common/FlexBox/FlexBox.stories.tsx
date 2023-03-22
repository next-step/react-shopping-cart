import { ComponentStory, ComponentMeta } from '@storybook/react'

import FlexBox from './index'

export default {
  title: 'FlexBox',
  component: FlexBox,
} as ComponentMeta<typeof FlexBox>

const Template: ComponentStory<typeof FlexBox> = (args) => <FlexBox {...args} />

export const Default = Template.bind({})

Default.args = {
  children: [
    <div key='item1' style={{ width: '200px', height: '100px', background: 'red' }} />,
    <div key='item2' style={{ width: '200px', height: '100px', background: 'blue' }} />,
    <div key='item3' style={{ width: '200px', height: '100px', background: 'green' }} />,
    <div key='item4' style={{ width: '200px', height: '100px', background: 'yellow' }} />,
    <div key='item5' style={{ width: '200px', height: '100px', background: 'purple' }} />,
    <div key='item6' style={{ width: '200px', height: '100px', background: 'black' }} />,
  ],
}
