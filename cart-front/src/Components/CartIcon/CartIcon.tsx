import CartSvg from "../..//Svg/CartIcon.svg";
import { postCarts } from "../../Apis/api";
import { Product } from "../../Types/types";
import { useMutation } from "@tanstack/react-query";

export const CartIcon = ({ id, name, price, imageUrl }: Product) => {
  const CartMutation = useMutation({
    mutationFn: ({ id, name, price, imageUrl }: Product) =>
      postCarts({ id, name, price, imageUrl }),
  });

  return (
    <div
      className="w-5 h-5 flex"
      onClick={() => {
        CartMutation.mutate({ id, name, price, imageUrl });
      }}>
      <CartSvg />
    </div>
  );
};
