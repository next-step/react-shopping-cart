import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import QuantityCounter from "./QuantityCounter";

require("../../../../css/common/index.css");

export default {
  title: "Components/QuantityCounter",
  component: QuantityCounter,
} as Meta;

const Template = () => <QuantityCounter />;

export const Default = Template.bind({});
