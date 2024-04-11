import { HttpResponse, http } from "msw";
import { ProductType } from "../domain/type";

type Param = {
  id: string;
};

type ProductRequestBody = ProductType;

const mockData = [
  {
    id: 1,
    price: 10000,
    name: "치킨",
    imageUrl: "http://example.com/chicken.jpg",
  },
  {
    id: 2,
    price: 20000,
    name: "피자",
    imageUrl: "http://example.com/pizza.jpg",
  },
  {
    id: 3,
    price: 10000,
    name: "치킨",
    imageUrl: "http://example.com/chicken.jpg",
  },
  {
    id: 4,
    price: 20000,
    name: "피자",
    imageUrl: "http://example.com/pizza.jpg",
  },
  {
    id: 5,
    price: 10000,
    name: "치킨",
    imageUrl: "http://example.com/chicken.jpg",
  },
  {
    id: 6,
    price: 20000,
    name: "피자",
    imageUrl: "http://example.com/pizza.jpg",
  },
  {
    id: 7,
    price: 10000,
    name: "치킨",
    imageUrl: "http://example.com/chicken.jpg",
  },
  {
    id: 8,
    price: 20000,
    name: "피자",
    imageUrl: "http://example.com/pizza.jpg",
  },
];

export const productHandler = [
  http.get("/products", () => {
    console.log({ mockData });
    return HttpResponse.json(mockData);
  }),

  http.get<Param>("/products/:id", ({ params }) => {
    const { id } = params;
    const data = mockData.find((item) => item.id === Number(id));
    return HttpResponse.json(data);
  }),

  http.post<never, ProductRequestBody>("/products", async ({ request }) => {
    const info = await request.json();
    return new HttpResponse(null, { status: 201 });
  }),
];
