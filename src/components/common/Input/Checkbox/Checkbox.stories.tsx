import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Checkbox, { CheckboxProps } from "./Checkbox";

require("../../../../css/common/index.css");

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
export const CheckboxWithLabel = Template.bind({});

CheckboxWithLabel.args = {
  label: "선택해제",
};
