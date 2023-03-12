const OrderList = () => {
  return (
    <>
      <section className="order-section">
        <header className="flex-col-center mt-20">
          <h2 className="order-section__title">주문 목록</h2>
          <hr className="divide-line mt-20" />
        </header>

        <div className="order-list">
          <div className="order-list__header">
            <span>주문번호: 1</span>
            <span>상세보기 &#62;</span>
          </div>
          <div className="order-list-item">
            <div className="flex gap-15 mt-10">
              <img
                className="w-144 h-144"
                src="./assets/images/product.png"
                alt="PET보틀-정사각(420ml)"
              />
              <div className="flex-col gap-15">
                <span className="order-name">PET보틀-정사각(420ml)</span>
                <span className="order-info">54,800원 / 수량: 3개</span>
              </div>
            </div>
            <button className="primary-button-small flex-center self-start">
              장바구니
            </button>
          </div>
          <div className="order-list-item">
            <div className="flex gap-15 mt-10">
              <img
                className="w-144 h-144"
                src="./assets/images/product.png"
                alt="PET보틀-정사각(420ml)"
              />
              <div className="flex-col gap-15">
                <span className="order-name">PET보틀-정사각(420ml)</span>
                <span className="order-info">54,800원 / 수량: 3개</span>
              </div>
            </div>
            <button className="primary-button-small flex-center self-start">
              장바구니
            </button>
          </div>
          <div className="order-list-item">
            <div className="flex gap-15 mt-10">
              <img
                className="w-144 h-144"
                src="./assets/images/product.png"
                alt="PET보틀-정사각(420ml)"
              />
              <div className="flex-col gap-15">
                <span className="order-name">PET보틀-정사각(420ml)</span>
                <span className="order-info">54,800원 / 수량: 3개</span>
              </div>
            </div>
            <button className="primary-button-small flex-center self-start">
              장바구니
            </button>
          </div>
        </div>
        <div className="order-list">
          <div className="order-list__header">
            <span>주문번호: 2</span>
            <span>상세보기 &#62;</span>
          </div>
          <div className="order-list-item">
            <div className="flex gap-15 mt-10">
              <img
                className="w-144 h-144"
                src="./assets/images/product.png"
                alt="PET보틀-정사각(420ml)"
              />
              <div className="flex-col gap-15">
                <span className="order-name">PET보틀-정사각(420ml)</span>
                <span className="order-info">54,800원 / 수량: 3개</span>
              </div>
            </div>
            <button className="primary-button-small flex-center self-start">
              장바구니
            </button>
          </div>
          <div className="order-list-item">
            <div className="flex gap-15 mt-10">
              <img
                className="w-144 h-144"
                src="./assets/images/product.png"
                alt="PET보틀-정사각(420ml)"
              />
              <div className="flex-col gap-15">
                <span className="order-name">PET보틀-정사각(420ml)</span>
                <span className="order-info">54,800원 / 수량: 3개</span>
              </div>
            </div>
            <button className="primary-button-small flex-center self-start">
              장바구니
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default OrderList
