import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { DashBoard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/Sign-in";
import { SignUp } from "./pages/auth/Sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [{
        path: "/",
        element: <DashBoard/>,
    }],
  },
  {
    path: "/orders",
    element: <AppLayout/>,
    children: [{
        path: "/orders",
        element: <DashBoard/>,
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