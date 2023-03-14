import { SubHeader } from '@/components'

import { useCart } from './hooks'

const Cart = () => {
  const { cartList } = useCart()

  return (
    <>
      <section className="cart-section">
        <SubHeader title="장바구니" type="cart" />
        <div className="flex">
          <section className="cart-left-section">
            <div className="flex justify-between items-center">
              <div className="checkbox-container">
                <input className="checkbox" name="checkbox" type="checkbox" checked={true} />
                <label className="checkbox-label" htmlFor="checkbox">
                  선택해제
                </label>
              </div>
              <button className="delete-button">상품삭제</button>
            </div>
            <h3 className="cart-title">든든배송 상품(3개)</h3>
            <hr className="divide-line-gray mt-10" />
            {cartList?.map((item) => (
              <div key={item.id} className="cart-container">
                <div className="flex gap-15 mt-10">
                  <input className="checkbox" name="checkbox" type="checkbox" checked={true} />
                  <img className="w-144 h-144" src="./assets/images/product.png" alt={item.name} />
                  <span className="cart-name">{item.name}</span>
                </div>
                <div className="flex-col-center justify-end gap-15">
                  <img className="cart-trash-svg" src="./assets/svgs/trash.svg" alt="삭제" />
                  <div className="number-input-container">
                    <input type="number" className="number-input" value="1" />
                    <div>
                      <button className="number-input-button">▲</button>
                      <button className="number-input-button">▼</button>
                    </div>
                  </div>
                  <span className="cart-price">{`${item.price.toLocaleString()}원`}</span>
                </div>
              </div>
            ))}

            <hr className="divide-line-thin mt-10" />
          </section>
        </div>
      </section>
    </>
  )
}

export default Cart
