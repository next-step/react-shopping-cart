import { Button } from 'components';
import { useIsOpen, useMutation } from 'hooks';
import { addCart } from 'api';

import { OrderDetail } from 'types/order';

import OrderDialog from '../OrderDialog';

interface OrderItemProps {
  product: OrderDetail;
}

function OrderItem({ product }: OrderItemProps) {
  const { id, name, imageUrl, price, count } = product;
  const dialog = useIsOpen();

  const { mutateAsync, isLoading } = useMutation({
    mutation: addCart,
    onError: () => window.alert('제품을 장바구니에 추가하는데 실패했습니다.'),
  });

  const handleClickCartButton = async () => {
    const newCart = { product: { id, name, imageUrl, price }, count };

    await mutateAsync(newCart);
    dialog.open();
  };

  return (
    <div className="order-list-item">
      <div className="flex gap-15 mt-10">
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <div className="flex-col gap-15">
          <span className="order-name">{name}</span>
          <span className="order-info">
            {price.toLocaleString('ko')}원 / 수량: {count}개
          </span>
        </div>
      </div>

      {dialog.isOpen && <OrderDialog onClose={dialog.close} product={product} />}
      <Button type="primary" size="large" loading={isLoading} onClick={handleClickCartButton}>
        장바구니
      </Button>
    </div>
  );
}

export default OrderItem;
