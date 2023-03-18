import { PropsWithChildren } from 'react';
import { Story } from '@storybook/react';

import { Checkbox } from 'components';
import { CheckboxProps } from 'components/Checkbox';

export default {
  title: 'Common/Checkbox',
  component: Checkbox,
};

export const Template: Story<PropsWithChildren<CheckboxProps>> = (args) => <Checkbox {...args} />;
Template.args = { children: 'Sample', defaultIsChecked: true };
Template.argTypes = {
  isChecked: { control: false },
  name: { control: false },
};
Template.storyName = 'Uncontrolled Checkbox';

export const ControlledCheckbox = Template.bind({});
ControlledCheckbox.args = { isChecked: true, children: 'Controlled' };
ControlledCheckbox.argTypes = {
  defaultIsChecked: { control: false },
  name: { control: false },
};
