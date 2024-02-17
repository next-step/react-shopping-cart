import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBar from './NavBar';

export default {
  title: 'common/Navbar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = () => <NavBar />;

export const PageNavBar = Template.bind({});
