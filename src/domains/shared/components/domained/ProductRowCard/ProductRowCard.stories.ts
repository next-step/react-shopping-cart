import { Meta, StoryObj } from "@storybook/react";
import ProductRowCard from "./ProductRowCard";

const meta: Meta<typeof ProductRowCard> = {
  component: ProductRowCard,
  title: "ProductRowCard",
};

export default meta;

type Story = StoryObj<typeof ProductRowCard>;

export const Primary: Story = {
  args: {
    productImgUrl:
      "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
    title: "PET보틀-정사각(420ml)",
    price: 43400,
    checked: false,
  },
};
