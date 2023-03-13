import { useFetch } from 'hooks';

import { CartSVG } from 'assets/svgs';
import { IProduct } from 'types/product';

function ProductList() {
  const { data: products = [] } = useFetch<IProduct[]>({ url: '/products' });

  return (
    <div className="container">
      <section className="product-container">
        {products.map(({ id, imageUrl, name, price }) => (
          <div key={id}>
            <img src={imageUrl} alt={name} width={280} height={280} loading="lazy" />
            <div className="flex justify-between w-280 p-5">
              <div className="product-info">
                <span className="product-info__name">{name}</span>
                <span className="product-info__price">{price.toLocaleString('ko')}원</span>
              </div>
              <img src={CartSVG} alt="장바구니" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProductList;
