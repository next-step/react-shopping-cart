import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from '.';

export default {
  title: 'Components/Common/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Default = Template.bind({});
Default.args = {};
