import React from "react";

const CheckboxContainer = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="checkbox-container">
        <input
          className="checkbox"
          name="checkbox"
          type="checkbox"
          // checked="true"
        />
        <label className="checkbox-label" htmlFor="checkbox">
          선택해제
        </label>
      </div>
      <button className="delete-button">상품삭제</button>
    </div>
  );
};

export default CheckboxContainer;
