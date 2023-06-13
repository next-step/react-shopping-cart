import React, { useCallback, useEffect } from "react";
import { CartItem } from "../../components/CartItem";
import useCartDataHandlers from "../../hooks/useCart";
import axios from "axios";
import { requestDeleteItems } from "../../apis/cart";

function Cart() {
  const {
    cart,
    estimatedPrice,
    checkedItems,
    allChecked,
    cartDataHandlers: { updateItems, deleteItems },
    fetchCartItems,
  } = useCartDataHandlers();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleAllCheck = useCallback(() => {
    updateItems(cart.items.map((item) => ({ ...item, product: { ...item.product, checked: !allChecked } })));
  }, [cart]);

  const handleDeletingCheckedItems = useCallback(async () => {
    if (checkedItems?.length === 0) return;
    if (!confirm(`정말 선택하신 ${checkedItems.length}개의 상품을 삭제하시겠습니까?`)) return;

    const result = await requestDeleteItems(checkedItems);
    if (!result) {
      alert("삭제에 실패했습니다. 다시 시도해주세요");
      return;
    }

    deleteItems(checkedItems);
  }, [cart]);

  return (
    <section className="cart-section">
      <header className="flex-col-center mt-20">
        <h2 className="cart-section__title">장바구니</h2>
        <hr className="divide-line mt-20" />
      </header>

      <div className="flex">
        <section className="cart-left-section">
          <div className="flex justify-between items-center">
            <div className="checkbox-container">
              <input
                className="checkbox"
                name="checkbox"
                type="checkbox"
                checked={allChecked}
                onChange={handleAllCheck}
              />
              <label className="checkbox-label" htmlFor="checkbox">
                선택해제
              </label>
            </div>
            <button className="delete-button" onClick={handleDeletingCheckedItems}>
              상품삭제
            </button>
          </div>
          {cart?.items?.length > 0 && (
            <>
              <h3 className="cart-title">든든배송 상품({cart.items.length}개)</h3>
              <hr className="divide-line-gray mt-10" />
              {cart?.items?.map((item) => (
                <React.Fragment key={item.id}>
                  <CartItem item={item} />
                  <hr className="divide-line-thin mt-10" />
                </React.Fragment>
              ))}
            </>
          )}
        </section>
        <section className="cart-right-section">
          <div className="cart-right-section__top">
            <h3 className="cart-title">결제예상금액</h3>
          </div>
          <hr className="divide-line-thin" />
          <div className="cart-right-section__bottom">
            <div className="flex justify-between p-20 mt-20">
              <span className="highlight-text">결제예상금액</span>
              <span className="highlight-text">{estimatedPrice.toLocaleString()}원</span>
            </div>
            <div className="flex-center mt-30 mx-10">
              <button className="primary-button flex-center">주문하기({checkedItems.length}개)</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Cart;
