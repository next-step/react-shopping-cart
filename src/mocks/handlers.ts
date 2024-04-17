import { http, HttpResponse } from "msw";
import { DELETE_API, GET_API, METHOD, POST_API } from "./api/types";
import { cartsAPI } from "./api/carts";
import { productsAPI } from "./api/products";
import { ordersAPI } from "./api/orders";

export const handlers = [cartsAPI, productsAPI, ordersAPI]
  .map((api) => convertAPIs(api))
  .flat();

// const request = {
//   get: convertGetAPI,
//   post: convertPostAPI,
//   delete: convertDeleteAPI,
// };

function convertAPIs(apis: (GET_API | DELETE_API | POST_API)[]) {
  return apis.map((api) => {
    switch (api.method) {
      case METHOD.GET:
        return convertGetAPI(api as GET_API);
      case METHOD.POST:
        return convertPostAPI(api as POST_API);
      case METHOD.DELETE:
        return convertDeleteAPI(api as DELETE_API);
      default:
        throw new Error("Unhandled method type");
    }
  });
}

function convertGetAPI(api: GET_API) {
  return http.get(api.uri as string, () => {
    return HttpResponse.json(api.response);
  });
}
function convertPostAPI(api: POST_API) {
  return http.post(api.uri, async () => {
    // const keys = getParams(api.uri).map((param) => params[param]);
    return HttpResponse.json({ response: {} });
  });
}
function convertDeleteAPI(api: DELETE_API) {
  return http.delete(api.uri, () => {
    return HttpResponse.json({ response: {} });
  });
}

export function getParams(uri: string) {
  const uriNames = uri.split("/").filter((uri) => uri.includes(":"));
  return uriNames;
}
