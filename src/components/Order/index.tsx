import { checkedItemCount, sumPrice } from '../../util/calculator'
import { formattingComma } from '../../util/formatter'
import useCart from '../../hooks/useCart'
import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

import { PaymentsApp } from '@sxungchxn/react-payments'
import '@sxungchxn/react-payments/styles'

const Order = () => {
  const navigate = useNavigate()
  const { orderContext, actions } = useCart()
  const [isPaymentApp, setIsPaymentApp] = useState(false)

  const checkedItems = checkedItemCount({ item: orderContext.order })

  const callPaymentApp = () => {
    setIsPaymentApp(true)
  }

  const handlePayClick = () => {
    if (window.confirm('결제 할게요!')) {
      actions('ADD_ORDER_ITEM')
      navigate({ to: '/orderList' })
      actions('REMOVE_CART_ITEM')
    }
  }
  if (!checkedItems) return null
  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문/결제</h2>
        <hr className="divide-line mt-20" />
      </header>

      <div className="flex">
        <section className="order-left-section">
          <h3 className="order-title">주문 상품{`(${orderContext.order.length})개`}</h3>
          <hr className="divide-line-gray mt-10" />
          {orderContext.order.map((item) => (
            <div className="order-container" key={item.id}>
              <div className="flex gap-15 mt-10">
                <img className="w-144 h-144" src={item.imageUrl} alt={item.name} />
                <div className="flex-col gap-15">
                  <span className="order-name">{item.name}</span>
                  <span>수량: {item.quantity}</span>
                </div>
              </div>
            </div>
          ))}

          <hr className="divide-line-thin mt-10" />
        </section>
        <section className="order-right-section">
          <div className="order-right-section__top">
            <h3 className="order-title">결제금액</h3>
          </div>
          <hr className="divide-line-thin" />
          <div className="order-right-section__bottom">
            <div className="flex justify-between p-20 mt-20">
              <span className="highlight-text">총 결제금액</span>
              <span className="highlight-text">{formattingComma(sumPrice({ item: checkedItems }))}원</span>
            </div>
            <div className="flex-center mt-30 mx-10">
              <button
                className="primary-button flex-center"
                onClick={() => {
                  actions('ADD_ORDER_HISTORY', [...orderContext.order])
                  callPaymentApp()
                }}
              >
                {formattingComma(sumPrice({ item: checkedItems }))}원 결제하기
              </button>
            </div>
          </div>
        </section>
      </div>

      {isPaymentApp && (
        <div
          className="payment-dim-area"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsPaymentApp(false)
          }}
        >
          <div className="import-payment">
            <p className="pay-title">결제</p>
            <div className="">
              <p className="pay-title">보유카드</p>
              <PaymentsApp className="pay-list" />
            </div>
            <p className="sub-info">계좌정보 변경은 설정에서 확인해주세요.</p>
            <div className="account-info">
              <p>결제 금액</p>
              <p>
                총 결제금액
                <span>{formattingComma(sumPrice({ item: checkedItems }))}</span>
              </p>
            </div>
            <div className="terms">
              <p>약관 이용 및 동의</p>
              <p>거래 정보 제공 동의</p>
            </div>

            <div className="pay-button">
              <button onClick={handlePayClick}>결제하기</button>
              <button onClick={() => setIsPaymentApp(false)}>취소하기</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Order
