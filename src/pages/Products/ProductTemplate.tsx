import React, { PropsWithChildren } from "react";

function ProductTemplate({ children }: PropsWithChildren) {
  return <section className="product-container">{children}</section>;
}

export default ProductTemplate;
