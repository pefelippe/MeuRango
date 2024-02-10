import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Menu, Sandwich } from "lucide-react";

const services = [
  // {
  //   name: "Atendimento automatizado",
  //   icon: <Menu />,
  //   description:
  //     "Nosso robô com inteligência artificial responde às perguntas dos clientes, tornando o atendimento mais eficiente.",
  // },
  {
    name: "Cardápio digital",
    icon: <Menu className="w-16 h-16" />,
    description:
      "Quando o cliente solicita fazer um pedido, o robô envia o link do cardápio digital, que está otimizado para gerar pedidos sem a necessidade de cadastro.",
  },
  {
    name: "Gerenciamento de pedidos",
    icon: <Sandwich className="w-16 h-16" />,
    description:
      "Após o cliente finalizar o pedido, este cai em uma tela de gestão dentro do sistema, permitindo que o dono do delivery gerencie as demandas de forma eficiente.",
  },
];

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

export default Services;
