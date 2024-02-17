import React from "react";

type Props = {
  title: string;
  quantity: number;
};

const ListTitle = ({ title, quantity }: Props) => {
  return (
    <div className="mt-30 mb-10">
      <h3 className="cart-title">
        {title}({quantity}개)
      </h3>
      <hr className="divide-line-gray mt-10" />
    </div>
  );
};

export default ListTitle;
