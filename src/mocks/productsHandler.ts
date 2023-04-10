import { rest } from "msw";

const PRODUCTS = [
  {
    id: "1",
    price: 10000,
    name: "unknown",
    imageUrl: "http://example.com/chicken.jpg",
  },
  {
    id: "2",
    price: 20000,
    name: "unknown",
    imageUrl: "http://example.com/pizza.jpg",
  },
  {
    id: "3",
    price: 30000,
    name: "unknown",
    imageUrl: "http://example.com/pizza.jpg",
  },
  {
    id: "4",
    price: 40000,
    name: "unknown",
    imageUrl: "http://example.com/pizza.jpg",
  },
  {
    id: "5",
    price: 50000,
    name: "unknown",
    imageUrl: "http://example.com/pizza.jpg",
  },
  {
    id: "6",
    price: 60000,
    name: "unknown",
    imageUrl: "http://example.com/pizza.jpg",
  },
  {
    id: "7",
    price: 70000,
    name: "unknown",
    imageUrl: "http://example.com/pizza.jpg",
  },
  {
    id: "8",
    price: 80000,
    name: "unknown",
    imageUrl: "http://example.com/pizza.jpg",
  },
];

export const productsHandler = [
  rest.get("/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PRODUCTS));
  }),
  rest.post("/", async (req, res, ctx) => {
    const product = await req.json();
    const currentProduct = { ...product, id: new Date().getTime() };
    PRODUCTS.push(currentProduct);

    return res(ctx.status(201), ctx.json(currentProduct));
  }),
  rest.get("/:productId", (req, res, ctx) => {
    const { productId } = req.params;
    const product = PRODUCTS.find((product) => product.id === productId);

    if (!product) {
      return res(ctx.status(400), ctx.json({ message: "Item not found" }));
    }

    return res(ctx.status(200), ctx.json(product));
  }),
  rest.delete("/:productId", (req, res, ctx) => {
    const { productId } = req.params;
    const productIdx = PRODUCTS.findIndex(
      (product) => product.id === productId
    );

    PRODUCTS.splice(productIdx, 1);

    return res(
      ctx.json({
        message: "Item deleted",
      })
    );
  }),
];
