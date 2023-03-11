import { ProductImage } from 'assets/images';
import { CartSVG } from 'assets/svgs';

function ProductList() {
  return (
    <section className="product-container">
      <div>
        <img src={ProductImage} alt="PET보틀-정사각(420ml)" />
        <div className="flex justify-between w-280 p-5">
          <div className="product-info">
            <span className="product-info__name">PET보틀-정사각(420ml)</span>
            <span className="product-info__price">43,000원</span>
          </div>
          <img src={CartSVG} alt="장바구니" />
        </div>
      </div>
      <div>
        <img src={ProductImage} alt="PET보틀-정사각(420ml)" />
        <div className="flex justify-between w-280 p-5">
          <div className="product-info">
            <span className="product-info__name">PET보틀-정사각(420ml)</span>
            <span className="product-info__price">43,000원</span>
          </div>
          <img src={CartSVG} alt="장바구니" />
        </div>
      </div>
      <div>
        <img src={ProductImage} alt="PET보틀-정사각(420ml)" />
        <div className="flex justify-between w-280 p-5">
          <div className="product-info">
            <span className="product-info__name">PET보틀-정사각(420ml)</span>
            <span className="product-info__price">43,000원</span>
          </div>
          <img src={CartSVG} alt="장바구니" />
        </div>
      </div>
      <div>
        <img src={ProductImage} alt="PET보틀-정사각(420ml)" />
        <div className="flex justify-between w-280 p-5">
          <div className="product-info">
            <span className="product-info__name">PET보틀-정사각(420ml)</span>
            <span className="product-info__price">43,000원</span>
          </div>
          <img src={CartSVG} alt="장바구니" />
        </div>
      </div>
      <div>
        <img src={ProductImage} alt="PET보틀-정사각(420ml)" />
        <div className="flex justify-between w-280 p-5">
          <div className="product-info">
            <span className="product-info__name">PET보틀-정사각(420ml)</span>
            <span className="product-info__price">43,000원</span>
          </div>
          <img src={CartSVG} alt="장바구니" />
        </div>
      </div>
    </section>
  );
}

export default ProductList;
