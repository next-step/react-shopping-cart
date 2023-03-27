import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from '..';
export default {
  title: 'common',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = () => <NavBar />;

export const PageNavBar = Template.bind({});
