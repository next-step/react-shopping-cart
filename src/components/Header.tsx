import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import type { ComponentProps } from "react";

const Header = (props: ComponentProps<"header">) => {
  const { className } = props;
  return (
    <header
      {...props}
      className={twMerge(
        className,
        "bg-primary-400 text-white flex justify-center"
      )}
    >
      <div className="max-w-6xl flex justify-between items-center flex-grow px-10">
        <h1>
          <Link to="/" className="text-xl font-bold">
            NEXTSTEP
          </Link>
        </h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/cart">장바구니</Link>
            </li>
            <li>
              <Link to="/myorder">주문목록</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
