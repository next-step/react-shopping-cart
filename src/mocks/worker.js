import { setupWorker } from "msw";
import { handlers } from "./handlers/todo.js";

export const worker = setupWorker(...handlers);
