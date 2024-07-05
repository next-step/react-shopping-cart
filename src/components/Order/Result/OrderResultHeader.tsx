import Title from '@components/common/Title/Title';

interface OrderResultHeader {
  orderCount: number;
}

export default function OrderResultHeader({ orderCount }: OrderResultHeader) {
  return (
    <Title as='h3' variant='subtitle'>{`주문 상품(${orderCount}건)`}</Title>
  );
}
