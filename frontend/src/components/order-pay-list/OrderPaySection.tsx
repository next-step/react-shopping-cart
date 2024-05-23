export default function OrderPaySection() {
  return (
    <section className="order-right-section">
      <div className="order-right-section__top">
        <h3 className="order-title">결제금액</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="order-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <span className="highlight-text">총 결제금액</span>
          <span className="highlight-text">21,800원</span>
        </div>
        <div className="flex-center mt-30 mx-10">
          <button className="primary-button flex-center">
            21,800원 결제하기
          </button>
        </div>
      </div>
    </section>
  );
}
