import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import QuantityCounter, { QuantityCounterProps } from "./QuantityCounter";

require("../../../../css/common/index.css");

export default {
  title: "Components/QuantityCounter",
  component: QuantityCounter,
} as Meta;

const Template: Story<QuantityCounterProps> = (args) => (
  <QuantityCounter {...args} />
);

export const Default = Template.bind({});
