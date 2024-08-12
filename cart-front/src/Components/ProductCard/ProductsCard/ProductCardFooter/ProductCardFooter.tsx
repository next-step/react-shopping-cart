import Text from "../../../../ComponentsPrototype/Text/Text";
import CardFooter from "../../../../ComponentsPrototype/Card/CardFooter";
import { CartIcon } from "../../../CartIcon/CartIcon";
import { Product } from "../../../../Types/types";
import { GoToLink } from "../../GoToDetail";
import Flex from "../../../../ComponentsPrototype/Layout/Flex";

export const ProductCardFooter = ({ name, price, imageUrl, id }: Product) => {
  return (
    <>
      <div className="flex flex-col">
        <CardFooter className="flex justify-between  p-1.5">
          <GoToLink paramsId={id.toString()} goto={"/Products"}>
            <Flex className="flex flex-col">
              <Text text={name} className=" text-xs" />
              <Text text={price.toString()} className=" text-xs" />
            </Flex>
          </GoToLink>
          <CartIcon id={id} name={name} price={price} imageUrl={imageUrl} />
        </CardFooter>
      </div>
    </>
  );
};
