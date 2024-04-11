import { useNavigate } from "@tanstack/react-router";
import { useOrderListQuery } from "../../../hooks/useOrderListQuery";
import Layout from "../components/Layout";
import OrderListHeader from "../components/OrderListHeader";
import OrderListItem from "../components/OrderListItem";
import OrderSummary from "../components/OrderSummary";
import { ROUTE_PATH } from "../../../domain/route";

const OrderList = () => {
  const navigate = useNavigate();
  const { data } = useOrderListQuery();
  const goToPage = () => navigate({ to: ROUTE_PATH.CART });

  return (
    <Layout title="주문 목록">
      <OrderSummary>
        {data?.map((item) => (
          <>
            <OrderListHeader />
            {item.orderDetails.map(
              ({ id, price, name, imageUrl, quantity }) => (
                <OrderListItem
                  key={id}
                  name={name}
                  price={`${price?.toLocaleString()}원/ 수량${quantity}개`}
                  imageUrl={imageUrl}
                  goToPage={goToPage}
                />
              )
            )}
          </>
        ))}
      </OrderSummary>
    </Layout>
  );
};

export default OrderList;
