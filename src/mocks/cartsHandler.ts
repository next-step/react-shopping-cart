import { rest } from "msw";

const CARTS = [
  {
    id: 1,
    name: "[리뉴얼]젓가락(종이)-정성을 담아",
    price: 21800,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
  },
  {
    id: 2,
    name: "젓가락(종이)-웬만해선 이 맛을 막을 수 없다",
    price: 21800,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg",
  },
  {
    id: 3,
    name: "리치스 스위트콘 대 2.95kg",
    price: 4780,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
  },
  {
    id: 4,
    name: "리치스 스위트콘 대 2.95kg",
    price: 4780,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
  },
  {
    id: 5,
    name: "리치스 스위트콘 대 2.95kg",
    price: 4780,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
  },

  {
    id: 6,
    name: "리치스 스위트콘 대 2.95kg",
    price: 4780,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
  },

  {
    id: 4,
    name: "리치스 스위트콘 대 2.95kg",
    price: 4780,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
  },

  {
    id: 3,
    name: "펩시 콜라 355ml 24캔",
    price: 83700,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg",
  },

  {
    id: 12,
    name: "[리뉴얼]젓가락(종이)-정성을 담아",
    price: 21800,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
  },
];

export const cartsHandlers = [
  rest.get("/cart", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CARTS));
  }),
  rest.post("/cart", async (req, res, ctx) => {
    const cartItem = await req.json();
    const currentCartItem = { ...cartItem, id: CARTS.length + 1 };
    CARTS.push(currentCartItem);

    return res(ctx.status(200), ctx.json(currentCartItem));
  }),
  rest.delete("/cart/:cardId", (req, res, ctx) => {
    const { cardId } = req.params;
    const cartIndex = CARTS.findIndex((cart) => cart.id + "" === cardId);

    CARTS.splice(cartIndex, 1);

    return res(
      ctx.json({
        message: "Delete successfully",
      })
    );
  }),
];
