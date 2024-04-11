import { HttpResponse, http } from "msw";
import { ProductType } from "../domain/type";

type Param = {
  id: string;
};

type OrderDetailsRequestBody = {
  id: number;
  orderDetails: ProductType[];
};

const orderDetails = [
  {
    id: 1,
    orderDetails: [
      {
        id: 1,
        price: 10000,
        name: "치킨",
        imageUrl: "http://example.com/chicken.jpg",
        quantity: 5,
      },
      {
        id: 2,
        price: 20000,
        name: "피자",
        imageUrl: "http://example.com/pizza.jpg",
        quantity: 3,
      },
    ],
  },
  {
    id: 2,
    orderDetails: [
      {
        id: 1,
        price: 10000,
        name: "치킨",
        imageUrl: "http://example.com/chicken.jpg",
        quantity: 5,
      },
      {
        id: 2,
        price: 20000,
        name: "피자",
        imageUrl: "http://example.com/pizza.jpg",
        quantity: 3,
      },
    ],
  },
];
export const orderHandler = [
  http.get("/orders", () => {
    return HttpResponse.json(orderDetails);
  }),

  http.get<Param>("/orders/:id", ({ params }) => {
    const { id } = params;
    const data = orderDetails.find((item) => item.id === Number(id));
    return HttpResponse.json(data);
  }),

  http.post<never, OrderDetailsRequestBody>("/orders", async ({ request }) => {
    const info = await request.json();
    return new HttpResponse(null, { status: 201 });
  }),
];
