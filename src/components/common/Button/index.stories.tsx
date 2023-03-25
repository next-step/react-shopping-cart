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
  theme: 'primary',
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  theme: 'outline',
  children: 'Button',
};

export const Number = Template.bind({});
Number.args = {
  theme: 'number',
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  theme: 'primary',
  children: 'Button',
  disabled: true,
};
