import { createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "@/components";
import Home from "@/app/page";
import Layout from "@/app/layout";
import ItemDetail from "@/app/[id]/page";
import Cart from "@/app/cart/page";
import Order from "@/app/order/page";
import MyOrder from "@/app/myorder/page";
import OrderDetail from "@/app/myorder/[id]/page";

const router = createBrowserRouter(
  [
    {
      element: (
        <Provider>
          <Layout>
            <Outlet />
          </Layout>
        </Provider>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <ItemDetail />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/myorder",
          element: <MyOrder />,
        },
        {
          path: "/myorder/:id",
          element: <OrderDetail />,
        },
      ],
    },
  ],
  {
    basename: "/react-shopping-cart/",
  }
);

export default router;
