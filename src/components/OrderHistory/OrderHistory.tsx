import { BsDot } from 'react-icons/bs';
import { CiReceipt } from 'react-icons/ci';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';
import {
  orderHeaderStyle,
  orderHeaderInfoStyle,
  orderHeaderActionsStyle,
  orderNumberStyle,
  orderProductsStyle,
  orderProductStyle,
  productImageStyle,
  productInfoStyle,
  productNameAndPriceStyle,
  productPriceStyle,
  productActionsStyle,
  cartIconStyle,
} from './OrderHistory.style';
import {
  Divider,
  EmptyDescription,
  IconButton,
  Image,
  LikeIconButton,
  PaymentReceipt,
  Typography,
  UnderlineButton,
} from '@/components';
import { useAddToCart, useOverlay } from '@/hooks';
import { Order, OrderSchema } from '@/types';
import { formatNumberWithCommas } from '@/utils';

type OrderHistoryProps = {
  values?: Order[];
  loading?: boolean;
};
type OrderHeaderProps = {
  value: Order;
};
type OrderProductsProps = {
  values: Order['products'];
};
type OrderProductProps = {
  value: Order['products'][number];
};

export const OrderHistory = ({ values }: OrderHistoryProps) => {
  const emptyOrder = values?.length === 0 || values?.some((value) => value.payment === undefined);

  if (emptyOrder) {
    return <EmptyDescription icon={<CiReceipt />} description="주문이 존재하지 않습니다." />;
  }

  return (
    <div className={flex({ flexDirection: 'column', gap: '24px' })}>
      {values?.map((order) => (
        <div key={order.id}>
          <OrderHeader value={order} />
          <OrderProducts values={order.products} />
          <Divider />
        </div>
      ))}
    </div>
  );
};

const OrderHeader = ({ value }: OrderHeaderProps) => {
  const addToCart = useAddToCart();
  const overlay = useOverlay();

  const validValue = OrderSchema.required().parse(value);
  const formattedDate = new Date(validValue.payment?.timestamp).toLocaleDateString('ko-KR');
  const formattedOrderId = validValue.id.toString();
  const paymentDetailString = `결제상세 ${formatNumberWithCommas(validValue.totalPrice)}원`;

  const openPaymentReceipt = () => {
    overlay.open(({ opened, close }) => (opened ? <PaymentReceipt order={value} onClose={close} /> : null));
  };

  const addOrderInProductsToCart = () => {
    const productIds = validValue.products.map((product) => product.id);
    addToCart.multiple(productIds);
  };

  return (
    <header className={orderHeaderStyle}>
      <div className={orderHeaderInfoStyle}>
        <Typography variant="title">{formattedDate}</Typography>
        <BsDot />
        <Typography variant="body" className={orderNumberStyle}>
          주문번호: {formattedOrderId}
        </Typography>
      </div>
      <div className={orderHeaderActionsStyle}>
        <UnderlineButton onClick={openPaymentReceipt}>
          <Typography as="span" variant="body">
            {paymentDetailString}
          </Typography>
        </UnderlineButton>
        <UnderlineButton onClick={addOrderInProductsToCart}>
          <Typography as="span" variant="body">
            전체 상품 담기
          </Typography>
        </UnderlineButton>
      </div>
    </header>
  );
};

const OrderProducts = ({ values }: OrderProductsProps) => (
  <div className={orderProductsStyle}>
    {values.map((value, index) => (
      <OrderProduct key={index} value={value} />
    ))}
  </div>
);

export const OrderProduct = ({ value }: OrderProductProps) => {
  const addToCart = useAddToCart();

  return (
    <div className={orderProductStyle}>
      <Image src={value.imageUrl} alt="주문 상품 이미지" className={productImageStyle} />
      <div className={productInfoStyle}>
        <div className={productNameAndPriceStyle}>
          <Typography
            variant="title"
            className={css({
              fontSize: {
                base: '16px',
                sm: '18px',
              },
              lineHeight: 1.2,
            })}
          >
            {value.name}
          </Typography>
          <div className={productPriceStyle}>
            <Typography variant="body">{formatNumberWithCommas(value.price)}원</Typography>
            <BsDot />
            <Typography variant="body">{value.quantity}개</Typography>
          </div>
        </div>
        <div className={productActionsStyle}>
          <IconButton
            icon={<PiShoppingCartSimpleLight className={cartIconStyle} />}
            onClick={() => addToCart.single(value.id)}
          />
          <LikeIconButton
            className={flex({
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              padding: 0,
              outlineColor: 'gray300',
              outlineWidth: '1px',
              outlineStyle: 'solid',
            })}
            productId={value.id}
            liked={Boolean(value.liked)}
          />
        </div>
      </div>
    </div>
  );
};

OrderHistory.displayName = 'OrderHistory';
