import PageNotFound from "components/PageNotFound";
import { CARTS, CARTS_URL } from "constants/carts";
import { ORDERS, ORDERS_URL } from "constants/orders";
import { PRODUCTS_URL } from "constants/products";
import { CartsDetails, CartsList } from "pages/shopping/carts";
import NavBar from "pages/shopping/components/NavBar";
import { OrdersDetails, OrdersList } from "pages/shopping/orders";
import { ProductsDetails, ProductsList } from "pages/shopping/products";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: PRODUCTS_URL.LIST,
    element: <NavBar />,
    children: [
      {
        children: [
          {
            path: PRODUCTS_URL.LIST,
            element: <ProductsList />,
          },
          {
            path: PRODUCTS_URL.DETAILS,
            element: <ProductsDetails />,
          },
        ],
      },
      {
        path: `/${ORDERS}`,
        children: [
          {
            path: ORDERS_URL.LIST,
            element: <OrdersList />,
          },
          {
            path: ORDERS_URL.DETAILS,
            element: <OrdersDetails />,
          },
        ],
      },
      {
        path: `/${CARTS}`,
        children: [
          {
            path: CARTS_URL.LIST,
            element: <CartsList />,
          },
          {
            path: CARTS_URL.DETAILS,
            element: <CartsDetails />,
          },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
