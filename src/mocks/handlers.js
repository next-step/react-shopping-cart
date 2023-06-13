import { rest } from "msw";
import db from "./db";

const { products, orders: defaultOrders, cartItems: defaultCartItems } = db;
const sortItems = (items) => items.sort((a, b) => (b.product.createdAt || 0) - (a.product.createdAt || 0));

const orders = [...defaultOrders];
const initializedCartItems = sortItems(
  defaultCartItems.map((item, idx) => ({
    ...item,
    product: { ...item.product, createdAt: Date.now() + idx, updatedAt: Date.now() + idx },
  }))
);

const cart = {
  items: initializedCartItems,
};

/////////////////////////////////////

const PAGE_KEY = "page";
const UNIT_KEY = "unit";
const DEFAULT_PAGE_UNIT = 16;

/////////////////////////////////////

function analyzePages({ page, unit = DEFAULT_PAGE_UNIT, items = [] }) {
  const parsedPage = parseInt(page || 1, 10);
  const parsedUnit = parseInt(unit || DEFAULT_PAGE_UNIT, 10);
  const endOfPage = Math.ceil(items.length / parsedUnit);

  const start = (parsedPage - 1) * parsedUnit;
  const end = start + parsedUnit;

  return { parsedPage, parsedUnit, endOfPage, start, end };
}

export const handlers = [
  rest.get("/api/products", (request, response, context) => {
    const page = request.url.searchParams.get(PAGE_KEY);
    const unit = request.url.searchParams.get(UNIT_KEY);
    const { start, end, endOfPage, parsedPage } = analyzePages({ page, unit, items: products });

    // console.log(`
    //   page: ${page},
    //   unit: ${unit},
    //   start: ${start},
    //   end: ${end},
    //   endOfPage: ${endOfPage}
    // `);

    const responseForProducts = products.slice(start, end);

    return response(context.status(200), context.json({ products: responseForProducts, page: parsedPage, endOfPage }));
  }),
  rest.get("/api/orders", (_, res, context) => {
    return res(context.status(200), context.json({ orders }));
  }),

  /////////////////////////
  rest.get("/api/cart", (request, response, context) => {
    const page = request.url.searchParams.get(PAGE_KEY);
    const unit = request.url.searchParams.get(UNIT_KEY);
    const { start, end, endOfPage, parsedPage } = analyzePages({ page, unit, items: cart.items });

    const productsInCart = cart.items.slice(start, end);

    return response(
      context.status(200),
      context.json({ cart: { items: productsInCart }, page: parsedPage, endOfPage })
    );
  }),

  rest.post("/api/cart", async (request, response, context) => {
    const product = await request.json();

    const oldProduct = cart.items.find(({ id }) => id === product.id);

    if (oldProduct) {
      oldProduct.updatedAt = Date.now();
      oldProduct.quantity = oldProduct.quantity ? oldProduct.quantity + 1 : 1;
      return response(context.status(204));
    }

    cart.items.unshift({
      id: Date.now(),
      product: {
        ...product,
        quantity: 1,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
    });
    return response(context.status(204));
  }),

  rest.delete("/api/cart", async (request, response, context) => {
    try {
      const { items } = await request.json();
      cart.items = cart.items.filter(({ id }) => !items.map(({ id }) => id).includes(id));

      return response(context.status(204));
    } catch (error) {
      console.error("delete", error);
      return response(context.status(500));
    }
  }),
];
