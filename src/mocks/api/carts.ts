import { URI } from "../../domains/shared/URLs";
import { DELETE_API, GET_API, METHOD, POST_API } from "./types";

export const CART_URI = {
  carts: {
    uri: `${URI.CART_URI}`,
    cartId: {
      uri: `${URI.CART_URI}/:id`,
    },
  },
};

export const cartsAPI: (GET_API | DELETE_API | POST_API)[] = [
  {
    method: METHOD.POST,
    uri: CART_URI.carts.uri,
    requestBody: {
      products: {
        id: 10,
        name: "tes11111t",
        price: 1234,
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
      },
    },
  },
  { method: METHOD.DELETE, uri: CART_URI.carts.cartId.uri },
  {
    method: METHOD.GET,
    uri: CART_URI.carts.uri,
    response: {
      response: [
        {
          id: 1,
          product: {
            name: "test",
            price: 1234,
            imageUrl:
              "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
            id: 1,
          },
        },
        {
          id: 5,
          product: {
            name: "tes11111t",
            price: 1234,
            imageUrl:
              "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
            id: 10,
          },
        },
      ],
    },
  },
];
