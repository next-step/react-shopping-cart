import { css, cx } from '@emotion/css';
import { colors } from 'constants/colors';
import React from 'react';

import { OrderDetail } from 'types/order';

interface OrderCheckoutItemProps {
  product: OrderDetail;
}

function OrderCheckoutItem({ product }: OrderCheckoutItemProps) {
  const { imageUrl, name, count } = product;

  return (
    <React.Fragment>
      <div
        className={cx(
          'order-container',
          css`
            margin: 10px 0;
            padding: 0 0 20px;
            &:not(:last-child) {
              border-bottom: 1px solid ${colors.gray600};
            }
          `
        )}
      >
        <div className="flex gap-15 mt-10">
          <img className="w-144 h-144" src={imageUrl} alt={name} />
          <div className="flex-col gap-15">
            <span className="order-name">{name}</span>
            <span>수량: {count}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OrderCheckoutItem;
