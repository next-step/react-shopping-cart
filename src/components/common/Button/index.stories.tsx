import { ComponentMeta, ComponentStory } from '@storybook/react';

import PrimaryButton, { ButtonType } from '.';

export default {
  title: 'Components/common/PrimaryButton',
  component: PrimaryButton,
  argTypes: {
    type: {
      options: [...Object.keys(ButtonType)],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  type: 'primary',
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  type: 'outline',
  children: 'Button',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  children: 'Button',
};
