import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const testimonials = [
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

function Testimonials() {
  return (
    <div className="w-full h-full  items-center flex mx-auto flex-col max-md:px-6 py-16 gap-10 overflow-hidden bg-muted-foreground/5">
      <h3 className="max-w-2xl mx-auto text-5xl font-bold text-blue-800 text-center">
        Conheça a opinião dos nossos clientes
      </h3>

      <div className="mx-auto max-w-xs md:max-w-5xl  pb-10">
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
                className=" md:basis-1/4 lg:basis-1/3 px-6  "
              >
                <div className="flex flex-col px-4 py-5 sm:p-6 bg-white rounded-md h-full border justify-start">
                  <div className="mb-6 flex gap-3 items-center">
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

                  <q className="flex-1 text-gray-600 dark:text-gray-300 h-full items-center justify-center">
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

export default Testimonials;
