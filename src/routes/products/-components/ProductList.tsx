import { useNavigate } from '@tanstack/react-router';
import { Dispatch, SetStateAction } from 'react';
import { useProductList } from '../-hooks';
import { useWindowSize } from '../../../hooks';
import ProductCard from './ProductCard';

interface Props {
  setShowSnackBar: Dispatch<SetStateAction<boolean>>;
}

export const ProductList = ({ setShowSnackBar }: Props) => {
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const { ref, virtualizer, allItems } = useProductList();

  return (
    <div ref={ref} style={{ width: `100%`, overflow: 'auto', marginTop: 80 }}>
      <div
        style={{
          width: '100%',
          height: `${virtualizer.getTotalSize()}px`,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {virtualizer.getVirtualItems().map((row) => {
          const product = allItems[row.index];
          const parentWidth = width;
          const productWidth = 280;
          const gap = row.size - productWidth;
          const contentWidth =
            productWidth * virtualizer.options.lanes +
            gap * (virtualizer.options.lanes - 1);
          const left = (parentWidth - contentWidth) / 2;

          return (
            <div
              key={row.key}
              style={{
                position: 'absolute',
                top: 0,
                left: `calc(${left}px + ${row.lane * row.size}px)`,
                height: `${row.size}px`,
                transform: `translateY(${row.start}px)`,
              }}
            >
              <ProductCard
                product={product}
                setShowSnackBar={setShowSnackBar}
                onClick={() =>
                  navigate({
                    to: '/products/$productId',
                    params: { productId: product.id },
                  })
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
