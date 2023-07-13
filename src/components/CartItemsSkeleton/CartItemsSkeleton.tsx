import React from "react";

type TProps = {
  length?: number;
};

const SkeletonElement = () => (
  <div className="cart-container">
    <div>
      <div className="flex gap-15 mt-10">
        <div className="cart-img-blank cart-skeleton w-280 h-280"></div>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <div className="w-280 h-44">&nbsp;</div>
      </div>
    </div>
  </div>
);

function CartItemsSkeleton({ length = 16 }: TProps) {
  return (
    <>
      <ul>
        {Array.from({ length }).map((_, idx) => (
          <li key={idx}>
            <SkeletonElement />
          </li>
        ))}
      </ul>
    </>
  );
}

export default CartItemsSkeleton;
