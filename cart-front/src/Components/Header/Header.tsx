import Flex from "../../ComponentsPrototype/Layout/Flex";
import Image from "../../ComponentsPrototype/Image/Image";
import Text from "../../ComponentsPrototype/Text/Text";
import { Link } from "@tanstack/react-router";
const Header = () => {
  return (
    <>
      <Flex>
        <Flex>
          <Image />
        </Flex>

        <Flex className="flex justify-around w-full h-20 items-center bg-customTeal">
          <Flex className="flex-center">
            <Link to="/Products">
              <Text
                text="NEXT STEP"
                className="text-4xl font-black text-center text-white"
              />
            </Link>
          </Flex>
          <Flex className="flex gap-3.5">
            <Link to="/Cart">
              <Text
                text="장바구니"
                className="font-medium text-2xl text-white"
              />
            </Link>
            <Link to="/Orders">
              <Text
                text="주문목록"
                className="font-medium text-2xl text-white"
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
