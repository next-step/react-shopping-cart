export default function Cart() {
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
                checked="true"
              />
              <label className="checkbox-label" for="checkbox">
                선택해제
              </label>
            </div>
            <button className="delete-button">상품삭제</button>
          </div>
          <h3 className="cart-title">든든배송 상품(3개)</h3>
          <hr className="divide-line-gray mt-10" />
          <div className="cart-container">
            <div className="flex gap-15 mt-10">
              <input
                className="checkbox"
                name="checkbox"
                type="checkbox"
                checked="true"
              />
              <img
                className="w-144 h-144"
                src="./assets/images/product.png"
                alt="PET보틀-정사각(420ml)"
              />
              <span className="cart-name">PET보틀-정사각(420ml)</span>
            </div>
            <div className="flex-col-center justify-end gap-15">
              <img
                className="cart-trash-svg"
                src="./assets/svgs/trash.svg"
                alt="삭제"
              />
              <div className="number-input-container">
                <input type="number" className="number-input" value="1" />
                <div>
                  <button className="number-input-button">▲</button>
                  <button className="number-input-button">▼</button>
                </div>
              </div>
              <span className="cart-price">123,456원</span>
            </div>
          </div>
          <hr className="divide-line-thin mt-10" />
          <div className="cart-container">
            <div className="flex gap-15 mt-10">
              <input
                className="checkbox"
                name="checkbox"
                type="checkbox"
                checked="true"
              />
              <img
                className="w-144 h-144"
                src="./assets/images/product.png"
                alt="PET보틀-정사각(420ml)"
              />
              <span className="cart-name">PET보틀-정사각(420ml)</span>
            </div>
            <div className="flex-col-center justify-end gap-15">
              <img
                className="cart-trash-svg"
                src="./assets/svgs/trash.svg"
                alt="삭제"
              />
              <div className="number-input-container">
                <input type="number" className="number-input" value="1" />
                <div>
                  <button className="number-input-button">▲</button>
                  <button className="number-input-button">▼</button>
                </div>
              </div>
              <span className="cart-price">123,456원</span>
            </div>
          </div>
          <hr className="divide-line-thin mt-10" />
          <div className="cart-container">
            <div className="flex gap-15 mt-10">
              <input
                className="checkbox"
                name="checkbox"
                type="checkbox"
                checked="true"
              />
              <img
                className="w-144 h-144"
                src="./assets/images/product.png"
                alt="PET보틀-정사각(420ml)"
              />
              <span className="cart-name">PET보틀-정사각(420ml)</span>
            </div>
            <div className="flex-col-center justify-end gap-15">
              <img
                className="cart-trash-svg"
                src="./assets/svgs/trash.svg"
                alt="삭제"
              />
              <div className="number-input-container">
                <input type="number" className="number-input" value="1" />
                <div>
                  <button className="number-input-button">▲</button>
                  <button className="number-input-button">▼</button>
                </div>
              </div>
              <span className="cart-price">123,456원</span>
            </div>
          </div>
          <hr className="divide-line-thin mt-10" />
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
              <button className="primary-button flex-center">
                주문하기(3개)
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
