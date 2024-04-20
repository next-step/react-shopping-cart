import { useNavigate } from '@tanstack/react-router'
import { formattingComma } from '../../util/formatter'
import { sumPrice } from '../../util/calculator'
import useCart from '../../hooks/useCart'

const Payment = () => {
  const navigate = useNavigate()
  const { orderContext, actions } = useCart()

  const itemAmount = orderContext.cart.filter((item) => item.isChecked)

  const handlePayClick = () => {
    if (window.confirm('주문 결제로 이동할게요!')) {
      actions('ADD_ORDER_ITEM')
      navigate({ to: '/order' })
    }
  }

  return (
    <section className="cart-right-section">
      <div className="cart-right-section__top">
        <h3 className="cart-title">결제예상금액</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="cart-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <span className="highlight-text">결제예상금액</span>
          <span className="highlight-text">{formattingComma(sumPrice({ item: itemAmount }))}원</span>
        </div>
        <div className="flex-center mt-30 mx-10">
          <button className="primary-button flex-center" disabled={itemAmount.length === 0} onClick={handlePayClick}>
            주문하기{`(${itemAmount.length})`}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Payment
