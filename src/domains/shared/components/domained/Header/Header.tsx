import { Link } from "@tanstack/react-router";
import { headerBox, innerContainer, link, navList } from "./Header.css";
import Text from "../../primitive/Text/Text";

export default function Header() {
  return (
    <header className={headerBox}>
      <div className={innerContainer}>
        <div>
          <Link className={link} to="/shops">
            <Text as="title" color="white">
              NEXTSTEP
            </Text>
          </Link>
        </div>
        <div>
          <ul className={navList}>
            <li>
              <Link className={link} to="/carts">
                <Text as="body" color="white">
                  장바구니
                </Text>
              </Link>
            </li>
            <li>
              <Link className={link} to="/myorders">
                <Text as="body" color="white">
                  주문목록
                </Text>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
