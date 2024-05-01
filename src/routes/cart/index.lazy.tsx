import { createLazyFileRoute } from '@tanstack/react-router'
import { Fragment } from 'react'

import { useCartVM } from './-useCartVM'

export const Route = createLazyFileRoute('/cart/')({
  component: Cart,
})

/**
 * @summary 장바구니 페이지
 */
function Cart() {
  const { actions, cartsQuery, computed } = useCartVM()

  return (
    <section className="cart-section">
      <header className="flex-col-center mt-20">
        <h2 className="cart-section__title">장바구니</h2>
        <hr className="divide-line mt-20" />
      </header>

      <div className="flex">
        <section className="cart-left-section">
          <div className="flex justify-between items-center">
            <div className="checkbox-container">
              <input
                className="checkbox"
                name="checkbox"
                type="checkbox"
                checked={computed.isAllProductChecked}
                onChange={actions.toggleAll}
              />
              <label className="checkbox-label" htmlFor="checkbox">
                선택해제
              </label>
            </div>
            <button
              className="delete-button"
              type="button"
              disabled={!cartsQuery.data?.hasProduct}
              onClick={() => {
                if (confirm('전체 상품을 삭제하시겠습니까?')) {
                  actions.deleteAllProducts()
                }
              }}
              style={{ backgroundColor: cartsQuery.data?.hasProduct ? '#fff' : '#eee' }}
            >
              상품삭제
            </button>
          </div>

          <hr className="divide-line-gray mt-10" />
          {cartsQuery.data?.list.map((product) => (
            <Fragment key={product.id}>
              <div className="cart-container">
                <div className="flex gap-15 mt-10">
                  <input
                    className="checkbox"
                    name="checkbox"
                    type="checkbox"
                    checked={actions.isCheckedProduct(product.id) ?? false}
                    onChange={() => {
                      actions.toggleProduct(product.id)
                    }}
                  />
                  <img className="w-144 h-144" src={product.imageUrl} alt={product.name} />
                  <span className="cart-name">{product.name}</span>
                </div>

                <div className="flex-col-center justify-end gap-15">
                  <button
                    className="pointer"
                    onClick={() => {
                      if (confirm('상품을 삭제하시겠습니까?')) {
                        actions.deleteProduct(product.id)
                      }
                    }}
                    style={{ alignSelf: 'flex-end' }}
                  >
                    <img className="cart-trash-svg" src="/src/assets/svgs/trash.svg" alt="삭제" />
                  </button>

                  <div className="number-input-container">
                    <input
                      key={product.count}
                      type="number"
                      className="number-input"
                      // value={product.count}
                      defaultValue={product.count}
                      onBlur={(e) => actions.changeProductCount(e, product)}
                    />
                    <div>
                      <button
                        className="number-input-button"
                        onClick={() => actions.increaseCount(product.id)}
                      >
                        ▲
                      </button>
                      <button
                        className="number-input-button"
                        onClick={() => actions.decreaseCount(product.id)}
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                  <span className="cart-price">{product.totalPrice.toLocaleString()}원</span>
                </div>
              </div>
              <hr className="divide-line-thin mt-10" />
            </Fragment>
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
              <span className="highlight-text">{computed.paymentTotal}원</span>
            </div>
            <div className="flex-center mt-30 mx-10">
              <button
                className="primary-button flex-center"
                disabled={!computed.totalSelectedCount}
                style={{ backgroundColor: computed.totalSelectedCount ? '#2AC1BC' : '#eee' }}
              >
                주문하기({computed.totalSelectedCount})
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
