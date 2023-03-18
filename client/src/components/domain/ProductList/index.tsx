import { useFetch, useMutation } from 'hooks';

import Skeleton from './Skeleton';

import { ICart } from 'types/cart';
import { IProduct } from 'types/product';
import { CartSVG } from 'assets/svgs';
import { API } from 'constants/api';

function ProductList() {
  const { data: products = [], isLoading } = useFetch<IProduct[]>({ url: API.PRODUCTS });
  const { mutate } = useMutation<ICart[], ICart>({
    url: API.CART,
    options: { method: 'POST' },
    onSuccess: (data) => console.log(data),
  });

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <section className="product-container">
      {products.map(({ id, imageUrl, name, price }) => (
        <div key={id}>
          <img src={imageUrl} alt={name} width={280} height={280} loading="lazy" />
          <div className="flex justify-between w-280 p-5">
            <div className="product-info">
              <span className="product-info__name">{name}</span>
              <span className="product-info__price">{price.toLocaleString('ko')}원</span>
            </div>
            <button onClick={() => mutate({ id, product: { name, price, imageUrl } })}>
              <img src={CartSVG} alt="장바구니" />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
