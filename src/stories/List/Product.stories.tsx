import { ComponentMeta, ComponentStory } from "@storybook/react";
import Product from "../../components/product/ProductList";

export default {
  title: "Components/List/Product", // story 이름
  component: Product,
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => (
  <Product {...args} />
);

export const Basic = Template.bind({});
