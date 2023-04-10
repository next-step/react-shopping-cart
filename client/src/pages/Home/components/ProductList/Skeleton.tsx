import { css, cx } from '@emotion/css';

import { getCachedData } from 'storages/memory';
import { BasePagination } from 'types/api';
import { Product } from 'types/product';

import ProductItem from '../ProductItem';

const SKELETON_COUNT = 8;
const CACHE_KEY = 'products';

function Skeleton() {
  const cachedPaginatedData = getCachedData<BasePagination<Product>[]>(CACHE_KEY);
  const products = cachedPaginatedData?.flatMap(({ contents }) => contents);
  const skeletons = Array.from({ length: SKELETON_COUNT });

  return (
    <section className="product-container">
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      {skeletons.map((_, index) => (
        <div key={index}>
          <div
            className={cx(
              'skeleton-box',
              css`
                width: 280px;
                height: 280px;
              `
            )}
          />
          <div
            className={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <div
              className={cx(
                'skeleton-box',
                css`
                  width: 130px;
                  height: 14px;
                  margin: 0 0 2px;
                `
              )}
            />
            <div
              className={cx(
                'skeleton-box',
                css`
                  width: 65px;
                  height: 19px;
                `
              )}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skeleton;
