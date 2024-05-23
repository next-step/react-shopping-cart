import { rest } from "msw";

import { BASE_URL } from "../components/constant";

const handlers = [
  rest.get(`${BASE_URL}/products`, (res, ctx) => {
    const products = [
      {
        category: "Fruits",
        price: "$1",
        stocked: true,
        name: "Apple",
      },
    ];

    return res(ctx.status(200), ctx.json({ products }));
  }),
];

export default handlers;
