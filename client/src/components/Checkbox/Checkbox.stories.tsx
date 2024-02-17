import { PropsWithChildren } from 'react';
import { Story } from '@storybook/react';

import { Checkbox } from 'components';
import { CheckboxProps } from 'components/Checkbox';

export default {
  title: 'Common/Checkbox',
  component: Checkbox,
};

export const Template: Story<PropsWithChildren<CheckboxProps>> = (args) => <Checkbox {...args} />;
Template.args = { children: 'Uncontrolled', size: 'medium', disabled: false };
Template.storyName = 'Uncontrolled Checkbox';

export const ControlledCheckbox = Template.bind({});
ControlledCheckbox.args = {
  checked: true,
  children: 'Controlled',
  size: 'medium',
  disabled: false,
};
