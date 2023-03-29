import { ComponentMeta, ComponentStory } from '@storybook/react';

import Text from '.';

export default {
  title: 'Components/Common/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'default',
};

export const Highlight = Template.bind({});
Highlight.args = {
  highlight: true,
  children: 'Highlight',
};
