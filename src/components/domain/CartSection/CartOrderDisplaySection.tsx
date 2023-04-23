import { Button, Divider, Text } from '@/components/common';
import { useCartContext } from '@/components/domain/Cart/CartContext';
import { ORDER_CONFIRM_MESSAGE } from '@/constant/message';
import { ORDER } from '@/constant/stateKey';
import { useRouter } from '@/routes/useRouter';
import { currency } from '@/utils/filter/currency';

const CartOrderDisplaySection = () => {
  const { go } = useRouter();
  const { selectedItems, removeSelectedItems } = useCartContext();
  const selectedCounts = selectedItems.reduce(
    (accQty, { quantity }) => accQty + quantity,
    0
  );
  const hasItem = Boolean(selectedCounts);
  const selectedTotalPrice = selectedItems.reduce(
    (accPrice, { product, quantity }) => accPrice + product.price * quantity,
    0
  );

  const handleClickOrder = async () => {
    const result = confirm(ORDER_CONFIRM_MESSAGE);
    if (!result) return;
    go('/payment', {
      state: {
        [ORDER]: selectedItems,
      },
    });
    removeSelectedItems();
  };

  return (
    <section className="cart-right-section">
      <div className="cart-right-section__top">
        <Text as="h3" className="cart-title">
          결제예상금액
        </Text>
      </div>
      <Divider type="thin" />
      <div className="cart-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <Text highlight>결제예상금액</Text>
          <Text highlight>{currency(selectedTotalPrice)}</Text>
        </div>
        <div className="flex-center mt-30 mx-10">
          <Button onClick={handleClickOrder} disabled={!hasItem}>
            주문하기({selectedCounts}개)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartOrderDisplaySection;

const generateOrderObj = (
  selectedItems: UserCart[]
): Pick<Order, 'orderDetails'> => {
  return {
    orderDetails: selectedItems.map(({ product, quantity }) => ({
      ...product,
      quantity,
    })),
  };
};
