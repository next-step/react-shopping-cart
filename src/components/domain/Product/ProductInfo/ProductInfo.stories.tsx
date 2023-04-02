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
  name: db.products[0].name,
  price: db.products[0].price,
  imageUrl: db.products[0].imageUrl,
};
