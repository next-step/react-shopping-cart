import Divider from "../../ComponentsPrototype/Divider/Divider";
import Text from "../../ComponentsPrototype/Text/Text";
export const CartHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-5">
      <Text text="장바구니" className="text-xl font-bold" />
      <Divider className="w-full border-2 border-gray-800 mt-5" />
    </div>
  );
};
