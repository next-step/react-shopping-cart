import { flex } from '@/styled-system/patterns';
import { formatToKRW } from '@/utils/formatter';
import Button from '@components/common/Button/Button';
import Divider from '@components/common/Divider/Divider';
import Title from '@components/common/Title/Title';

interface OrderResultPaymentsProps {
  totalAmount: number;
  onPaymentButtonClick: () => void;
}

export default function OrderResultPayments({
  totalAmount,
  onPaymentButtonClick,
}: OrderResultPaymentsProps) {
  return (
    <>
      <div className={orderResultPaymentsContainer}>
        <div className={orderResultPaymentsContent}>
          <Title as='h3' variant='subtitle'>
            결제금액
          </Title>
          <Divider color='gray' />
        </div>

        <div className={orderResultPaymentsTotalAmount}>
          <span className='highlight-text'>총 결제금액</span>
          <span className='highlight-text'>{formatToKRW(totalAmount)}</span>
        </div>
      </div>

      <Button
        variant='solid'
        colorScheme='blue'
        style={{ width: '100%', borderRadius: 0 }}
        onClick={onPaymentButtonClick}
        disabled={totalAmount === 0}
      >{`${formatToKRW(totalAmount)} 결제하기`}</Button>
    </>
  );
}

const orderResultPaymentsContainer = flex({
  flexDirection: 'column',
  padding: '20px',
  gap: '20px',
});

const orderResultPaymentsContent = flex({
  display: {
    base: 'none',
    lg: 'block',
  },
  flexDirection: 'column',
});

const orderResultPaymentsTotalAmount = flex({
  flexDirection: 'row',
  justifyContent: 'space-between',
});
