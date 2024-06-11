import Flex from "../../ComponentsPrototype/Layout/Flex";
import Image from "../../ComponentsPrototype/Image/Image";
import FlexItem from "../../ComponentsPrototype/Layout/FlexItem";
import Text from "../../ComponentsPrototype/Text/Text";
const Header = () => {
  return (
    <>
      <Flex>
        <FlexItem>
          <Image />
        </FlexItem>
        <Flex>
          <FlexItem>
            <Text text="장바구니" />
            <Text text="주문목록" />
          </FlexItem>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
