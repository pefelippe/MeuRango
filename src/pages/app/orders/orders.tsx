import Pagination from "@/components/pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Helmet } from "react-helmet-async";

import OrderTableFilters from "./order-table-filters";
import OrderTableRow from "./order-table-row";

function Orders() {
  return (
    <div>
      <Helmet title="Gestão de Pedidos" />
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tighter">Pedidos</h1>
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
                {Array.from({ length: 9 }).map((_, i) => {
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
