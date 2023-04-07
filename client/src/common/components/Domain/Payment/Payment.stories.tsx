import { ComponentStory, ComponentMeta } from '@storybook/react';
import Payment from './Payment';
export default {
  title: 'Domain/Payment',
  component: Payment,
} as ComponentMeta<typeof Payment>;

const Template: ComponentStory<typeof Payment> = () => <Payment type="order" title="결제 예상 금액" price={1000} />;
const Template2: ComponentStory<typeof Payment> = () => (
  <Payment type="cart" title="결제 예상 금액" price={1000} totalAmount={1} />
);
const Template3: ComponentStory<typeof Payment> = () => (
  <Payment type="orderDetail" title="결제 예상 금액" price={1000} />
);

export const Order = Template.bind({});
export const Cart = Template2.bind({});
export const Default = Template3.bind({});
