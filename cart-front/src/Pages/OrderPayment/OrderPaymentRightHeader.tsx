import Text from "../../ComponentsPrototype/Text/Text";
import Divider from "../../ComponentsPrototype/Divider/Divider";

export const OrderPaymentRightHeader = ({ total }: { total: number }) => {
  return (
    <div
      className="flex gap-4 flex-col
    ">
      <Text text={`든든 배송상품 (${total})개`} className="mt-4  text-xl" />
      <Divider className="w-full border   border-gray-600" />
    </div>
  );
};
