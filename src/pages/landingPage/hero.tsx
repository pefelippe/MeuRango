import { SignUp } from "@/components/Sign-up";

function Hero() {
  return (
    <div
      className=" text-slate-950 max-md:px-6  items-center dark:text-white
        justify-center mx-auto max-w-6xl h-full  gap-16 grid grid-cols-1 md:grid-cols-2 py-32 "
    >
      <div className="w-full flex flex-col gap-4 justify-center ">
        <h1 className="text-5xl md:text-6xl font-bold ">
          Automatize suas vendas, acesse gráficos e ganhe mais dinheiro.
        </h1>
        <h3 className="text-xl font-normal max-w-lg dark:text-gray-300 py-3">
          Ofereça um atendimento rápido, prático e lucrativo com a Zappi,
          gerindo pedidos, automatizando vendas e muito mais.
        </h3>
        {/* <Button
          variant={"destructive"}
          className="text-lg  p-7 w-full max-w-md font-medium border-blue-700 hover:underline"
        >
          <Link to="/dashboard" className="flex  items-center ">
            Ver Demonstração
          </Link>
        </Button> */}
        <div></div>
      </div>
      <SignUp />
    </div>
  );
}

export default Hero;
