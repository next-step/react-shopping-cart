import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { css } from '@styled-system/css';
import { flex } from '@styled-system/patterns';
import { useNavigate } from '@tanstack/react-router';
import { Button, CartHeader, CartOrderProduct, CartSummary, EmptyDescription, Typography } from '@/components';
import { useAlert, useCartProducts } from '@/hooks';
import { useAddOrderMutation, useProductCurationQuery, useRemoveProductsFromCartMutation } from '@/queries';
import { useCartStore } from '@/store';
import { Order, Product } from '@/types';

export const CartPage = () => {
  const cartStore = useCartStore();

  return (
    <div className={flex({ flexDirection: 'column', gap: '20px', padding: '20px' })}>
      {cartStore.cartProducts.length === 0 ? <EmptyCart /> : <CartList />}
    </div>
  );
};

const EmptyCart = () => (
  <div className={flex({ flexDirection: 'column', gap: '20px', padding: '20px' })}>
    <EmptyDescription icon={<PiShoppingCartSimpleLight />} description="장바구니가 비었습니다." />
  </div>
);

const CartList = () => {
  const navigate = useNavigate({ from: '/cart' });
  const alert = useAlert();

  const cartStore = useCartStore();

  const cartProducts = useCartProducts();
  const curationProducts = useProductCurationQuery();
  const addOrderMutation = useAddOrderMutation();
  const removeProductsToCartMutation = useRemoveProductsFromCartMutation();

  const checkedCartProductImages = cartProducts.checkedValues.map((value) => value.product.imageUrl);
  const disabledOrderButton = cartProducts.checkedValues.length === 0;

  const moveToOrderPayment = (id: number) => {
    navigate({
      to: '/orders/$id',
      params: { id: String(id) },
    });
  };

  const addOrder = async () => {
    if (cartProducts.checkedValues.length === 0) {
      return;
    }
    const order: Pick<Order, 'products' | 'totalPrice'> = {
      products: cartProducts.checkedValues.map((value) => ({
        ...value.product,
        quantity: value.quantity,
      })),
      totalPrice: cartProducts.totalPrice,
    };
    const confirmed = await alert.open({
      message: '선택한 상품을 주문하시겠습니까?',
      confirmText: '예',
      cancelText: '아니오',
    });

    if (!confirmed) {
      return;
    }

    addOrderMutation.mutate(order, {
      onSuccess: async (newOrder) => {
        const removedProduct = cartStore.cartProducts.filter((product) => !product.checked);
        cartStore.setCartProducts(removedProduct);
        moveToOrderPayment(newOrder.id);
      },
    });
  };

  const addCartProduct = (product: Product) => {
    cartStore.addProduct(product, 1);
  };

  const removeCartProducts = (productIds: number[]) => {
    cartStore.removeProducts(productIds);
    removeProductsToCartMutation.mutate(productIds);
  };

  return (
    <div
      className={flex({
        flexDirection: 'column',
        paddingBottom: '60px',
        gap: '20px',
      })}
    >
      <div className={css({})}>
        <Typography as="h3" variant="headline">
          장바구니 목록
        </Typography>
        <CartHeader
          checkValues={cartProducts.checkedValues}
          allChecked={cartProducts.allChecked}
          toggleAllProductsCheck={cartStore.toggleAllProductsCheck}
          removeProducts={removeCartProducts}
        />
      </div>
      <div
        className={flex({
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '50px',
        })}
      >
        <ul
          className={flex({
            flexDirection: 'column',
            gap: '20px',
            padding: '0',
            flexGrow: 1,
          })}
        >
          {cartStore.cartProducts.map((cart) => (
            <CartOrderProduct
              key={cart.product.id}
              type="cart"
              product={cart.product}
              checked={cart.checked}
              quantity={cart.quantity}
            />
          ))}
        </ul>
        <CartSummary
          totalPrice={cartProducts.totalPrice}
          productImages={checkedCartProductImages}
          curationProducts={curationProducts.data}
          addCartProduct={addCartProduct}
        >
          <Button
            variant="solid"
            style={{ borderRadius: 0, width: '100%' }}
            onClick={addOrder}
            disabled={disabledOrderButton}
          >
            주문하기
          </Button>
        </CartSummary>
      </div>
    </div>
  );
};
