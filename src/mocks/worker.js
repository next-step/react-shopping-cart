import { setupWorker } from "msw";
import { handlers } from "./handlers/todo";

export const worker = setupWorker(...handlers);
