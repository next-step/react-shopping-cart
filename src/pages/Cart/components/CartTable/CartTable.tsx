import { TableRow } from '@/components/Common';
import Checkbox from '@/components/Common/Checkbox';
import CartTableContainer from './CartTableContainer';
import CartTableHeader from './CartTableHeader';
import useCart from '../../hooks/useCart';
import CartController from './CartController';

function CartTable() {
  const { carts, checkedProductList, handleCheckList, handleCheckAllList } = useCart();

  console.log(carts);

  const allChecked = carts.every(cart => checkedProductList.includes(cart.id));

  return (
    <div className="flex flex-col">
      <CartTableHeader allChecked={allChecked} onChange={handleCheckAllList} />
      <CartTableContainer desc={`든든배송 상품(${carts?.length})개`}>
        {carts?.map(cart => (
          <div key={cart.id} className="min-h-[180px] py-3 border-b-[1px] border-b-gray-200">
            <TableRow
              productName={cart.product.name}
              imgUrl={cart.product.imageUrl}
              addOnComponent={{
                checkboxComponent: (
                  <Checkbox value={cart.id} checked={checkedProductList.includes(cart.id)} onChange={handleCheckList} />
                ),
                sideComponent: <CartController cart={cart} />,
              }}
            />
          </div>
        ))}
      </CartTableContainer>
    </div>
  );
}

export default CartTable;
