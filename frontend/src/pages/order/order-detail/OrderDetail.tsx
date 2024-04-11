import Container from "../../../components/container/Container";
import HighlightText from "../../../components/highlight-text/HighlightText";
import OrderListItem from "../components/OrderListItem";
import Layout from "../components/Layout";
import OrderSummary from "../components/OrderSummary";
import OrderListHeader from "../components/OrderListHeader";
import { useNavigate } from "@tanstack/react-router";
import { ROUTE_PATH } from "../../../domain/route";

const OrderDetail = () => {
  const navigate = useNavigate();
  const goToPage = () => navigate({ to: ROUTE_PATH.CART });
  return (
    <Layout title="주문내역상세">
      <OrderSummary>
        <OrderListHeader />
        <OrderListItem
          name="PET보틀-정사각(420ml)"
          price="54,800원 / 수량: 3개"
          imageUrl="./assets/images/product.png"
          goToPage={goToPage}
        />
      </OrderSummary>
      <Container className="order-detail-container">
        <div className="w-480">
          <span className="order-detail-title">결제금액 정보</span>
          <hr className="divide-line-thin my-20" />
          <div className="flex justify-between">
            <HighlightText>총 결제금액</HighlightText>
            <HighlightText>325,600원</HighlightText>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderDetail;
