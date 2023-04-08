import products from "./products";
import carts from "./carts";
import orders from "./orders";

const handlers = [...products, ...carts, ...orders];

export default handlers;
