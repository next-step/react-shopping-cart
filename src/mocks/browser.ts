import { setupWorker } from "msw";

import { productHandler } from "./handlers";

export const worker = setupWorker(...productHandler);
