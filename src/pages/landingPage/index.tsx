import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Hero from "./hero";
import Services from "./services";
import Testimonials from "./testimonials";

function Header() {
  return (
    <header
      className="h-20 fixed bg-white z-20 top-0 w-full items-center flex justify-center border-b
      text-blue-700 max-xl:px-6"
    >
      <div className="flex w-full max-w-6xl justify-between items-center ">
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
    <footer className="h-16  w-full mx-auto border-t flex items-center justify-center bg-gray-100 text-[#101010] max-xl:px-6">
      Zappi © 2024. All rights reserved.
    </footer>
  );
};

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen  mt-16 min-w-[400px]">
      <Helmet
        titleTemplate="Zappi - Gerenciamento de pedidos e cardápio virtual personalizado."
        title="Zappi - Gerenciamento de pedidos e cardápio virtual personalizado."
      />
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
