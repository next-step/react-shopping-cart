import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import TotalPrice, { TotalPriceProps } from "./TotalPrice";

require("../../../css/common/index.css");

export default {
  title: "Components/TotalPrice",
  component: TotalPrice,
} as Meta;

const Template: Story<TotalPriceProps> = (args) => <TotalPrice {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "결제예상금액",
  price: 123456,
};
