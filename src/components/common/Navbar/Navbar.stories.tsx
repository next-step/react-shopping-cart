import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
require("../../../css/common/index.css");

export default {
  title: "Components/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} as Meta;

const Template = () => <Navbar />;

export const Default = Template.bind({});
