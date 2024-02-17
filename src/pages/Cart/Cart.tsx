import { SubHeader, AmountBox } from '@/components'
import { CartItem } from '@/pages/Cart/components'
import { useCart } from '@/pages/Cart/hooks'

const Cart = () => {
  const {
    cartList,
    handleQuantityChange,
    handleCheckedChange,
    handleAllCheckedChange,
    expectedPaymentAmount,
    openDeleteModal,
    updateCartListAfterDeletion,
    checkedCartListCount,
    openOrderCheckModal,
  } = useCart()

  return (
    <section className="cart-section">
      <SubHeader title="장바구니" type="cart" />
      <div className="grid grid-cols-5 gap-60">
        <section className="span-3 cart-left-section">
          <div className="flex justify-between items-center mb-20">
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
          <h3 className="cart-title">든든배송 상품{`(${checkedCartListCount}개)`}</h3>
          <hr className="divide-line-thin mt-10" />
          {cartList && cartList.length > 0 ? (
            cartList?.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateCartList={updateCartListAfterDeletion}
                handleQuantityChange={handleQuantityChange}
                handleCheckedChange={handleCheckedChange}
              />
            ))
          ) : (
            <div className="flex justify-center px-20">장바구니가 비어있습니다.</div>
          )}
        </section>
        <div className="span-2">
          <AmountBox
            title="결제예상금액"
            price={`${expectedPaymentAmount.toLocaleString()} 원`}
            disabled={checkedCartListCount <= 0}
            onClick={openOrderCheckModal}
            buttonText={`주문하기 (${checkedCartListCount}개)`}
          />
        </div>
      </div>
    </section>
  )
}

export default Cart
