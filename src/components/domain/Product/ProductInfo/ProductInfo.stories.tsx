import React from "react";
import ProductInfo, { ProductInfoProps } from "./ProductInfo";
import { Meta, Story } from "@storybook/react/types-6-0";
import { db } from "../../../../store/db";

export default {
  title: "Components/ProductInfo",
  component: ProductInfo,
} as Meta;

const Template: Story<ProductInfoProps> = (args) => <ProductInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: { ...db.products[0], isChecked: false, quantity: 2 },
};
