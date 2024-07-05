import { useNavigate } from '@tanstack/react-router';
import Button from '@components/common/Button/Button';
import { css } from '@/styled-system/css';
import { Order } from '@/types/order';

interface OrderHeaderProps extends Pick<Order, 'id'> {
  detailButton?: boolean;
}

export default function OrderHeader({
  id,
  detailButton = false,
}: OrderHeaderProps) {
  const navigate = useNavigate();

  const handleDetailsButtonClick = (orderId: string) => {
    navigate({
      to: '/orderList/$orderId',
      params: { orderId },
    });
  };

  return (
    <div className={orderListHeader}>
      <span>주문번호 : {id}</span>
      {detailButton && (
        <Button
          variant='ghost'
          colorScheme='gray'
          className={css({ padding: '0', fontSize: '18px' })}
          onClick={() => handleDetailsButtonClick(String(id))}
        >{`상세보기 >`}</Button>
      )}
    </div>
  );
}

const orderListHeader = css({
  width: '100%',
  padding: '30px 50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '50px',
  fontSize: '20px',
  background: '#f6f6f6',
  border: '1px solid #aaaaaa',
  borderBottom: 'none',
});
