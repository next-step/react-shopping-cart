import { CardInfoProvider, CardListProvider } from 'myfirstpackage-payments';
import { MdOutlinePayment } from 'react-icons/md';
import { flex } from '@styled-system/patterns';
import { useNavigate } from '@tanstack/react-router';
import { Button, CartOrderProduct, CartSummary, EmptyDescription, PaymentForm, Typography } from '@/components';
import { useAlert, useOverlay } from '@/hooks';
import { usePaymentMutation } from '@/queries';
import { Route } from '@/routes/orders_.$id.tsx';
import { useOrderStore } from '@/store';
import { Cart, OrderSchema, PaymentCancel, PaymentResult } from '@/types';
import 'myfirstpackage-payments/styles';

export const PaymentPage = () => <PaymentList />;

const ExistingPayment = () => (
  <div className={flex({ flexDirection: 'column', gap: '20px', padding: '20px' })}>
    <EmptyDescription icon={<MdOutlinePayment />} description="이미 결제가 완료된 주문입니다" />
  </div>
);

const EmptyPaymnet = () => (
  <div className={flex({ flexDirection: 'column', gap: '20px', padding: '20px' })}>
    <EmptyDescription icon={<MdOutlinePayment />} description="주문의 결제정보가 존재하지 않습니다" />
  </div>
);

const PaymentList = () => {
  const navigate = useNavigate({ from: '/orders/$id' });
  const { id } = Route.useParams();
  const orderId = Number(id);

  const alert = useAlert();
  const overlay = useOverlay();
  const paymentMutation = usePaymentMutation();

  const orderStore = useOrderStore();

  const orderData = orderStore.getOrderById(orderId);

  const orderProducts = (orderData?.products ?? []).reduce<Cart[]>((acc, product) => {
    const { quantity, ...restProduct } = product;
    acc.push({ product: restProduct, quantity });
    return acc;
  }, []);
  const totalPrice = orderData?.totalPrice ?? 0;
  const checkedCartProductImages = orderProducts.map((value) => value.product.imageUrl);

  const onPayment = async () => {
    const order = {
      ...OrderSchema.parse(orderData),
    };

    const responsePayment = await new Promise<PaymentResult | PaymentCancel>((resolve) => {
      overlay.open(({ opened, close }) =>
        opened ? (
          <CardListProvider>
            <CardInfoProvider>
              <PaymentForm
                orderId={order.id}
                totalPrice={order.totalPrice}
                onPaymentComplete={(paymentResult) => {
                  resolve(paymentResult);
                  close();
                }}
                onPaymentCancel={(paymentCancel) => {
                  resolve(paymentCancel);
                  close();
                }}
              />
            </CardInfoProvider>
          </CardListProvider>
        ) : null,
      );
    });

    const validPayment = (responsePayment: PaymentResult | PaymentCancel): responsePayment is PaymentResult =>
      responsePayment.success;

    if (!validPayment(responsePayment)) {
      const confirmed = await alert.open({
        message: '결제를 취소했습니다.\n다시 시도하시겠습니까?',
        confirmText: '예',
        cancelText: '아니오',
      });
      if (confirmed) {
        onPayment();
      }
      return;
    }

    const requiredOrder = OrderSchema.required().parse({
      ...orderData,
      payment: {
        cardNumber: responsePayment.cardNumber,
        cardBrand: responsePayment.cardBrandName,
        timestamp: responsePayment.paymentTimestamp,
      },
    });

    paymentMutation.mutate(requiredOrder, {
      onSuccess: async () => {
        orderStore.setOrder(requiredOrder);
        await alert.open({
          type: 'alert',
          message: '결제가 완료되었습니다.',
          confirmText: '확인',
        });
        navigate({
          to: '/orders',
        });
      },
    });
  };

  if (orderData?.products.length === 0) {
    return <EmptyPaymnet />;
  }

  if (orderData?.payment) {
    return <ExistingPayment />;
  }

  return (
    <div
      className={flex({
        flexDirection: 'column',
        paddingBottom: '60px',
        gap: '20px',
      })}
    >
      <Typography as="h3" variant="headline">
        결제 상품 목록
      </Typography>
      <div
        className={flex({
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '50px',
        })}
      >
        <ul
          className={flex({
            flexDirection: 'column',
            gap: '20px',
            padding: '0',
            flexGrow: 1,
          })}
        >
          {orderProducts.map((cart) => (
            <CartOrderProduct
              key={cart.product.id}
              type="order"
              product={cart.product}
              checked={cart.checked}
              quantity={cart.quantity}
            />
          ))}
        </ul>
        <CartSummary totalPrice={totalPrice} productImages={checkedCartProductImages}>
          <Button variant="solid" style={{ borderRadius: 0, width: '100%' }} onClick={onPayment}>
            결제하기
          </Button>
        </CartSummary>
      </div>
    </div>
  );
};
