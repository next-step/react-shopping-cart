import { ComponentMeta, ComponentStory } from "@storybook/react";
import Product from "../../components/detail/Product";

export default {
  title: "Components/Detail/Product", // story 이름
  component: Product,
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = () => <Product />;

export const Basic = Template.bind({});
