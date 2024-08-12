import Card from "../../ComponentsPrototype/Card/Card";
import CardBody from "../../ComponentsPrototype/Card/CardBody";
import CardFooter from "../../ComponentsPrototype/Card/CardFooter";
import Image from "../../ComponentsPrototype/Image/Image";
import Text from "../../ComponentsPrototype/Text/Text";
import { Link } from "@tanstack/react-router";
import Button from "../../ComponentsPrototype/Button/Button";
import Divider from "../../ComponentsPrototype/Divider/Divider";
import Flex from "../../ComponentsPrototype/Layout/Flex";
import { postCarts } from "../../Apis/api";
import { Product } from "../../Types/types";

export const ProductDetailCard = ({ Product }: { Product: Product }) => {
  const { id, imageUrl, name, price } = Product;

  return (
    <Card className="flex-col max-w-1/3 mt-4">
      <CardBody>
        <Image src={imageUrl} className="aspect-square mb-10" />
      </CardBody>
      <CardFooter className="flex flex-col items-center mt-50px w-full">
        <Flex className="w-full">
          <Text text={name} className="text-2xl" />
          <Divider className="w-full border-2 bg-customGray my-5" />
          <Flex className="flex justify-between mx-6">
            <Text text="금액" />
            <Text text={price.toString()} className="text-2xl" />
          </Flex>
        </Flex>
        <Link
          to="/Cart"
          onClick={() => {
            postCarts({ id, name, price, imageUrl });
          }}
          className="flex-center mt-5 w-full  p-6  bg-customGray">
          <Button className=" w-full text-white  text-2xl">장바구니</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
