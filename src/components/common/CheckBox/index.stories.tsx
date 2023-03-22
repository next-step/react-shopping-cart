import { ComponentMeta } from '@storybook/react';

import CheckBox, { useCheckBox } from '.';

export default {
  title: 'Components/Common/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

export const Default = () => {
  const { checked, toggleCheck } = useCheckBox();
  return <CheckBox checked={checked} onClick={toggleCheck} label="check" />;
};
