import NavLink from "@/components/nav-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TableBody } from "@/components/ui/table";
import { OrderTableRecents } from "@/pages/painel/orders";

export function RecentSales() {
  return (
    <Card className="col-span-3 w-full  h-full ">
      <CardHeader className="flex-row items-center justify-between pb-2">
        <div className="space-y-0 w-full">
          <CardTitle className="flex items-center justify-between w-full  ">
            <p>Últimas vendas</p>
            <NavLink to="/painel/orders" className="text-sm underline">
              Ver totas as vendas
            </NavLink>
          </CardTitle>

          <CardDescription className="font-light pb-1">
            Você fez xxx vendas esse período.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="w-full relative flex">
        <TableBody className="w-full h-full flex flex-col items-start ">
          {Array.from({ length: 7 }).map((_, i) => {
            return <OrderTableRecents key={i} />;
          })}
        </TableBody>
      </CardContent>
    </Card>
  );
}
