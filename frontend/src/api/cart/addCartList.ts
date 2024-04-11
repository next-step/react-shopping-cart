import axios from "axios";
import { ProductType } from "../../domain/type";

type Param = ProductType;

const addCartList = async ({ name, price, imageUrl, id }: Param) => {
  return await axios.post("/carts", { name, price, imageUrl, id });
};

export default addCartList;
