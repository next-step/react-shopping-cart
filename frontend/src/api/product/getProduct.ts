import axios from "axios";
import { ProductType } from "../../domain/type";

type ResponseType = ProductType;

type Param = Pick<ProductType, "id">;

export const getProduct = async ({ id }: Param) => {
  const { data } = await axios.get<ResponseType>(`/products/${id}`);

  return data;
};
