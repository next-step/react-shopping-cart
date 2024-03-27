import { ICart } from "@/types/cart";
import { atomWithStorage } from "jotai/utils";

const cartAtom = atomWithStorage<ICart[]>("cart", []);

export default cartAtom;
