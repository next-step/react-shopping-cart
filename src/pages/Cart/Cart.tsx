import { SubHeader } from '@/components'
import { DeleteModal } from '@/components/modals'
import { useModal } from '@/hooks'

import { CartItem } from './components'
import { useCart } from './hooks'

const Cart = () => {
  const {
    cartList,
    handleQuantityChange,
    handleCheckedChange,
    handleAllCheckedChange,
    totalCartPrice,
    expectedPaymentAmount,
  } = useCart()

  const { openModal } = useModal()

  const openDeleteModal = () => {
    openModal({
      element: <DeleteModal text="선택된 제품을 장바구니에서 삭제하시겠어요?" />,
    })
  }

  return (
    <section className="cart-section">
      <SubHeader title="장바구니" type="cart" />
      <div className="flex justify-center">
        <section className="cart-left-section">
          <div className="flex justify-between items-center">
            <div className="checkbox-container">
              <input
                className="checkbox"
                name="checkbox"
                type="checkbox"
                defaultChecked={true}
                onChange={(event) => handleAllCheckedChange(event.target.checked)}
              />
              <label className="checkbox-label" htmlFor="checkbox">
                선택해제
              </label>
            </div>
            <button className="delete-button" onClick={openDeleteModal}>
              상품삭제
            </button>
          </div>
          <h3 className="cart-title">든든배송 상품(3개)</h3>
          <hr className="divide-line-gray mt-10" />
          {cartList && cartList.length > 0 ? (
            cartList?.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleQuantityChange={handleQuantityChange}
                handleCheckedChange={handleCheckedChange}
              />
            ))
          ) : (
            <div className="flex justify-center px-20">장바구니가 비어있습니다.</div>
          )}
          <hr className="divide-line-thin" />
        </section>
      </div>
      <div className="flex-col items-end gap-10 mt-20 font-size-lg">
        <div>총 금액: {`${totalCartPrice.toLocaleString()} 원`}</div>
        <div>결제예상금액: {`${expectedPaymentAmount.toLocaleString()} 원`}</div>
      </div>
    </section>
  )
}

export default Cart
