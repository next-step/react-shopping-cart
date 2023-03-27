export type PaymentProps = {
  type: 'order' | 'cart' | 'orderDetail';
  title: string;
  text: string;
  buttonText?: string;
  price: number;
  totalAmount?: number;
};
