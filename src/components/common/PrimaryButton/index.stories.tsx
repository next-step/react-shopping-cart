import { ComponentMeta, ComponentStory } from '@storybook/react';

import PrimaryButton from '.';

export default {
  title: 'Components/common/PrimaryButton',
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: '',
  children: 'default',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'small',
};
