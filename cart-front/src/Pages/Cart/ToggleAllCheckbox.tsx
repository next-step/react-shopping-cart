import { useState } from "react";
import CheckBox from "../../ComponentsPrototype/Checkbox/CheckBox";
import { useCartItemsToggleMutation } from "../../Hooks/MutateCartItem/CartMutation";

export const ToggleAllCheckbox = () => {
  const [reset, setReset] = useState(false);
  const [CartItemsToggleMutation] = useCartItemsToggleMutation();

  return (
    <CheckBox
      flag={reset}
      handleChange={() => {
        CartItemsToggleMutation.mutate(!reset);
        setReset(!reset);
      }}
    />
  );
};
