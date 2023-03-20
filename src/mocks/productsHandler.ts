import { rest } from "msw";

const PRODUCTS = [
  {
    id: "1",
    price: 10000,
    name: "치킨",
    imageUrl: "http://example.com/chicken.jpg",
  },
  {
    id: "2",
    price: 20000,
    name: "피자",
    imageUrl: "http://example.com/pizza.jpg",
  },
];

export const productsHandler = [
  rest.get("/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PRODUCTS));
  }),
  rest.post("/products", async (req, res, ctx) => {
    const product = await req.json();
    const currentProduct = { ...product, id: new Date().getTime() };
    PRODUCTS.push(currentProduct);

    return res(ctx.status(201), ctx.json(currentProduct));
  }),
  rest.get("/products/:productId", (req, res, ctx) => {
    const { productId } = req.params;
    const product = PRODUCTS.find((product) => product.id === productId);

    if (!product) {
      return res(ctx.status(400), ctx.json({ message: "Item not found" }));
    }

    return res(ctx.status(200), ctx.json(product));
  }),
  rest.delete("/products/:productId", (req, res, ctx) => {
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
