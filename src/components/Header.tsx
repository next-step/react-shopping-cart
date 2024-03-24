import Cart from "@/assets/cart.svg?react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Count } from "@/components";
import { cartAtom } from "@/atoms";
import { useAtomValue } from "jotai";
import type { ComponentProps } from "react";

const Header = (props: ComponentProps<"header">) => {
  const { className } = props;
  const cart = useAtomValue(cartAtom);
  return (
    <header
      {...props}
      className={twMerge(
        className,
        "bg-primary-400 text-white flex justify-center"
      )}
    >
      <div className="max-w-6xl flex justify-between items-center flex-grow px-4">
        <h1>
          <Link to="/" className="text-2xl font-bold flex gap-2 items-center">
            <Cart />
            NEXTSTEP
          </Link>
        </h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Count count={cart.length}>
                <Link to="/cart">장바구니</Link>
              </Count>
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
