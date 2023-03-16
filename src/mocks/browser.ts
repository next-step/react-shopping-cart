import { setupWorker } from "msw";

import { cartHandler, productHandler } from "./handlers";

export const worker = setupWorker(...productHandler, ...cartHandler);
