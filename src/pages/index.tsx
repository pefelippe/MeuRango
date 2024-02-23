import Logo from "@/components/Logo";
import { SignUp } from "@/components/Sign-up";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { LogIn } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { services, testimonials } from "../consts/mockInfo";

function Hero() {
  return (
    <div
      className=" text-slate-950 max-md:px-6  items-center dark:text-white max-xl:px-6
        justify-center mx-auto max-w-6xl h-full  gap-16 grid grid-cols-1 lg:grid-cols-2 py-32 "
    >
      <div className="w-full flex flex-col gap-4 justify-center ">
        <h1 className="text-5xl md:text-[70px] font-bold ">
          Automatize suas vendas, acesse gráficos e ganhe mais dinheiro.
        </h1>
        <h3 className="text-xl font-thin max-w-xl dark:text-gray-300 py-3">
          Ofereça um atendimento rápido, prático e lucrativo com a Zappi,
          gerindo pedidos, automatizando vendas e muito mais.
        </h3>
      </div>
      <SignUp />
    </div>
  );
}

function Services() {
  return (
    <div className="h-fit w-full pt-10 pb-20 gap-10 flex flex-col  border-y bg-gray-50">
      <h3 className="max-w-xl mx-auto text-3xl md:text-5xl font-bold text-blue-800 text-center">
        Nossos serviços
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto w-full max-xl:px-6">
        {services.map((service) => {
          return (
            <Card className="p-4 rounded-xl bg-blue-100 gap-4 flex flex-col h-[350px] items-center justify-center border">
              {service.icon}
              <CardTitle className="w-full text-center items-center text-3xl text-blue-800 font-bold">
                {service.name}
              </CardTitle>
              <CardContent className="w-full text-center items-center font-semibold px-0 max-w-sm font-2xl">
                {service.description}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <div className="w-full h-full  items-start flex mx-auto flex-col max-md:px-6  pt-10 pb-20 gap-10 overflow-hidden ">
      <h3 className=" mx-auto  text-3xl md:text-5xl font-bold text-blue-800 text-start">
        Conheça a opinião dos nossos clientes
      </h3>

      <div className="mx-auto max-w-xs md:max-w-5xl">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className=" md:basis-1/4 lg:basis-1/3 px-6 "
              >
                <div className="flex flex-col p-6 bg-white rounded-md h-full border justify-center ">
                  <div className="mb-4 flex gap-3 items-center">
                    <span className="inline-flex rounded-full">
                      <img
                        className="h-14 w-14 rounded-full object-cover"
                        height={40}
                        width={40}
                        alt={testimonial.name}
                        src={testimonial.avatarUrl}
                        loading="lazy"
                      />
                    </span>
                    <div>
                      <p className="text-md font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <q className="flex-1 text-base text-gray-600 dark:text-gray-300 h-full items-center justify-center">
                    {testimonial.quote}
                  </q>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header
      className="h-20 fixed bg-white z-20 top-0 w-full items-center flex justify-center border-b
       max-xl:px-6"
    >
      <div className="flex w-full max-w-6xl justify-between items-center ">
        <Logo />
        <div className="flex gap-3">
          <Button
            variant={"outline"}
            className="text-lg py-6 font-medium border-blue-700 hover:underline"
          >
            <Link
              to="/painel/login"
              className="flex gap-1  items-center justify-center text-blue-700"
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
      Meu Rango © 2024. All rights reserved.
    </footer>
  );
};

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen  mt-16 min-w-[400px]">
      <Helmet
        titleTemplate="Meu Rango - Gerenciamento de pedidos e cardápio virtual personalizado."
        title="Meu Rango - Gerenciamento de pedidos e cardápio virtual personalizado."
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
