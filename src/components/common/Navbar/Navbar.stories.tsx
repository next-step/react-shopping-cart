import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Navbar from "./Navbar";
require("../../../css/common/index.css");

export default {
  title: "Components/Navbar",
  component: Navbar,
} as Meta;

const Template = () => <Navbar />;

export const Default = Template.bind({});
