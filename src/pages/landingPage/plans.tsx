import { Card, CardContent, CardTitle } from "@/components/ui/card";

function Plans() {
  return (
    <div className="h-fit 4 w-screen  pt-10 pb-20 gap-10 flex flex-col max-xl:px-6">
      <h3 className="max-w-xl mx-auto text-5xl font-bold text-blue-800 text-center">
        Conheça nossos planos
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
        <Card className="w-full p-6 border-t-4 border-t-blue-800 gap-6  ">
          <CardTitle className="text-blue-800 font-medium font-xl">
            Plano Inicial
          </CardTitle>
          <CardContent className="px-0">
            <div className="w-full  flex flex-col items-start gap-6 justify-start pt-6">
              <h2 className="text-5xl font-extrabold">R$9,90/mês</h2>
              <span className="text-lg font-thin">
                Ideal para quem está começando a digilizar um negócio.
              </span>
              <ul className="space-y-4 font-thin list-disc px-6 pb-4">
                <li>
                  <span>Vendas por balcão</span>
                </li>
                <li>
                  <span>Gestão de descontos</span>
                </li>
                <li>
                  <span>Loja Online e Menu QR</span>
                </li>
                <li>
                  <span>Múltiplos usuários</span>
                </li>
                <li>
                  <span>Diferentes meios de pagamento</span>
                </li>
                <li>
                  <span>Impressão de tickets</span>
                </li>
                <li>
                  <span>Gestão de produtos e despesas</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full p-6 border-t-4 border-t-violet-800">
          <CardTitle className="text-violet-800 font-medium">
            Plano Avançado
          </CardTitle>
          <CardContent className="px-0">
            <div className="w-full  flex flex-col items-start gap-6 justify-start pt-6">
              <h2 className="text-5xl font-extrabold">R$19,90/mês</h2>
              <span className="text-lg font-thin">
                Ideal para quem busca um maior controle do negócio gastronômico
                com um sistema digital.
              </span>
              <ul className="space-y-4 font-thin list-disc px-6 pb-4">
                <li>
                  <span>Relatórios gráficos e estatísticos</span>
                </li>
                <li>
                  <span>Contagem de caixa</span>
                </li>
                <li>
                  <span>Controle de estoque</span>
                </li>
                <li>
                  <span>Gestão de receitas</span>
                </li>
                <li>
                  <span>Gestão de clientes e fornecedores</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full p-6 border-t-4 border-t-red-800">
          <CardTitle className="text-red-800 font-medium">Plan Pro</CardTitle>
          <CardContent className="px-0 font-thin">
            <div className="w-full  flex flex-col items-start gap-6 justify-start pt-6">
              <h2 className="text-5xl font-extrabold">R$29,90/mês</h2>
              <span className="text-lg font-thin">
                Acesso a todas as funcionalidades do sistema, ideal para quem
                tem uma operação profissional.
              </span>
              <ul className="space-y-4 font-thin list-disc px-6 pb-4">
                <li>
                  {" "}
                  <span>Contagem de caixa às cegas</span>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <span>Vários caixas e turnos</span>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <span>Diferentes listas de preços</span>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <span>Vinculação de produtos</span>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <span>PIN de autorização para os utilizadores</span>{" "}
                </li>{" "}
                <li>
                  {" "}
                  <span>Acesso via API</span>{" "}
                </li>{" "}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Plans;
