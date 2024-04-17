import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Text",
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    color: "blue",
    children: "text",
    as: "title",
  },
};
