import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "IconButton",
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Normarl: Story = {
  args: {
    width: 10,
    height: 10,
    src: "/vite.svg",
    alt: "icon image",
  },
};
