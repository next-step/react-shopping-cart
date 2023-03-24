import { SubHeader } from '@/components'

import { CartItem } from './components'
import { useCart } from './hooks'

const Cart = () => {
  const { cartList } = useCart()

  return (
    <>
      <section className="cart-section">
        <SubHeader title="장바구니" type="cart" />
        <div className="flex justify-center">
          <section className="cart-left-section">
            <div className="flex justify-between items-center">
              <div className="checkbox-container">
                <input className="checkbox" name="checkbox" type="checkbox" checked={true} readOnly />
                <label className="checkbox-label" htmlFor="checkbox">
                  선택해제
                </label>
              </div>
              <button className="delete-button">상품삭제</button>
            </div>
            <h3 className="cart-title">든든배송 상품(3개)</h3>
            <hr className="divide-line-gray mt-10" />
            {cartList && cartList.length > 0 ? (
              cartList?.map((item) => <CartItem key={item.id} item={item} />)
            ) : (
              <div className="flex justify-center px-20">장바구니가 비어있습니다.</div>
            )}
            <hr className="divide-line-thin" />
          </section>
        </div>
      </section>
    </>
  )
}

export default Cart
