import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Checkbox, { Props } from "./Checkbox";
import { Provider } from "react-redux";
import { store } from "../../../../store/store";

// require("../../../../css/common/index.css");

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
export const CheckboxWithLabel = Template.bind({});

CheckboxWithLabel.args = {
  label: "선택해제",
};
