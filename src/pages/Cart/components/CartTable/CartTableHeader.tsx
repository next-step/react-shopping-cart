import { Button } from '@/components/Common';
import Checkbox from '@/components/Common/Checkbox';

function CartTableHeader({ allChecked, onChange }: { allChecked: boolean; onChange: () => void }) {
  return (
    <div className="flex justify-between items-center pl-2 py-5 ">
      <Checkbox label="선택해제" checked={allChecked} onChange={onChange} />
      <Button variant="info">상품삭제</Button>
    </div>
  );
}

export default CartTableHeader;
