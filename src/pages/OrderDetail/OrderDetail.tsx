const OrderDetail = () => {
  return (
    <>
      <section className="order-section">
        <header className="flex-col-center mt-20">
          <h2 className="order-section__title">주문내역상세</h2>
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

        <div className="order-detail-container">
          <div className="w-480">
            <span className="order-detail-title">결제금액 정보</span>
            <hr className="divide-line-thin my-20" />
            <div className="flex justify-between">
              <span className="highlight-text">총 결제금액</span>
              <span className="highlight-text">325,600원</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OrderDetail
