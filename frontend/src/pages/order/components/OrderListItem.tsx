import Button from "../../../components/button/Button";

interface OrderListItemProps {
  name: string;
  price: string;
  imageUrl: string;
  goToPage: () => void;
}

const OrderListItem = ({
  name,
  price,
  imageUrl,
  goToPage,
}: OrderListItemProps) => {
  return (
    <div className="order-list-item">
      <div className="flex gap-15 mt-10">
        <img className="w-144 h-144" src={imageUrl} alt={name} />
        <div className="flex-col gap-15">
          <span className="order-name">{name}</span>
          <span className="order-info">{price}</span>
        </div>
      </div>
      <Button
        type="button"
        className="primary-button-small flex-center self-start"
        onClick={goToPage}
      >
        장바구니
      </Button>
    </div>
  );
};

export default OrderListItem;
