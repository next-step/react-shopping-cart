import React from "react";
import ProductDetailInfo from "./ProductDetailInfo";
import { Meta, Story } from "@storybook/react/types-6-0";
import { db } from "../../db/db";

export default {
  title: "Components/ProductDetailInfo",
  component: ProductDetailInfo,
} as Meta;

const Template = () => <ProductDetailInfo />;

export const Default = Template.bind({});
