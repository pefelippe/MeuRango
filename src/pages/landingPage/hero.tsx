import { SignUp } from "@/components/Sign-up";

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

export default Hero;
