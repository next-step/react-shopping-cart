import { Meta, Story } from "@storybook/react/types-6-0";

import Navbar, { NavbarProps } from "./Navbar";

require("../../css/common/index.css");

export default {
  title: "Components/Navbar",
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <button className="nav-button">장바구니</button>
      <button className="nav-button">주문목록</button>
    </>
  ),
};
