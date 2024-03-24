import useToggleCartMutation from '@/hooks/queries/useToggleCartMutation';
import { Product } from '@/models/product.model';
import toast from 'react-hot-toast';

interface ProductProps extends Product {}

export default function ProductCard({ id, imageUrl, name, price, isInCart }: ProductProps) {
  const { mutate } = useToggleCartMutation({ productId: id, isInCart });

  const handleCartClick = () => {
    mutate();
    if (isInCart) {
      toast.success('장바구니에서 제거되었습니다.');
      return;
    }
    toast.success('장바구니에 추가되었습니다.');
  };

  return (
    <div className="p-2 border border-gray-200 rounded-md flex flex-col gap-2">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="flex justify-between items-center gap-2">
        <div>
          <p className="text-base font-bold line-clamp-1">{name}</p>
          <p className="text-sm text-gray-500">
            {price.toLocaleString('ko-KR', {
              currency: 'RKW',
            })}{' '}
            원
          </p>
        </div>
        <button type="button" onClick={handleCartClick}>
          {isInCart ? '✅' : '🛒'}
        </button>
      </div>
    </div>
  );
}
