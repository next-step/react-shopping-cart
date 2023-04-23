import { Divider, LazyImage, Text } from '@/components/common';

type Props = {
  order: Partial<UserCart>[];
};

const PaymentListSection = ({ order }: Props) => {
  const orderTotalCount = order.length;

  return (
    <section className="order-left-section">
      <Text as="h3" className="order-title">
        주문 상품({orderTotalCount}건)
      </Text>
      <Divider type="thin" />
      {order.map((item) => (
        <>
          <div className="order-container">
            <div className="flex gap-15 mt-10">
              <LazyImage
                width={144}
                height={144}
                src={item.product?.imageUrl}
                alt={item.product?.name}
              />
              <div className="flex-col gap-15">
                <span className="order-name">{item.product?.name}</span>
                <span>수량: {item.quantity}</span>
              </div>
            </div>
          </div>
          <Divider type="thin" />
        </>
      ))}
    </section>
  );
};

export default PaymentListSection;
