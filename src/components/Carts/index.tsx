import { useContext } from 'react'
import { CartsContext } from '../../context/cartsContext'
import TrashIcon from '../../assets/svgs/trash.svg?react'
import Checkbox from '../common/Checkbox'

const Carts = () => {
  const myCarts = useContext(CartsContext)

  return (
    <article className="cart_container">
      <h2 className="menu_name">장바구니</h2>
      <section className="col_box">
        {myCarts.carts.length ? (
          <div className="row">
            <section className="cart-left-section">
              <div className="flex justify-between items-center">
                <div className="checkbox-container">
                  <Checkbox />
                  <label className="checkbox-label" htmlFor="checkbox">
                    선택해제
                  </label>
                </div>
                <button className="delete-button">상품삭제</button>
              </div>
              <h3 className="cart-title">든든배송 상품{` (${myCarts.carts.length})`}개</h3>
              <hr className="divide-line-gray mt-10" />
              {myCarts.carts.map((item, _) => (
                <div className="cart-container">
                  <div className="flex gap-15 mt-10">
                    <Checkbox />
                    <img className="w-144 h-144" src={item.imageUrl} alt={item.name} />
                    <span className="cart-name">{item.name}</span>
                  </div>
                  <div className="flex-col-center justify-end gap-15">
                    <button type="button">
                      <TrashIcon />
                    </button>
                    <div className="number-input-container">
                      <input type="number" className="number-input" defaultValue="1" />
                      <div>
                        <button className="number-input-button">▲</button>
                        <button className="number-input-button">▼</button>
                      </div>
                    </div>
                    <span className="cart-price">{item.price}원</span>
                  </div>
                </div>
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
                  <button className="primary-button flex-center">주문하기(3개)</button>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <p className="item_not_found">물건을 담아주세요!</p>
        )}

        {/* <div className="row_stack">
          <div className="action_row">
            <Checkbox>선택해제</Checkbox>
            <button type="button">상품삭제</button>
          </div>
          <p>든든배송 상품(3개)</p>
          <ul className="row">
            <li>
              <div>
                <Checkbox />
              </div>
              <div>
                <img src="" alt="" />
              </div>
              <div></div>
            </li>
          </ul>
        </div>
        <div className="pannel">
          <div className="pannel_header">
            <p>결제예상금액</p>
          </div>
          <div className="pannel_content">
            <p>
              결제예상금액
              <span>21700원</span>
            </p>
            <button>주문하기(2개)</button>
          </div>
        </div> */}
      </section>
    </article>
  )
}

export default Carts
