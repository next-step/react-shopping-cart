import { useState } from 'react';
import useCartStore from '@/store/cartStore';
import useAlertDialogStore from '@/store/alertDialogStore';
import { useDeleteCartProductsMutation } from '@/hooks/mutations/useDeleteCartProductsMutation';
import { useDeleteCartProductMutation } from '@/hooks/mutations/useDeleteCartProductMutation';
import CartToolBar from './CartToolBar';
import CartProductsHeader from './CartProductsHeader';
import CartProducts from './CartProducts';
import { CartProduct } from '@/types/cart';
import { Product } from '@/types/product';
import {
  findProductById,
  removeProductById,
  updateProductQuantity,
} from '@/utils/cart';
import { MAX_QUANTITY, MIN_QUANTITY } from '@/constants/cart';

interface CartProductsProps {
  selectedProducts: CartProduct[];
  selectProduct: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

export default function CartTable({
  selectedProducts,
  selectProduct,
}: CartProductsProps) {
  const [selection, setSelection] = useState<Set<number>>(new Set());
  const openAlertDialog = useAlertDialogStore.use.onOpen();

  const cart = useCartStore.use.cart();

  // const { increaseQuantity, decreaseQuantity, removeProduct, removeProducts } =
  // useCartStore.use.actions();

  // client
  const increaseQuantity = useCartStore.use.increaseQuantity();
  const decreaseQuantity = useCartStore.use.decreaseQuantity();
  const removeProduct = useCartStore.use.removeProduct();
  const removeProducts = useCartStore.use.removeProducts();

  // server
  const { mutate: deleteCartProducts } = useDeleteCartProductsMutation();
  const { mutate: deleteCartProduct } = useDeleteCartProductMutation();

  const handleSelectChange = (id: number) => {
    const newSelection = new Set(selection);

    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }

    setSelection(newSelection);
    selectProduct(
      cart.filter((product) => newSelection.has(product.product.id))
    );
  };

  const handleSelectAllChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      const allCheckedSelection = new Set(
        cart.map((cartProduct) => cartProduct.product.id)
      );

      setSelection(allCheckedSelection);
      selectProduct(cart);
    } else {
      setSelection(new Set());
      selectProduct([]);
    }
  };

  const handleIncreaseQuantity = (productId: CartProduct['id']) => {
    const targetProduct = findProductById(cart, productId);

    if ((targetProduct?.quantity ?? 0) >= MAX_QUANTITY) {
      return;
    }

    if (targetProduct) {
      selectProduct((prevProducts) =>
        updateProductQuantity(prevProducts, targetProduct, 1)
      );
    }

    increaseQuantity(productId);
  };

  const handleDecreaseQuantity = (productId: CartProduct['id']) => {
    const targetProduct = findProductById(cart, productId);

    if ((targetProduct?.quantity ?? 0) <= MIN_QUANTITY) {
      return;
    }

    if (targetProduct) {
      selectProduct((prevProducts) =>
        updateProductQuantity(prevProducts, targetProduct, -1)
      );
    }

    decreaseQuantity(productId);
  };

  const removeSelectedProduct = (productId: Product['id']) => {
    // server
    deleteCartProduct(productId);
    // client
    removeProduct(productId);
    selectProduct(removeProductById(selectedProducts, productId));
  };

  const handleRemoveProduct = (productId: Product['id']) => {
    openAlertDialog({
      title: '알림',
      message: '상품을 삭제하시겠습니까?',
      btnText: '삭제하기',
      onConfirm: () => removeSelectedProduct(productId),
    });
  };

  const removeSelectedProducts = () => {
    // server
    deleteCartProducts([...selection]);
    // client
    removeProducts([...selection]);
    setSelection(new Set());
    selectProduct([]);
  };

  const handleRemoveSelectedProducts = () => {
    openAlertDialog({
      title: '알림',
      message: '선택된 모든 상품을 삭제하시겠습니까?',
      btnText: '삭제하기',
      onConfirm: removeSelectedProducts,
    });
  };

  const isSelectedAll = () => selection.size === cart.length;

  const hasProducts = cart.length > 0;

  const productCount = cart.length ?? 0;

  return (
    <>
      <CartToolBar
        hasProducts={hasProducts}
        isSelectedAll={isSelectedAll}
        onSelectAllChange={handleSelectAllChange}
        onRemoveSelectedProducts={handleRemoveSelectedProducts}
      />
      <CartProductsHeader productCount={productCount} />
      <CartProducts
        hasProducts={hasProducts}
        cartProducts={cart}
        selectionProducts={selection}
        onToggleSelection={handleSelectChange}
        onIncreaseQuantity={handleIncreaseQuantity}
        onDecreaseQuantity={handleDecreaseQuantity}
        onRemoveProduct={handleRemoveProduct}
      />
    </>
  );
}
