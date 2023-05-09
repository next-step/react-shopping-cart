import React, { useState } from "react";
import Checkbox from "../../../common/Input/Checkbox/Checkbox";
import { useAppDispatch } from "../../../../hooks/storeHooks";
import { selectAll } from "../../../../store/cartSlice";

const CheckboxContainer = () => {
  const dispatch = useAppDispatch();
  const [allChecked, isAllChecked] = useState(false);

  const handleCheckboxClick = () => {
    dispatch(selectAll());
  };
  return (
    <div className="flex justify-between items-center">
      <div className="checkbox-container">
        <Checkbox label={"선택해제"} onClick={handleCheckboxClick} />
      </div>
      <button className="delete-button">상품삭제</button>
    </div>
  );
};

export default CheckboxContainer;
