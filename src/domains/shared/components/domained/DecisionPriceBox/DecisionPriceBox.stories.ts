import { Meta, StoryObj } from "@storybook/react";
import DecisionPriceBox from "./DecisionPriceBox";
const meta: Meta<typeof DecisionPriceBox> = {
  component: DecisionPriceBox,
  title: "DecisionPriceBox",
};

export default meta;

type Story = StoryObj<typeof DecisionPriceBox>;

export const Primary: Story = {
  args: {
    title: "결제예상금액",
    subtitle: "결제예상금액",
    price: 21500,
    buttonText: "주문하기 (2개)",
  },
};
