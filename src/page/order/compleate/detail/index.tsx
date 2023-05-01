import { printQuantity, printWon } from "common/util";

type DetailItemProps = {
  detailItem: OrderDetail;
};

const printOrderInfo = (price: number, quantity: number) => {
  return `${printWon(price)} / ${printQuantity(quantity)}`
}

const DetailItem = ({ detailItem }: DetailItemProps) => {
  return (
    <div className="order-list-item">
      <div className="flex gap-15 mt-10">
        <img
          className="w-144 h-144"
          src={detailItem.imageUrl}
          alt="상세 이미지"
        />
        <div className="flex-col gap-15">
          <span className="order-name">{detailItem.name}</span>
          <span className="order-info">
            {printOrderInfo(detailItem.price, detailItem.quantity)}
          </span>
        </div>
      </div>
      <button className="primary-button-small flex-center self-start">
        장바구니
      </button>
    </div>
  );
};

export default DetailItem;
