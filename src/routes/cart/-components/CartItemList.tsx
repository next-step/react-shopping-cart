import { useDeleteCartItem, useDeleteSelectedItems } from '../-hooks';
import Button from '../../../components/Button/Button';
import Checkbox from '../../../components/Checkbox/Checkbox';
import NumberInput from '../../../components/NumberInput/NumberInput';
import { useCartStore } from '../../../store/cart';
import * as styles from '../cart.css';
import TrashIcon from '../../../assets/svgs/trash.svg?react';
import DeleteConfirmModal from './DeleteConfirmModal';
import { useModal } from '../../../hooks';

export const CartItemList = () => {
  const cartItems = useCartStore((state) => state.items);
  const handleQuantity = useCartStore((state) => state.handleQuantity);
  const isAllSelected = useCartStore((state) => state.isAllSelected);
  const selectedItems = useCartStore((state) => state.selectedItems);
  const toggleAllItemsSelection = useCartStore(
    (state) => state.toggleAllItemsSelection
  );
  const toggleItemSelection = useCartStore(
    (state) => state.toggleItemSelection
  );

  const { isOpen, openModal, closeModal, modalRef } = useModal();
  const deleteCartItem = useDeleteCartItem();
  const deleteSelectedItems = useDeleteSelectedItems();

  return (
    <>
      <section className={styles.cartLeftSection}>
        <div className={styles.cartItemCheck}>
          <Checkbox
            label={isAllSelected ? '전체선택 해제' : '전체선택'}
            checked={isAllSelected}
            onChange={toggleAllItemsSelection}
          />
          <Button variant='outlined' size='small' onClick={openModal}>
            상품삭제
          </Button>
        </div>
        <h3 className={styles.cartTitle}>
          든든배송 상품({cartItems.length}개)
        </h3>

        <hr className={styles.cartDivideLine} style={{ marginTop: 10 }} />

        {cartItems.map((cartItem) => {
          const { name, imageUrl, price, quantity } = cartItem;
          return (
            <div key={cartItem.id}>
              <div className={styles.cartContainer}>
                <div className={styles.cartItemLeftSection}>
                  <Checkbox
                    checked={selectedItems.has(cartItem.id)}
                    onChange={() => toggleItemSelection(cartItem.id)}
                  />
                  <img
                    className={styles.cartItemImage}
                    src={imageUrl}
                    alt={name}
                  />
                  <span className={styles.cartName}>{name}</span>
                </div>
                <div className={styles.cartItemRightSection}>
                  <TrashIcon
                    className={styles.cartTrashSvg}
                    onClick={() => deleteCartItem.mutate(cartItem.id)}
                  />
                  <NumberInput
                    value={quantity || 1}
                    onChange={(newQuantity) =>
                      handleQuantity(cartItem.id, newQuantity)
                    }
                  />
                  <span className={styles.cartPrice}>
                    {price.toLocaleString()}원
                  </span>
                </div>
              </div>
              <hr
                className={styles.cartDivideLineThin}
                style={{ marginTop: 10 }}
              />
            </div>
          );
        })}
      </section>
      <DeleteConfirmModal
        ref={modalRef}
        open={isOpen}
        onClose={closeModal}
        onOk={() =>
          deleteSelectedItems.mutate(Array.from(selectedItems.values()))
        }
      />
    </>
  );
};
