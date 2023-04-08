import { setupWorker } from "msw";
import handlers from "./handlers/handlers";

export const worker = setupWorker(...handlers);
