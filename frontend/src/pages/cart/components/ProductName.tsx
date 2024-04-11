import { PropsWithChildren } from "react";

const ProductName = ({ children }: PropsWithChildren) => {
  return <h3 className="cart-title">{children}</h3>;
};

export default ProductName;
