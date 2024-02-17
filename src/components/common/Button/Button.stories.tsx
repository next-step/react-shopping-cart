import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { within, userEvent } from "@storybook/testing-library";
import { ReactComponent as TrashIcon } from "../../../assets/svgs/trash.svg";
// require("../../../css/common/index.css");

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Navbar = Template.bind({});
export const Primary = Template.bind({});
export const PrimaryBrown = Template.bind({});
export const PrimarySmall = Template.bind({});
export const Icon = Template.bind({});

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

PrimaryBrown.args = {
  children: "결제하기",
  className: "primary-button primary-button-brown",
  onClick: () => alert("결제페이지 이동"),
};

PrimarySmall.args = {
  children: "장바구니",
  className: "primary-button-small",
  onClick: () => alert("장바구니 이동"),
};

Icon.args = {
  children: <TrashIcon />,
  className: "cart-trash-svg",
  onClick: () => alert("삭제"),
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const 결제버튼 = await canvas.getByRole("button");
  await userEvent.click(결제버튼);
};
