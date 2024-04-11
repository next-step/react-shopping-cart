import Layout from "../components/Layout";
import OrderLeftSection from "./components/OrderLeftSection";
import OrderPaymentList from "./components/OrderPaymentList";
import OrderRightSection from "./components/OrderRightSection";

const OrderPayment = () => {
  return (
    <Layout title="주문/결제">
      <div className="flex">
        <OrderLeftSection>
          {/* {data.map((item) => (
            <OrderPaymentList {...item} />
          ))} */}
        </OrderLeftSection>
        <OrderRightSection amount={10000} />
      </div>
    </Layout>
  );
};

export default OrderPayment;
