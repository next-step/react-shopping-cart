import { useState } from 'react'
import Checkbox from '../common/Checkbox'
import Payment from './Payment'
import CartItemRow from './CartItemRow'
import useCart from '../../hooks/useCart'

const Cart = () => {
  const [allCheckbox, setAllCheckbox] = useState(false)

  const { orderContext, actions } = useCart()

  const handleChangeAll = () => {
    setAllCheckbox((state) => !state)

    actions('ALL_CHECK_ITEM', [...orderContext.cart.map((item) => ({ ...item, isChecked: !allCheckbox }))])
  }

  const isAllChecked = () => {
    const checked = orderContext.cart.filter((item) => item.isChecked)
    const checkedCount = orderContext.cart.length

    if (checked.length !== checkedCount) return false
    else return true
  }

  const handleAllDelete = () => {
    if (window.confirm('모든 상품을 삭제하시겠어요?')) {
      actions('ALL_DELETE_ITEM', [])
    }
  }

  return (
    <article className="cart_container">
      <h2 className="menu_name">장바구니</h2>
      <section className="col_box">
        <div className="row">
          <section className="cart-left-section">
            <div className="flex justify-between items-center">
              <div className="checkbox-container">
                <Checkbox id="allCheckBox" checked={isAllChecked()} onChange={handleChangeAll} />
                <label className="checkbox-label" htmlFor="checkbox">
                  선택해제
                </label>
              </div>
              <button className="delete-button" onClick={handleAllDelete}>
                상품삭제
              </button>
            </div>
            <h3 className="cart-title">든든배송 상품{` (${orderContext.cart.length})`}개</h3>
            <hr className="divide-line-gray mt-10" />
            <CartItemRow />
          </section>
          <Payment />
        </div>
      </section>
    </article>
  )
}

export default Cart
