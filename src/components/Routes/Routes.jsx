import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Products></Products>,
          },
        ],
      },
      {
        path: "productDetails/:id",
        element: <ProductDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
