import { CartIcon } from '@/assets/svgs';
import { Product } from '@/types';

interface ProductItemProps {
  product: Product;
}
function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex-1 flex flex-col rounded-lg overflow-hidden shadow-lg">
      <div className="w-full flex">
        <img src={product.imageUrl} className="object-cover w-full h-full" />
      </div>
      <div className="w-full py-6 px-2 flex justify-between">
        <div className="flex-[9] flex flex-col">
          <span className="text-sm">{product.name}</span>
          <span className="flex-[1]">{product.price}</span>
        </div>
        <div className=" flex-[1] flex justify-center items-center">
          <CartIcon />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
