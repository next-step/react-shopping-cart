import { rest } from "msw";
import db from "./db";

const { products, orders: defaultOrders, carts: defaultCarts } = db;

const orders = [...defaultOrders];
const carts = [...defaultCarts];

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
    const { start, end, endOfPage, parsedPage } = analyzePages({ page, unit, items: carts });

    const responseForCarts = carts.slice(start, end);

    return response(context.status(200), context.json({ carts: responseForCarts, page: parsedPage, endOfPage }));
  }),
];
