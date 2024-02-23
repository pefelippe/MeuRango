import { Outlet, createBrowserRouter } from "react-router-dom";

import { NotFound } from "./pages/404";

import Logo from "./components/Logo";
import Header from "./components/header";
import Orders from "./pages/app/[private]/painel-orders/orders/orders";
import Dashboard from "./pages/app/[private]/painel-orders/dashboard";
import { Login } from "./pages/app/[public]/login";
import LandingPage from "./pages/app/[public]/landing-page";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased ">
      <Header />
      <div className="p-8 py-4">
        <Outlet />
      </div>
    </div>
  );
}

export function AuthLayout() {
  return (
    <div className="relative  h-full w-full gap-16 grid grid-cols-1 md:grid-cols-2 ">
      <div
        className="flex md:flex-col text-start w-full md:min-h-screen justify-between   p-10 px-20
       text-white bg-primary max-md:items-center"
      >
        <Logo />
        <footer className="text-sm text-gray-300">
          Painel do parceiro - {new Date().getFullYear()}
        </footer>
      </div>
      <div className=" h-full flex flex-col w-full mx-auto ">
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
