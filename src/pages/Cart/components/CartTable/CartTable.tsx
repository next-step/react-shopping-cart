import { TableRow } from '@/components/Common';
import Checkbox from '@/components/Common/Checkbox';
import CartTableContainer from './CartTableContainer';
import CartTableHeader from './CartTableHeader';
import CartController from './CartController';
import { useCartContext } from '../../context/CartContext';

function CartTable() {
  const {
    cartData,
    handleCheckList,
    handleAllCheckCancel,
    handleAllCheck,
    isAllChecked,
    isEmptyChecked,
    handleQuantity,
    checkedListIds,
  } = useCartContext();

  return (
    <div className="flex flex-col">
      <CartTableHeader
        checkedList={checkedListIds}
        isAllChecked={isAllChecked}
        isEmptyChecked={isEmptyChecked}
        onChange={isAllChecked ? handleAllCheckCancel : handleAllCheck}
        handleDelete={console.log}
      />
      <CartTableContainer desc={`든든배송 상품(${cartData?.length})개`}>
        {cartData?.map(cart => (
          <div key={cart.id} className="min-h-[180px] py-3 border-b-[1px] border-b-gray-200">
            <TableRow
              productName={cart.product.name}
              imgUrl={cart.product.imageUrl}
              leftAddon={
                <Checkbox
                  value={cart.id}
                  checked={cart.product.checked}
                  onChange={handleCheckList}
                  disabled={cartData.length === 0}
                />
              }
              rightAddon={<CartController cart={cart} handleQuantity={handleQuantity} />}
            />
          </div>
        ))}
      </CartTableContainer>
    </div>
  );
}

export default CartTable;
