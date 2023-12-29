import {
  createBrowserRouter
} from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { DashBoard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/Sign-in";

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
    path: "/login",
    element: <AuthLayout/>,
    children: [{
        path: "/login",
        element: <SignIn/>,
    }],
  }
]);