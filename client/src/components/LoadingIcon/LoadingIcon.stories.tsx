import { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import { LoadingIcon } from 'components';
import { colors } from 'constants/colors';

export default {
  title: 'Common/LoadingIcon',
  component: LoadingIcon,
};

export const Template: Story<ComponentProps<'svg'>> = (args) => <LoadingIcon {...args} />;
Template.args = { width: 16, color: colors.black };
Template.storyName = 'Playground';
