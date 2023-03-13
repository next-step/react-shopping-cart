const List = () => {
  return (
    <div className="root">
      <header className="flex-col-center">
        <h1 className="global-nav-title">상품 상세</h1>
        <br />
        <div className="global-nav-button-box">
          <a className="global-nav-button" href="./index.html">
            홈으로
          </a>
          <a className="global-nav-button" href="./list.html">
            상품 목록
          </a>
          <a className="global-nav-button" href="./detail.html">
            상품 상세
          </a>
          <a className="global-nav-button" href="./cart.html">
            장바구니
          </a>
          <a className="global-nav-button" href="./order.html">
            주문/결제
          </a>
          <a className="global-nav-button" href="./orderList.html">
            주문 목록
          </a>
          <a className="global-nav-button" href="./orderDetail.html">
            주문 상세
          </a>
        </div>
      </header>
      <nav className="nav flex justify-around">
        <div className="flex-center">
          <h1 className="nav-title">CLEAN CODE SHOP</h1>
        </div>
        <div className="flex gap-15">
          <button className="nav-button">장바구니</button>
          <button className="nav-button">주문목록</button>
        </div>
      </nav>
      <div className="product-detail-container">
        <div className="flex-col-center w-520">
          <img
            className="w-480 h-480 mb-10"
            src="./assets/images/product.png"
            alt="PET보틀-정사각(420ml)"
          />
          <div className="product-detail-info">
            <span className="product-detail-info__name">
              PET보틀-정사각(420ml)
            </span>
            <hr className="divide-line-gray my-20" />
            <div className="flex justify-between">
              <span>금액</span>
              <span className="product-detail-info__price">43,000원</span>
            </div>
          </div>
          <button className="product-detail-button flex-center mt-20">
            장바구니
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
