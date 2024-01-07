import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { NotFound } from "./pages/404";
import Dashboard from "./pages/app/dashboard";
import Orders from "./pages/app/orders/orders";
import { SignIn } from "./pages/auth/Sign-in";
import { SignUp } from "./pages/auth/Sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <NotFound />,
    children: [{
        path: "/",
        element: <Dashboard/>,
    }, {
      path: "/orders",
      element: <Orders/>,
  }],
  },

  {
    path: "/login",
    element: <AuthLayout/>,
    children: [{
        path: "/login",
        element: <SignIn/>,
    }],
  },
  {
    path: "/signUp",
    element: <AuthLayout/>,
    children: [{
        path: "/signUp",
        element: <SignUp/>,
    }],
  }
]);