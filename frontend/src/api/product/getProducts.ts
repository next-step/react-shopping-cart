import axios from "axios";
import { ProductType } from "../../domain/type";

type ResponseType = ProductType[];

export const getProducts = async () => {
  const { data } = await axios.get<ResponseType>("/products");

  return data;
};
