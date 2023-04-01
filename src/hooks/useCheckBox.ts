import { useState } from "react";

export const useCheckBox = (initialState = false) => {
  const [checked, setChecked] = useState(initialState);
  return {
    checked,
    handleSelect: () => setChecked((prev) => !prev),
  };
};
