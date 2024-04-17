import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);

export async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  return worker.start();
}
