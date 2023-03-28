import { css } from '@emotion/css';

import { Button, Checkbox } from 'components';
import { useFetch } from 'hooks';

import { fetchCarts } from 'api';
import { Cart } from 'types/cart';

import CartItem from '../CartItem';

const CACHE_KEY = 'carts';

function CartList() {
  const { data: carts = [] } = useFetch<Cart[]>({
    fetcher: fetchCarts,
    cacheKey: CACHE_KEY,
    cacheTime: 0,
  });

  return (
    <div className="flex">
      <section className="cart-left-section">
        <div className="flex justify-between items-center">
          <Checkbox>선택해제</Checkbox>
          <Button type="default">상품삭제</Button>
        </div>
        <h3 className="cart-title my-20">배송 상품 (총 {carts.length}개)</h3>
        <hr className="divide-line-gray mt-10" />
        {carts.map((cart) => (
          <CartItem key={cart.id} cart={cart} />
        ))}
      </section>
      <section className="cart-right-section">
        <div className="cart-right-section__top">
          <h3 className="cart-title">결제예상금액</h3>
        </div>
        <hr className="divide-line-thin" />
        <div className="cart-right-section__bottom">
          <div className="flex justify-between p-20 mt-20">
            <span className="highlight-text">결제예상금액</span>
            <span className="highlight-text">21,800원</span>
          </div>
          <div className="flex-center mt-30 mx-10">
            <Button
              size="large"
              type="primary"
              className={css`
                width: 100%;
                height: 60px;
              `}
            >
              주문하기 ({carts.length}개)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartList;
