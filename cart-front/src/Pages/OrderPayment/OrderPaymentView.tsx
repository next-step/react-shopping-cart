import { orderDetails } from "../../Types/types";
import { AxiosInstance } from "../../Apis/axios";
import { URLS } from "../../Const/url";
import { useMutation } from "@tanstack/react-query";
import { OrderPaymentItem } from "./OrderPaymentItem";
import { PaymentSummary } from "../../Components/Summary/PaymentSummary";
import { OrderPaymentHeader } from "./OrderPaymentHeader";
import { OrderPaymentLeftLayout } from "./OrderPaymentLeftLayout";
import { OrderPaymentRightLayout } from "./OrderPaymentRightLayout";
import { OrderPaymentBodyLayout } from "./OrderPaymentBodyLayout";
import { OrderPaymentTopLayout } from "./OrderPaymentTopLayout";
import { OrderPaymentRightHeader } from "./OrderPaymentRightHeader";

export const OrderPaymentView = ({
  orderDetails,
}: {
  orderDetails: orderDetails[];
}) => {
  const PaymentMutation = useMutation({
    mutationFn: () => AxiosInstance.post(URLS.postPayment()),
  });

  if (orderDetails === null) return null;

  return (
    <div className="gap-5 p-12 px-60">
      <OrderPaymentTopLayout>
        <OrderPaymentHeader />
        <OrderPaymentBodyLayout>
          <OrderPaymentLeftLayout>
            <OrderPaymentRightHeader total={orderDetails.length} />
            {orderDetails.map((product: orderDetails) => (
              <OrderPaymentItem product={product} key={product.id} />
            ))}
          </OrderPaymentLeftLayout>
          <OrderPaymentRightLayout>
            <PaymentSummary
              totalAmount={orderDetails.reduce((acc, product) => {
                return acc + product.price * product.quantity;
              }, 0)}
              nextClick={() => PaymentMutation.mutate()}
            />
          </OrderPaymentRightLayout>
        </OrderPaymentBodyLayout>
      </OrderPaymentTopLayout>
    </div>
  );
};
