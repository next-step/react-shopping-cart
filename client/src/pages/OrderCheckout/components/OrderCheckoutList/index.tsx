import { css } from '@emotion/css';

import { Button } from 'components';

import OrderCheckoutItem from '../OrderCheckoutItem';
import { useAddOrder, useOrderCheckout } from '../../hooks';

function OrderCheckoutList() {
  const { data: products = [] } = useOrderCheckout();
  const { mutate: addOrder, isLoading } = useAddOrder();

  const totalPrice = products.reduce((acc, { count, price }) => acc + count * price, 0);
  const isDisabled = products.length === 0;

  const handleClickOrderButton = async () => {
    if (window.confirm('결제를 진행하시겠습니까?')) {
      addOrder(products);
    }
  };

  return (
    <div className="flex">
      <section className="order-left-section">
        <h3 className="order-title">주문 상품 ({products.length}건)</h3>
        <hr className="divide-line-gray mt-10" />
        {products.map((product) => (
          <OrderCheckoutItem key={product.id} product={product} />
        ))}
      </section>
      <section className="order-right-section">
        <div className="order-right-section__top">
          <h3 className="order-title">결제금액</h3>
        </div>
        <hr className="divide-line-thin" />
        <div className="order-right-section__bottom">
          <div className="flex justify-between p-20 mt-20">
            <span className="highlight-text">총 결제금액</span>
            <span className="highlight-text">{totalPrice.toLocaleString('ko')}원</span>
          </div>
          <div className="flex-center mt-30 mx-10">
            <Button
              type="primary"
              size="large"
              loading={isLoading}
              disabled={isDisabled}
              onClick={handleClickOrderButton}
              className={css`
                width: 100%;
                height: 60px;
              `}
            >
              {totalPrice.toLocaleString('ko')}원 결제하기
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrderCheckoutList;
