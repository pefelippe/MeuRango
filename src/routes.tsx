import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./components/header";
import Logo from "./components/Logo";
import LandingPage from "./pages";
import { NotFound } from "./pages/404";
import Dashboard from "./pages/painel/dashboard";
import { Login } from "./pages/painel/login";
import Orders from "./pages/painel/orders";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased ">
      <Header />
      <div className="px-8 py-4 h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}

export function AuthLayout() {
  return (
    <div className="relative h-full w-full flex flex-col md:flex-row ">
      <div className="fixed h-20 py-6 px-4 sm:px-6 lg:px-8  text-white z-50">
        <Logo />
      </div>
      <div className="flex-1 h-full flex flex-col w-full mx-auto ">
        <Outlet />
      </div>
    </div>
  );
}

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
    path: "/painel",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/painel/orders", element: <Orders /> },
      { path: "/painel/dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/painel",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [{ path: "/painel/login", element: <Login /> }],
  },
]);
