import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 19031839018903</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pendentes
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pedro Felippe Domingos Fernands
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    (75) 99999-9994
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    pedfelippe@gmail.com
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    15 minutos
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead>Qtd.</TableHead>
              <TableHead>Preco</TableHead>
              <TableHead>Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Pizza Peperroni - G</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$69,99</TableCell>
              <TableCell className="text-right">R$139,80</TableCell>
            </TableRow>
          </TableBody>

          <TableBody>
            <TableRow>
              <TableCell>Pizza Mussarela - G</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$69,99</TableCell>
              <TableCell className="text-right">R$139,80</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell className="txt-right font-medium">R$259,60</TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}

export function OrderTableRecents() {
  return (
    <TableRow className="relative flex justify-between w-full text-sm items-center h-14">
      <span className="font-medium px-1">Pedro Felippe</span>
      {/* <TableCell className="text-muted-foreground">há 15 minutos</TableCell> */}
      <TableCell className="font-light text-lg">+R$ 190,00</TableCell>
    </TableRow>
  );
}

function OrderTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="Id do pedido" className="h-8 w-auto" />
      <Input placeholder="Nome do Cliente" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="sm">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button type="button" variant="outline" size="sm">
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  );
}

function OrderTableRow() {
  return (
    <TableRow className="">
      <TableCell className="py-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className="h-3 w-3"></Search>
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>

      <TableCell className=" py-2 font-mono text-xs font-medium">
        id0101101010
      </TableCell>
      <TableCell className="py-2 text-muted-foreground"> 15 minutos</TableCell>
      <TableCell className="py-2 ">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span className="font-medium text-muted-foreground">Pendentes</span>
        </div>
      </TableCell>
      <TableCell className="font-medium py-2">
        Pedro Felippe Domingos Fernandes
      </TableCell>
      <TableCell className="font-medium py-2">R$ 190,00</TableCell>
      <TableCell className="py-2 ">
        <Button variant="outline" size="sm">
          <X className="h-5 w-5 mr-2" />
          Cancelar
        </Button>
      </TableCell>
      <TableCell className="py-2">
        <Button variant="ghost" size="sm">
          <ArrowRight className="h-5 w-5 mr-2" />
          Aprovar
        </Button>
      </TableCell>
    </TableRow>
  );
}

function Orders() {
  return (
    <div>
      <Helmet title="Gestão de Pedidos" />
      <div className="flex flex-col gap-3">
        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificado</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead className="">Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {Array.from({ length: 11 }).map((_, i) => {
                  return <OrderTableRow key={i} />;
                })}
              </TableBody>
            </Table>
          </div>
        </div>
        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </div>
    </div>
  );
}

export default Orders;
