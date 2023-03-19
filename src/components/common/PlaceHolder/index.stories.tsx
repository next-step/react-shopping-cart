import { ComponentMeta, ComponentStory } from '@storybook/react';

import PlaceHolder from '.';

export default {
  title: 'Components/Common/PlaceHolder',
  component: PlaceHolder,
} as ComponentMeta<typeof PlaceHolder>;

const Template: ComponentStory<typeof PlaceHolder> = () => <PlaceHolder />;

export const Default = Template.bind({});
Default.args = {};
