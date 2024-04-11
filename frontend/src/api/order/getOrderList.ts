import axios from "axios";
import { type ProductType as OrderDetailType } from "../../domain/type";

type ResponseType = {
  id: number;
  orderDetails: OrderDetailType[];
};

const getOrderList = async () => {
  const { data } = await axios.get<ResponseType[]>("/orders");
  return data;
};

export default getOrderList;
