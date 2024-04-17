import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    size: "xlg",
    children: "button",
    onlyText: true,
  },
};

export const Secondary: Story = {
  args: {
    appearance: "secondary",
    children: "button",
    onlyText: true,
  },
};

export const Outline: Story = {
  args: {
    appearance: "outline",
    children: "button",
    onlyText: true,
  },
};
