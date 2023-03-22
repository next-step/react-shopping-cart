import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import GNB from '.';

export default {
  title: 'Components/Common/GNB',
  component: GNB,
  decorators: [withRouter],
} as ComponentMeta<typeof GNB>;

const Template: ComponentStory<typeof GNB> = () => <GNB />;

export const Default = Template.bind({});
Default.args = {};
