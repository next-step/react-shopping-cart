import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import Image from '@components/common/Image/Image';
import { OrderDetail } from '@/types/order';
import { formatToKRW } from '@/utils/formatter';

interface OrderResultItemProps {
  orderDetail: OrderDetail;
}

export default function OrderResultItem({
  orderDetail: { name, imageUrl, quantity, price },
}: OrderResultItemProps) {
  return (
    <li className={orderResultItemContainer}>
      <div className={orderResultItemImageSection}>
        <Image
          size='sm'
          className={orderResultItemImage}
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className={orderResultItemInfoSection}>
        <span className={orderResultItemName}>{name}</span>
        <div className={orderResultItemQuantityAndPriceSection}>
          <div className={orderResultItemQuantitySection}>
            <span
              className={orderResultItemQuantity}
            >{`수량: ${quantity}`}</span>
          </div>
          <span className={orderResultItemPrice}>
            {formatToKRW(price * quantity)}
          </span>
        </div>
      </div>
    </li>
  );
}

const orderResultItemContainer = flex({ gap: '10px' });

const orderResultItemImageSection = flex({
  justifyContent: 'row',
  alignItems: 'center',
  gap: '10px',
});

const orderResultItemImage = css({
  flex: '1 0 120px !important',
  borderRadius: '4px',
});

const orderResultItemInfoSection = flex({
  position: 'relative',
  flex: '1 0 0',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: {
    base: '4px',
    sm: '10px',
  },
});

const orderResultItemName = css({
  fontSize: {
    base: '14px',
    sm: '18px',
  },
  paddingRight: '12px',
});

const orderResultItemQuantityAndPriceSection = flex({
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const orderResultItemQuantitySection = flex({
  flexDirection: 'row',
  justifyContent: 'flex-end',
});

const orderResultItemQuantity = css({
  fontSize: {
    base: '14px',
    sm: '18px',
  },
});

const orderResultItemPrice = css({
  fontSize: {
    base: '14px',
    sm: '18px',
  },
});
