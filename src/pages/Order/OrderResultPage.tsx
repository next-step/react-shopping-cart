import { useNavigate } from '@tanstack/react-router';
import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';
import {
  PaymentCancel,
  PaymentResult,
  useLoadNearPayments,
} from 'near-payments';
import { useGetOrderDetailQuery } from '@/hooks/queries/useGetOrderDetailQuery';
import useAlertDialog from '@/store/alertDialogStore';
import OrderTitle from '@components/Order/@common/OrderTitle';
import OrderResultPayments from '@components/Order/Result/OrderResultPayments';
import OrderResultHeader from '@components/Order/Result/OrderResultHeader';
import OrderResultItem from '@components/Order/Result/OrderResultItem';
import { Route } from '@/routes/order_.$orderId';
import { OrderDetail } from '@/types/order';
import { calculateTotalAmount } from '@/utils/order';

export default function OrderResultPage() {
  const { orderId } = Route.useParams() as { orderId: string };
  const navigate = useNavigate();

  const loadNearPayments = useLoadNearPayments({
    clientId: 'CLIENT_ID',
  });

  const openAlertDialog = useAlertDialog.use.onOpen();

  const { orderDetails: orderResult } = useGetOrderDetailQuery({
    id: Number(orderId),
  });

  const totalAmount = calculateTotalAmount(orderResult);

  const orderCount = orderResult?.length ?? 0;

  const handlePaymentButtonClick = () => {
    openAlertDialog({
      title: '결제하기',
      message: '주문하신 상품들을 결제하시겠습니까?',
      btnText: '확인',
      onConfirm: async () => {
        try {
          await loadNearPayments({
            orderId,
            totalAmount,
            onPaymentComplete: (paymentResult: PaymentResult) => {
              // 결제 완료 시 처리
              navigate({ to: '/orderList' });
              console.log('paymentResult:', paymentResult);
            },
            onPaymentCancel: (paymentCancel: PaymentCancel) => {
              // 결제 취소 시 처리
              console.log('paymentCancel:', paymentCancel);
            },
          });
        } catch (error) {
          // 결제 중 발생한 에러 처리
          console.error('Payment error:', error);
        }
      },
    });
  };

  return (
    <section className={orderResultContainer}>
      <OrderTitle title='주문/결제' />

      <div className={orderResultContent}>
        <section className={orderResultHeaderSection}>
          <OrderResultHeader orderCount={orderCount} />

          <ul className={orderResultItemContainer}>
            {orderCount > 0 ? (
              orderResult.map((orderDetail: OrderDetail) => (
                <OrderResultItem
                  key={orderDetail.id}
                  orderDetail={orderDetail}
                />
              ))
            ) : (
              <div className={empty}>
                {' '}
                <p className={emptyMessage}>결제하신 내역이 없습니다.</p>
              </div>
            )}
          </ul>
        </section>

        <section className={orderResultPaymentsSection}>
          <OrderResultPayments
            totalAmount={totalAmount}
            onPaymentButtonClick={handlePaymentButtonClick}
          />
        </section>
      </div>
    </section>
  );
}

const orderResultContainer = flex({
  flexDirection: 'column',
  paddingBottom: '60px',
  gap: '20px',
});

const orderResultContent = flex({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '50px',
});

const orderResultHeaderSection = flex({
  flexDirection: 'column',
  gap: '20px',
  padding: '0',
  flexGrow: 1,
});

const orderResultItemContainer = flex({
  flexDirection: 'column',
  gap: '20px',
});

export const orderResultPaymentsSection = css({
  position: {
    base: 'fixed',
    lg: 'static',
  },
  bottom: {
    base: '0',
    lg: 'auto',
  },
  left: {
    base: '0',
    lg: 'auto',
  },
  width: {
    base: '100%',
    lg: '280px',
  },
  minWidth: '375px',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '10px',
  border: '1px solid #d1d1d1',
  borderRadius: '4px',
  backgroundColor: 'white',
});

const empty = flex({
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: {
    base: '100px',
    lg: '200px',
  },
});

const emptyMessage = css({
  fontSize: '20px',
  color: '#555',
});
