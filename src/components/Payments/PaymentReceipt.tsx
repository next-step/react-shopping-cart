import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';
import { PaymentsDisplay } from './PaymentsDisplay';
import { Button, Divider, Overlay, Typography } from '@/components';
import { Order, OrderSchema } from '@/types';
import { formatNumberWithCommas } from '@/utils';
import { formatTimestamp } from '@/utils/formatTimestamp.ts';

type PaymentReceiptProps = {
  order: Order;
  onClose?: () => void;
};

type PaymentInfoProps = {
  paymentTime: string;
  orderId: number;
  cardNumber: string;
};

type ProductItemProps = {
  name: string;
  quantity: number;
  totalPrice: string;
};

const PaymentInfo = ({ paymentTime, orderId, cardNumber }: PaymentInfoProps) => (
  <section className={orderInfoStyle}>
    <Typography variant="body" className={textAlignLeft}>
      {`주문 일시:  ${paymentTime}`}
    </Typography>
    <Typography variant="body" className={textAlignLeft}>
      {`주문 번호:  ${orderId}`}
    </Typography>
    <Typography variant="body" className={textAlignLeft}>
      {`결제 카드:  ${cardNumber}`}
    </Typography>
  </section>
);

const ProductItem = ({ name, quantity, totalPrice }: ProductItemProps) => (
  <div className={productItemStyle}>
    <div className={flex({ justifyContent: 'space-between' })}>
      <Typography variant="body" className={productNameStyle}>
        {name}
      </Typography>
      <Typography variant="body" className={textAlignRight}>
        {`${quantity}개`}
      </Typography>
    </div>
    <div className={flex({ justifyContent: 'flex-end' })}>
      <Typography variant="body" className={textAlignRight}>
        {`${totalPrice}원`}
      </Typography>
    </div>
  </div>
);

const ProductList = ({ products }: Pick<Order, 'products'>) => (
  <div className={productListWrapperStyle}>
    <div className={productListStyle}>
      {products.map((product) => {
        const { id, name, quantity, price } = product;
        const totalPrice = formatNumberWithCommas(quantity * price);

        return <ProductItem key={id} name={name} quantity={quantity} totalPrice={totalPrice} />;
      })}
    </div>
  </div>
);

export const PaymentReceipt = ({ order, onClose }: PaymentReceiptProps) => {
  const validOrder = OrderSchema.required().parse(order);

  const paymentTime = formatTimestamp(validOrder.payment.timestamp);
  const cardNumber = `[${validOrder.payment.cardBrand}] ${validOrder.payment.cardNumber}`;

  return (
    <Overlay>
      <PaymentsDisplay.Root>
        <PaymentsDisplay.Header>
          <Typography as="h2" variant="title" className={css({ color: 'black' })}>
            주문 상세
          </Typography>
        </PaymentsDisplay.Header>
        <PaymentsDisplay.Body>
          <div className={flex({ flexDirection: 'column' })}>
            <PaymentInfo paymentTime={paymentTime} orderId={validOrder.id} cardNumber={cardNumber} />
            <Divider className={dividerStyle} />
            <ProductList products={validOrder.products} />
          </div>
        </PaymentsDisplay.Body>
        <PaymentsDisplay.Footer>
          <Divider className={dividerStyle} />
          <div className={totalAmountStyle}>
            <Typography variant="title" className={totalAmountLabelStyle}>
              총 결제금액
            </Typography>
            <Typography variant="title" className={totalAmountValueStyle}>
              {formatNumberWithCommas(validOrder.totalPrice)}원
            </Typography>
          </div>
          <div className={buttonWrapperStyle}>
            <Button variant="solid" className={css({ width: '100%' })} onClick={onClose}>
              확인
            </Button>
          </div>
        </PaymentsDisplay.Footer>
      </PaymentsDisplay.Root>
    </Overlay>
  );
};

PaymentReceipt.displayName = 'PaymentReceipt';

const textAlignLeft = css({
  textAlign: 'left',
});

const textAlignRight = css({
  textAlign: 'right',
});

const orderInfoStyle = flex({
  flexDirection: 'column',
  gap: '6px',
  marginTop: '30px',
});

const dividerStyle = css({
  width: 'calc(100% + 48px)',
  borderWidth: '3px',
  borderColor: 'gray200',
  marginLeft: '-24px',
});

const productListWrapperStyle = css({
  width: 'calc(100% + 48px)',
  marginLeft: '-24px',
  maxHeight: '380px',
  overflowY: 'auto',
  padding: '0 24px',
});

const productListStyle = flex({
  flexDirection: 'column',
  gap: '10px',
});

const productItemStyle = css({
  padding: '6px 12px',
  borderBottom: '1px solid #ddd',
});

const productNameStyle = css({
  maxWidth: '240px',
  textAlign: 'left',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
});

const totalAmountStyle = flex({
  justifyContent: 'space-between',
  alignItems: 'center',
});

const totalAmountLabelStyle = css({
  textAlign: 'left',
  fontWeight: 400,
  margin: 0,
});

const totalAmountValueStyle = css({
  textAlign: 'left',
  fontWeight: 400,
  margin: 0,
});

const buttonWrapperStyle = css({
  marginTop: '20px',
  width: '100%',
});
