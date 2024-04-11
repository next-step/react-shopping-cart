import { cartHandler } from "./cartHandler";
import { orderHandler } from "./orderHandler";
import { productHandler } from "./productHandler";

export const handlers = [...productHandler, ...orderHandler, ...cartHandler];
