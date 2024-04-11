import axios from "axios";
import { ProductType } from "../../domain/type";

type ResponseType = {
  id: number;
  product: ProductType;
};

export const getCartList = async () => {
  const { data } = await axios.get<ResponseType[]>("/carts");

  return data;
};
