import Count from "./Count";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Count> = {
  component: Count,
  title: "Count",
};

export default meta;

type Story = StoryObj<typeof Count>;

export const Primary: Story = {
  args: {
    min: -10,
    max: 10,
  },
};
