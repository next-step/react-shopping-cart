import { PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className="flex-col-center mt-20">
      {children}
      <hr className="divide-line mt-20" />
    </header>
  );
};

export default Header;
