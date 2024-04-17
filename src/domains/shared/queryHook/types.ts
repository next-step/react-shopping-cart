import { z, ZodTypeAny } from "zod";

export interface Response<T> {
  response?: T;
}

export function responseScheme<T extends ZodTypeAny>(response: T) {
  return z.object({ response });
}

export type Product = {
  id?: number;
  price: number;
  name: string;
  imageUrl: string;
};

export const productSchema = z.object({
  id: z.number(),
  price: z.number(),
  name: z.string(),
  imageUrl: z.string(),
});
