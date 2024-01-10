import { createBrowserRouter } from "react-router-dom";

import { NotFound } from "./pages/404";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import Dashboard from "./pages/app/dashboard";
import Orders from "./pages/app/orders/orders";
import Store from "./pages/app/store";
import LandingPage from "./pages/landingPage";
import { Login } from "./pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/orders", element: <Orders /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [{ path: "/login", element: <Login /> }],
  },

  {
    path: "/store",
    errorElement: <NotFound />,
    children: [{ path: "/store", element: <Store /> }],
  },
]);
