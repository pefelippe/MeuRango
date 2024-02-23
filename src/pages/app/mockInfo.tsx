import { Menu, Sandwich } from "lucide-react";

export const testimonials = [
  {
    name: "Pablo Escobar",
    quote:
      "Gostei do produto. Aumentou bastante minhas vendas. Você não é da Narcoticos né? Para que tantas perguntas?",
    avatarUrl:
      "https://imguol.com/c/tab/bb/2020/01/11/pablo-escobar-1578765028191_v2_900x506.jpg",
    role: "Empreendedor",
  },
  {
    name: "Gordon Ramsay",
    quote:
      "Esse app é absolutamente incrível! Fácil de usar e me ajuda a manter o controle dos meus restaurantes. É bom demais para ser verdade!",
    avatarUrl:
      "https://www.hachettebookgroup.com/wp-content/uploads/2017/06/GR.jpg?w=296",
    role: "Chef renomado",
  },
  {
    name: "Liz Lemon",
    quote:
      "Administrar meu restaurante nunca foi tão simples! Esse app facilitou minha vida e agora posso focar mais na qualidade dos pratos. Obrigada!",
    avatarUrl:
      "https://imgix.bustle.com/rehost/2016/10/11/8fbffaf3-4576-47ce-bc6e-a06fc5abf5cd.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
    role: "Proprietária de restaurante",
  },
  {
    name: "Tony Stark",
    quote:
      "Como um empresário ocupado, esse app é uma mão na roda! Visualizar os gráficos de desempenho em tempo real me ajuda a tomar decisões rápidas.",
    avatarUrl:
      "https://t.ctcdn.com.br/jSEs-a2AsizaO2xZCQXcdbGPZW0=/i490793.jpeg",
    role: "CEO da Stark Industries",
  },
  {
    name: "Hermione Granger",
    quote:
      "A praticidade desse app é impressionante! Gerenciar pedidos e analisar dados se tornou muito mais eficiente. Recomendo para todos os donos de restaurantes!",
    avatarUrl:
      "https://pm1.aminoapps.com/6433/2d53860cc9f31563802a703e639488110518b69c_hq.jpg",
    role: "Bruxa e dona de restaurante",
  },
];


export const services = [
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