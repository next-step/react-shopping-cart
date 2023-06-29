import React from "react";

type TProps = {
  title: string;
};

function SectionHeader({ title }: TProps) {
  return (
    <header className="flex-col-center mt-20">
      <h2 className="cart-section__title">{title}</h2>
      <hr className="divide-line mt-20" />
    </header>
  );
}

export default SectionHeader;
