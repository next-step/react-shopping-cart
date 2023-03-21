import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
require("../../css/common/index.css");

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Navbar = Template.bind({});
export const Primary = Template.bind({});
export const PrimarySmall = Template.bind({});
export const Emoji = Template.bind({});

Navbar.args = {
  children: "장바구니",
  className: "nav-button",
  onClick: () => alert("장바구니 이동"),
};

Primary.args = {
  children: "결제하기",
  className: "primary-button",
  onClick: () => alert("결제페이지 이동"),
};

PrimarySmall.args = {
  children: "장바구니",
  className: "primary-button-small",
  onClick: () => alert("장바구니 이동"),
};

Emoji.args = {
  children: (
    <img className="cart-trash-svg" src="./assets/svgs/trash.svg" alt="삭제" />
  ),
  className: "cart-trash-svg",
  onClick: () => alert("삭제"),
};
