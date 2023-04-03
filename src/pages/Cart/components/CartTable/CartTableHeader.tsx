import { Button } from '@/components/Common';
import Checkbox from '@/components/Common/Checkbox';
import useMutation from '@/hooks/useMutation';
import useCartData from '../../hooks/useCartData';

function CartTableHeader({
  checkedList,
  isAllChecked,
  isEmptyChecked,
  onChange,
}: {
  checkedList: number[];
  isAllChecked: boolean;
  isEmptyChecked: boolean;
  onChange: () => void;
  handleDelete: () => void;
}) {
  const { refreshCart } = useCartData();
  const [deleteProductSelected] = useMutation(`/carts?${checkedList.map(id => `cartId=${id}`).join('&')}`, 'DELETE');

  const onClick = () => {
    const result = window.confirm('선택한 상품을 모두 삭제 하시겠습니까?');
    if (!result) return;

    deleteProductSelected({});
    refreshCart();
  };

  return (
    <div className="flex justify-between items-center pl-2 py-5 ">
      <Checkbox label={isAllChecked ? '선택해제' : '전체선택'} checked={isAllChecked} onChange={onChange} />
      <Button variant={isEmptyChecked ? 'disabled' : 'info'} disabled={isEmptyChecked} onClick={onClick}>
        선택삭제
      </Button>
    </div>
  );
}

export default CartTableHeader;
