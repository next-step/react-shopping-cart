import { Button } from '@/components/Common';
import Checkbox from '@/components/Common/Checkbox';

function CartTableHeader({
  isAllChecked,
  isEmptyChecked,
  onChange,
  handleDelete,
}: {
  isAllChecked: boolean;
  isEmptyChecked: boolean;
  onChange: () => void;
  handleDelete: () => void;
}) {
  return (
    <div className="flex justify-between items-center pl-2 py-5 ">
      <Checkbox label={isAllChecked ? '선택해제' : '전체선택'} checked={isAllChecked} onChange={onChange} />
      <Button variant={isEmptyChecked ? 'disabled' : 'info'} disabled={isEmptyChecked} onClick={handleDelete}>
        선택삭제
      </Button>
    </div>
  );
}

export default CartTableHeader;
