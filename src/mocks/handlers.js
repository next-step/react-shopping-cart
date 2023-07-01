import { rest } from "msw";
import db from "./db";
import { RESPONSE_CODE } from "../apis";
import { CustomError, generateError } from "./util";

const { products, orders: defaultOrders, cartItems: defaultCartItems } = db;
const sortItems = (items) => items.sort((a, b) => (b.product.createdAt || 0) - (a.product.createdAt || 0));

const orders = [...defaultOrders];
const initializedCartItems = sortItems(
  defaultCartItems.map((item, idx) => ({
    ...item,
    product: {
      ...item.product,
      createdAt: Date.now() + idx,
      updatedAt: Date.now() + idx,
    },
    checked: false,
  })),
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

  return { parsedPage, parsedUnit, endOfPage, start, end, count: items.length };
}

export const handlers = [
  rest.get("/api/products", (request, response, context) => {
    const page = request.url.searchParams.get(PAGE_KEY);
    const unit = request.url.searchParams.get(UNIT_KEY);
    const { start, end, endOfPage, parsedPage, count } = analyzePages({
      page,
      unit,
      items: products,
    });

    const responseForProducts = products.slice(start, end);

    return response(
      context.status(200),
      context.json({
        products: responseForProducts,
        page: parsedPage,
        endOfPage,
        count,
      }),
    );
  }),
  rest.get("/api/orders", (request, response, context) => {
    const page = request.url.searchParams.get(PAGE_KEY);
    const unit = request.url.searchParams.get(UNIT_KEY);
    const { start, end, endOfPage, parsedPage, count } = analyzePages({
      page,
      unit,
      items: products,
    });

    const responseForOrders = orders.slice(start, end);

    return response(
      context.status(200),
      context.json({
        orders: responseForOrders,
        page: parsedPage,
        unit,
        endOfPage,
        count,
      }),
    );
  }),

  /////////////////////////
  rest.get("/api/cart", (request, response, context) => {
    const page = request.url.searchParams.get(PAGE_KEY);
    const unit = request.url.searchParams.get(UNIT_KEY);
    const { start, end, endOfPage, parsedPage, count } = analyzePages({
      page,
      unit,
      items: cart.items,
    });

    const productsInCart = cart.items.slice(start, end);

    return response(
      context.delay(RESPONSE_CODE.FAILED_RESPONSE),
      context.status(200),
      context.json({ items: productsInCart, page: parsedPage, endOfPage, count }),
    );
  }),

  rest.post("/api/cart", async (request, response, context) => {
    const { data: product } = await request.json();

    cart.items.unshift({
      id: Date.now(),
      product: {
        ...product,
        quantity: 1,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      checked: true,
    });

    return response(context.status(RESPONSE_CODE.SUCCESS_EMPTY));
  }),

  rest.delete("/api/cart", async (request, response, context) => {
    try {
      const {
        data: { items },
      } = await request.json();
      cart.items = cart.items.filter(({ id }) => !items.map(({ id }) => id).includes(id));

      return response(context.status(RESPONSE_CODE.SUCCESS_EMPTY));
    } catch (error) {
      return response(
        context.status(RESPONSE_CODE.FAILED_RESPONSE),
        context.json(generateError("상품 삭제에 실패했습니다. 다시 시도해 주세요.")),
      );
    }
  }),

  rest.patch("/api/cart/item/quantity", async (request, response, context) => {
    try {
      const {
        data: { item },
      } = await request.json();

      const oldProduct = cart.items.find(({ id }) => id === item.id);
      if (oldProduct) {
        oldProduct.updatedAt = Date.now();
        oldProduct.product.quantity = item.product.quantity;
      }

      return response(context.status(RESPONSE_CODE.SUCCESS_EMPTY));
    } catch (error) {
      return response(
        context.status(RESPONSE_CODE.FAILED_RESPONSE),
        context.json(generateError("수량 조절에 실패했습니다.")),
      );
    }
  }),

  rest.patch("/api/cart/items/check", async (request, response, context) => {
    try {
      const {
        data: { items, checked },
      } = await request.json();

      items?.forEach((item) => {
        const oldProduct = cart.items.find(({ id }) => id === item.id);

        if (oldProduct) {
          oldProduct.updatedAt = Date.now();
          oldProduct.checked = checked;
        }
      });

      return response(context.status(RESPONSE_CODE.SUCCESS_EMPTY));
    } catch (error) {
      console.error("check patch", error);
      return response(context.status(RESPONSE_CODE.FAILED_RESPONSE));
    }
  }),

  rest.post("/api/checkout", async (request, response, context) => {
    try {
      const resp = await request.json();
      const {
        data: { items = [] },
      } = resp;

      if (items.length === 0) {
        throw new CustomError("구매할 물건을 선택하지 않았습니다.");
      }

      // 주문 목록 추가하기
      const newOrder = {
        id: orders.length + 1,
        orderDetails: items?.map((item) => item.product),
      };
      orders.unshift(newOrder);

      // 장바구니에서 지우기
      const itemIds = items.map(({ id }) => id);
      cart.items = cart.items.filter((item) => !itemIds.includes(item.id));

      return response(context.status(RESPONSE_CODE.SUCCESS_EMPTY));
    } catch (error) {
      console.error("checkout error", error);

      if (error instanceof CustomError) {
        return response(context.status(RESPONSE_CODE.FAILED_RESPONSE), context.json(generateError(error.message)));
      }
      return response(context.status(RESPONSE_CODE.FAILED_RESPONSE));
    }
  }),
];
