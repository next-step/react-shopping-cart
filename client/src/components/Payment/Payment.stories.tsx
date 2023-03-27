import { ComponentStory, ComponentMeta } from '@storybook/react';
import Payment from './Payment';
export default {
  title: '결제창',
  component: Payment,
} as ComponentMeta<typeof Payment>;

const Template: ComponentStory<typeof Payment> = () => (
  <Payment title="결제 예상 금액" text="총 결제 금액" price={1000} />
);

export const DefaultPayment = Template.bind({});
