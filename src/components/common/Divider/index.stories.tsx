import { ComponentMeta, ComponentStory } from '@storybook/react';

import Divider, { DividerType } from '.';

export default {
  title: 'Components/Common/Divider',
  component: Divider,
  argTypes: {
    type: {
      options: [...Object.keys(DividerType)],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default = Template.bind({});
Default.args = {};
