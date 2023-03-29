import { ComponentMeta } from '@storybook/react';

import CheckBox, { useCheckBox } from '.';

export default {
  title: 'Components/Common/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

export const Default = () => {
  const { checked, handleSelect } = useCheckBox();
  return <CheckBox checked={checked} onSelect={handleSelect} label="check" />;
};
