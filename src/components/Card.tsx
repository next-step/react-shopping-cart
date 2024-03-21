import type { IProduct } from "@/types/product";

const Card = (props: Omit<IProduct, "id">) => {
  const { name, imageUrl, price } = props;

  return (
    <div className="flex flex-col p-4 transition-all shadow border-primary-100 gap-2">
      <img src={imageUrl} alt={name} loading="lazy" className="aspect-square" />
      <div className="flex justify-between">
        <div className="flex flex-col truncate">
          <div className="text-xs truncate font-medium">{name}</div>
          <div className="font-campton-b">
            {price.toLocaleString()}
            <span className="font-sans font-normal">원</span>
          </div>
        </div>
        <button
          className="shrink-0"
          onClick={() => {
            console.log("click");
          }}
        >
          장바구니
        </button>
      </div>
    </div>
  );
};

export default Card;
