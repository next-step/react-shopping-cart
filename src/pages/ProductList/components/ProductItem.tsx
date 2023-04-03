import { CartIcon } from '@/assets/svgs';
import { Image } from '@/components/Common';

import type { Product } from '@/types';

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex-1  h-full flex flex-col rounded-lg overflow-hidden shadow-lg">
      <div className="flex-[8] w-full flex">
        <Image src={product.imageUrl} className="object-cover w-full h-full" />
      </div>
      <div className="flex-[2] w-full py-6 px-2 flex justify-between">
        <div className="px-1 flex flex-col">
          <span className="text-sm">{product.name}</span>
          <span>{product.price.toLocaleString()}원</span>
        </div>
        <div className="flex justify-center items-center">
          <CartIcon />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
