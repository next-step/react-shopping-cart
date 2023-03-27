import { css } from '@emotion/css';

import { Button } from 'components';

import { useTotalPriceOfCheckedCarts, useTotalCountOfCheckedCarts } from 'store/cart';

function ExpectedPayment() {
  const totalPrice = useTotalPriceOfCheckedCarts();
  const totalCount = useTotalCountOfCheckedCarts();

  const isDisabled = totalCount === 0;

  return (
    <section className="cart-right-section">
      <div className="cart-right-section__top">
        <h3 className="cart-title">결제예상금액</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="cart-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <span className="highlight-text">결제예상금액</span>
          <span className="highlight-text">{totalPrice.toLocaleString('ko')}원</span>
        </div>
        <div className="flex-center mt-30 mx-10">
          <Button
            size="large"
            type="primary"
            disabled={isDisabled}
            className={css`
              width: 100%;
              height: 60px;
            `}
          >
            주문하기 ({totalCount}개)
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ExpectedPayment;
