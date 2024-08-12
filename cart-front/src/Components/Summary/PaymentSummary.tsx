import Text from "../../ComponentsPrototype/Text/Text";
import Box from "../../ComponentsPrototype/Layout/Box";
import Divider from "../../ComponentsPrototype/Divider/Divider";
import Flex from "../../ComponentsPrototype/Layout/Flex";
import { Link } from "@tanstack/react-router";

export const PaymentSummary = ({
  totalAmount,
  nextClick,
}: {
  totalAmount: number;
  nextClick: () => void;
}) => {
  return (
    <Box className="flex flex-col">
      <Text text={"결제 금액"} className="flex items-center text-xl p-4" />
      <Divider className="w-full border border-thingray" />
      <Flex className="flex flex-col justify-between p-5">
        <Box className="flex flex-row justify-between w-full px-5">
          <Text
            text={"총 결제금액"}
            className="relative font-bold inline-block text-center px-1 text-lg"
          />
          <Text
            className="relative font-bold inline-block text-center px-1 text-lg underline decoration-customTeal"
            text={` ${totalAmount} 원`}
          />
        </Box>
        <Link to="/Orders" className="flex justify-center mt-14">
          <button
            className="w-full border border-custom-gray bg-customTeal p-5 text-white"
            onClick={nextClick}>
            {totalAmount}원 결제하기
          </button>
        </Link>
      </Flex>
    </Box>
  );
};
