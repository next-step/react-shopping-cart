import Text from "../../ComponentsPrototype/Text/Text";
import Divider from "../../ComponentsPrototype/Divider/Divider";

export const OrderListHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <Text text="주문목록" className="text-xl font-bold" />
      <Divider className="w-full border-2 border-gray-800 mt-5" />
    </div>
  );
};
