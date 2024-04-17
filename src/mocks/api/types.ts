export type GET = "get";
export type POST = "post";
export type PATCH = "patch";
export type DELETE = "delete";

export type MethodType = {
  GET: GET;
  POST: POST;
  PATCH: PATCH;
  DELETE: DELETE;
};

export const METHOD: MethodType = {
  GET: "get",
  POST: "post",
  PATCH: "patch",
  DELETE: "delete",
};

export type GET_API = {
  method: GET;
  uri: string | Function;
  response: Record<string, unknown> | Record<string, unknown>[];
};

export type DELETE_API = {
  method: DELETE;
  uri: string;
};

export type POST_API = {
  method: POST;
  uri: string;
  requestBody: Record<string, unknown> | Record<string, unknown>[];
};

export type Product = {
  id?: number;
  price: number;
  name: string;
  imageUrl: string;
};
