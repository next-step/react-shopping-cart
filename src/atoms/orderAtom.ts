import { IOrder } from "@/types/order";
import { atomWithStorage } from "jotai/utils";

const orderAtom = atomWithStorage<IOrder[]>("order", []);

export default orderAtom;
