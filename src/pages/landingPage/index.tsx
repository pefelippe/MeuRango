import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Logo from "@/components/Logo";
import { LogIn } from "lucide-react";
import Hero from "./hero";
import Testimonials from "./testimonials";

function Header() {
  return (
    <header
      className="h-20 fixed bg-white z-20 top-0 w-full items-center flex justify-center border-b
      text-blue-700 max-md:px-6"
    >
      <div className="flex w-full max-w-6xl justify-between items-center">
        <Logo />
        <div className="flex gap-3">
          <Button
            variant={"outline"}
            className="text-lg py-6 font-medium border-blue-700 hover:underline"
          >
            <Link
              to="/login"
              className="flex gap-1  items-center justify-center"
            >
              Acessar Painel <LogIn />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

const Footer = () => {
  return (
    <footer className="h-16  w-screen mx-auto border-t flex items-center justify-center">
      Zappi © 2024. All rights reserved.
    </footer>
  );
};

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen  mt-16">
      <Helmet
        titleTemplate="Zappi - Sistema de Pedidos"
        title="Zappi - Gestor de Pedidos"
      />
      <Header />
      <Hero />
      {/* <Services /> */}
      {/* <Plans /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
