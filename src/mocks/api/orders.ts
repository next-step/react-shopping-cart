import { URI } from "../../domains/shared/URLs";
import { DELETE_API, GET_API, METHOD, POST_API } from "./types";

export const ORDERS_URI = {
  orders: {
    uri: URI.ORDERS_URI,
    orderId: {
      uri: `${URI.ORDERS_URI}/:id`,
    },
  },
};

export const ordersAPI: (GET_API | DELETE_API | POST_API)[] = [
  {
    method: METHOD.GET,
    uri: ORDERS_URI.orders.orderId.uri,
    response: {
      response: {
        id: 1,
        orderDetails: [
          {
            id: 1,
            price: 10000,
            name: "치킨",
            imageUrl:
              "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
            quantity: 5,
          },
          {
            id: 2,
            price: 20000,
            name: "피자",
            imageUrl:
              "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
            quantity: 3,
          },
        ],
      },
    },
  },
  {
    method: METHOD.POST,
    uri: ORDERS_URI.orders.uri,
    requestBody: {
      orderDetails: [
        {
          id: 1,
          price: 10000,
          name: "치킨",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
          quantity: 5,
        },
        {
          id: 2,
          price: 20000,
          name: "피자",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
          quantity: 3,
        },
      ],
    },
  },
  {
    method: METHOD.GET,
    uri: ORDERS_URI.orders.uri,
    response: {
      response: [
        {
          id: 1,
          orderDetails: [
            {
              id: 1,
              price: 10000,
              name: "치킨",
              imageUrl:
                "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
              quantity: 5,
            },
            {
              id: 2,
              price: 20000,
              name: "피자",
              imageUrl:
                "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
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
              imageUrl:
                "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
              quantity: 5,
            },
            {
              id: 2,
              price: 20000,
              name: "피자",
              imageUrl:
                "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
              quantity: 3,
            },
          ],
        },
      ],
    },
  },
];
