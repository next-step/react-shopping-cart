import React from "react";

export type HeaderProps = {
  title: string;
};

const PageTitle = ({ title }: HeaderProps) => {
  return (
    <header className="flex-col-center mt-20">
      <h2 className="cart-section__title">{title}</h2>
      <hr className="divide-line mt-20" />
    </header>
  );
};

export default PageTitle;
