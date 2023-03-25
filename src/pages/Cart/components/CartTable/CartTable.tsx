import { TableRow, Button } from '@/components/Common';
import Checkbox from '@/components/Common/Checkbox';
import useFetch from '@/hooks/useFetch';
import { CartList } from '@/types';
import CartTableContainer from './CartTableContainer';
import CartTableHeader from './CartTableHeader';

function CartTable() {
  const { state, loading } = useFetch<CartList>('/carts');

  if (loading) return <div>loading...</div>;

  return (
    <div className="flex flex-col">
      <CartTableHeader />
      <CartTableContainer desc={`든든배송 상품(${state?.data?.length})개`}>
        {state?.data?.map(cart => (
          <div key={cart.id} className="min-h-[180px] py-3 border-b-[1px] border-b-gray-200">
            <TableRow
              productName={cart.product.name}
              imgUrl={cart.product.imageUrl}
              addOnComponent={{
                checkboxComponent: <Checkbox />,
                sideComponent: <Button>Button</Button>,
              }}
            />
          </div>
        ))}
      </CartTableContainer>
    </div>
  );
}

export default CartTable;
