import { URI } from "../../domains/shared/URLs";
import { DELETE_API, GET_API, METHOD, POST_API } from "./types";

export const PRODUCTS_URI = {
  products: {
    uri: URI.PRODUCTS_URI,
    productId: {
      uri: `${URI.PRODUCTS_URI}/:id`,
    },
  },
};

export const productsAPI: (GET_API | DELETE_API | POST_API)[] = [
  {
    method: METHOD.POST,
    uri: PRODUCTS_URI.products.uri,
    requestBody: {
      products: {
        price: 10000,
        name: "치킨",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
      },
    },
  },
  { method: METHOD.DELETE, uri: PRODUCTS_URI.products.productId.uri },
  {
    method: METHOD.GET,
    uri: PRODUCTS_URI.products.productId.uri,
    response: {
      response: {
        id: 1,
        price: 10000,
        name: "치킨",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
      },
    },
  },
  {
    method: METHOD.GET,
    uri: PRODUCTS_URI.products.uri,
    response: {
      response: [
        {
          id: 1,
          price: 10000,
          name: "치킨",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 2,
          price: 20000,
          name: "피자",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 3,
          price: 10000,
          name: "치킨",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 4,
          price: 20000,
          name: "피자",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 5,
          price: 10000,
          name: "치킨",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 6,
          price: 20000,
          name: "피자",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 7,
          price: 10000,
          name: "치킨",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 8,
          price: 20000,
          name: "피자",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 9,
          price: 10000,
          name: "치킨",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 10,
          price: 20000,
          name: "피자",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 11,
          price: 10000,
          name: "치킨",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 12,
          price: 20000,
          name: "피자",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 13,
          price: 10000,
          name: "치킨",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 14,
          price: 20000,
          name: "피자",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 15,
          price: 10000,
          name: "치킨",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 16,
          price: 20000,
          name: "피자",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 17,
          price: 10000,
          name: "치킨",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
        {
          id: 18,
          price: 20000,
          name: "피자",
          imageUrl:
            "https://s3-alpha-sig.figma.com/img/05ef/e578/d81445480aff1872344a6b1b35323488?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lDIOdTULo6prhJrybK5LdMhKfA3YgOvxcSLO1WNBpNUpu0hqm-Y1ROsZsVB3S5o~P5USGru86dkRkoL9ATGDL0cyOaeSSolXGfjjMllszONpDqTfwfjB8kgKRqhko25QkqLCwvbX0mSusk8yh78QMHpwTIRA5KMYtQ10F68J088LK0WUDabWGHe~HeZFyrdwess1eQoCg60VvFW2Rhph8qdgqiAu6JHzOmA4Wi1rcrDVbXHk5kEwvDCdYXh-EG6-rZgaH6r3ian9Wlr-12SZY3TCzIlbbAUDvhS985~yHWwXNRQGeFdSmTwdKHA3qadmEMD7jx4eRwG6EgF0bAnHUg__",
        },
      ],
    },
  },
];
