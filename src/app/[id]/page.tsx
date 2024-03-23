import { useProduct } from "@/api";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { cartAtom } from "@/atoms";
import { addProductToCart } from "@/utils/cart";

const ItemDetail = () => {
  const [cart, setCart] = useAtom(cartAtom);

  const { id } = useParams();
  const { data, isLoading, isError } = useProduct(id!);
  const handleAddToCart = () => {
    if (!data) return;
    setCart(addProductToCart(cart, data));
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (!data) {
    return <div>상품이 존재하지 않습니다.</div>;
  }
  const { name, imageUrl, price } = data;

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-8">
      <img
        src={imageUrl}
        alt={name}
        loading="lazy"
        className="aspect-square mx-auto"
      />
      <div className="flex flex-col flex-grow justify-between">
        <div className="border-b-2 border-secondary-400 font-medium px-2 md:px-0 pb-2 text-lg">
          {name}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between p-2 md:p-0">
            <div>금액</div>
            <div className="text-xl">
              <span className="font-medium">{price.toLocaleString()}</span>원
            </div>
          </div>
          <button
            className="bg-secondary-400 py-4 text-white hover:bg-secondary-500 transition-colors
        "
            onClick={handleAddToCart}
          >
            장바구니
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
