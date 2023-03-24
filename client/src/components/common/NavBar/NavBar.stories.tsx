import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from '..';
export default {
  title: 'NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = () => <NavBar />;

export const Default = Template.bind({});
