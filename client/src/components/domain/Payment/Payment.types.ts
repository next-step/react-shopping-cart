export type PaymentProps = {
  type: 'order' | 'cart' | 'orderDetail';
  title: string;
  buttonText?: string;
  price: number;
  totalAmount?: number;
};
