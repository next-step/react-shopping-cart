/* eslint-disable no-console */
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder, removeFromOrder } from "../../../../store/orderSlice";
import { RootState } from "../../../../store/store";

export type CheckboxProps = {
  label?: string;
  id: number;
};

const Checkbox = ({ id, label }: CheckboxProps) => {
  const [checked, setChecked] = React.useState(false);
  const dispatch = useDispatch();
  const order = useSelector((state: RootState) => state.order);
  const cart = useSelector((state: RootState) => state.cart);

  const handleClick = useCallback(() => {
    //UI Change
    setChecked((prevState) => !prevState);
    //State Change
    const theItem = cart.products.find((item) => item.id === id);
    const existingItem = order.products.find((item) => item.id === id);
    existingItem ? dispatch(removeFromOrder(id)) : dispatch(addToOrder(id));
  }, [dispatch, id]);

  return (
    <div className="checkbox-container">
      <input
        className="checkbox"
        name="checkbox"
        type="checkbox"
        checked={checked}
        onClick={handleClick}
      />
      {label && (
        <label className="checkbox-label" htmlFor="checkbox">
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
