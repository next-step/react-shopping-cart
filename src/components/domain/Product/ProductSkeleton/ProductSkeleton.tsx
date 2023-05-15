import React from "react";

const ProductSkeleton = () => {
  const grid = Array.from({ length: 3 }, (v, i) => i);
  return (
    <>
      {grid.map((_, i) => {
        return (
          <div key={i} className="w-280 h-280 skeleton">
            <div className="flex justify-between w-280 p-5">
              <div className="product-info"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductSkeleton;
