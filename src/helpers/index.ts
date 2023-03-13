import type { GeneralFunction } from "@/types";

type AsyncTryFunction<T> = () => Promise<T>;

type WithAsyncReturn<T> = {
  result: T | null;
  error: unknown;
};

export async function withAsync<T>(fn: AsyncTryFunction<T>): Promise<WithAsyncReturn<T>> {
  try {
    const result = await fn();

    return {
      result,
      error: null,
    };
  } catch (error) {
    return {
      result: null,
      error,
    };
  }
}

export function tryCatch(tryFunction: GeneralFunction, catchFunction?: GeneralFunction) {
  try {
    const result = tryFunction();

    return {
      result,
      error: null,
    };
  } catch (error) {
    catchFunction?.(error);

    return {
      result: null,
      error,
    };
  }
}

export function numberWithCommas(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
