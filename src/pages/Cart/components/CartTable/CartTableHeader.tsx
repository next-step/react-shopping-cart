import { Button } from '@/components/Common';
import Checkbox from '@/components/Common/Checkbox';

function CartTableHeader() {
  return (
    <div className="flex justify-between items-center pl-2 py-5 ">
      <Checkbox label="선택해제" />
      <Button variant="info">상품삭제</Button>
    </div>
  );
}

export default CartTableHeader;
