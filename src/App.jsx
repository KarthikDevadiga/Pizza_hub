import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { action as createAction } from "./features/order/CreateOrder";
const route = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      }, // loader : provideing a loader
      { path: "/cart", element: <Cart /> },
      { path: "/order/CreateOrder", element: <CreateOrder /> },
      { path: "/order/:orderId", element: <Order />, loader: orderLoader },
      { path: "/order/new", element: <CreateOrder />, action: createAction },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={route} />;
}
