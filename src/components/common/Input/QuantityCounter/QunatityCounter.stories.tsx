import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../../store/store";
import { Meta, Story } from "@storybook/react/types-6-0";
import QuantityCounter, { Props } from "./QuantityCounter";

require("../../../../css/common/index.css");

export default {
  title: "Components/QuantityCounter",
  component: QuantityCounter,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <QuantityCounter {...args} />;

export const Default = Template.bind({});
