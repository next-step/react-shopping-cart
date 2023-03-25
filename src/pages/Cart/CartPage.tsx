import { PageTitleLayout } from '@/components';
import { ProductRow } from '@/components/Common';
import Button from '@/components/Common/Button';
import Checkbox from '@/components/Common/Checkbox';
import NumberInput from '@/components/Common/NumerInput';

function CartPage() {
  return (
    <PageTitleLayout title="장바구니">
      <div className="relative flex">
        <div className="flex-[6]">Table</div>
        <div className="flex-[4]">Side</div>
      </div>
      <ProductRow
        addOnComponent={{
          checkboxComponent: <input type="checkbox" />,
          sideComponent: <Button>Button</Button>,
        }}
      />
      <NumberInput />
      <Button variant="primary">Button</Button>
      <Button variant="disabled" disabled>
        Button
      </Button>
      <Button variant="danger">Button</Button>
      <Button variant="info">Button</Button>
      <Checkbox />
    </PageTitleLayout>
  );
}

export default CartPage;
