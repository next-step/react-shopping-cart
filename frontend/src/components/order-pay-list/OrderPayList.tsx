export default function OrderPayList() {
  return (
    <section className="order-left-section">
      <h3 className="order-title">주문 상품(3건)</h3>
      <hr className="divide-line-gray mt-10" />
      <div className="order-container">
        <div className="flex gap-15 mt-10">
          <img
            className="w-144 h-144"
            src="./assets/images/product.png"
            alt="PET보틀-정사각(420ml)"
          />
          <div className="flex-col gap-15">
            <span className="order-name">PET보틀-정사각(420ml)</span>
            <span>수량: 3</span>
          </div>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </section>
  );
}
