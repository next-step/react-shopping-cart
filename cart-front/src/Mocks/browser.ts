import { setupWorker } from "msw/browser";
import { handlers } from "./Handler";

export const worker = setupWorker(...handlers);
