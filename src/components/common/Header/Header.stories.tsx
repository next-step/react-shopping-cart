import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Header, { HeaderProps } from "./Header";
require("../../../css/common/index.css");

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
export const Cart = Template.bind({});
export const OrderAndPayment = Template.bind({});
export const OrderDetail = Template.bind({});

Cart.args = {
  title: "장바구니",
};

OrderAndPayment.args = {
  title: "주문/결제",
};

OrderDetail.args = {
  title: "주문내역상세",
};
