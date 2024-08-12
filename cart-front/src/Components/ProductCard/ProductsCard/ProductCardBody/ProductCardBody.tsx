import CardBody from "../../../../ComponentsPrototype/Card/CardBody";
import Image from "../../../../ComponentsPrototype/Image/Image";
import { GoToLink } from "../../GoToDetail";
export const ProductCardBody = ({
  imageUrl,
  id,
}: {
  imageUrl: string;
  id: string;
}) => {
  return (
    <>
      <CardBody className="w-full">
        <GoToLink paramsId={id.toString()} goto={"/Products"}>
          <Image src={imageUrl} />
        </GoToLink>
      </CardBody>
    </>
  );
};
