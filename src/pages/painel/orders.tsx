import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export function OrderDetails() {
  const { t } = useTranslation();

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 19031839018903</DialogTitle>
        <DialogDescription>{t("orderDetails.details")}</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">
                {t("orderDetails.status")}
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    {t("orderDetails.pending")}
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                {t("orderDetails.customer")}
              </TableCell>
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
              <TableCell className="text-muted-foreground">
                {t("orderDetails.phone")}
              </TableCell>
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
              <TableCell className="text-muted-foreground">
                {t("orderDetails.email")}
              </TableCell>
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
                {t("orderDetails.placed")}
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
              <TableHead>{t("orderDetails.product")}</TableHead>
              <TableHead>{t("orderDetails.quantity")}</TableHead>
              <TableHead>{t("orderDetails.price")}</TableHead>
              <TableHead>{t("orderDetails.subtotal")}</TableHead>
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
            <TableCell colSpan={3}>{t("orderDetails.total")}</TableCell>
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
  const { t } = useTranslation();

  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">
        {t("orderDetails.filters")}:
      </span>
      <Input placeholder={t("orderDetails.orderId")} className="h-8 w-auto" />
      <Input
        placeholder={t("orderDetails.customerName")}
        className="h-8 w-[320px]"
      />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("orderDetails.all")}</SelectItem>
          <SelectItem value="pending">{t("orderDetails.pending")}</SelectItem>
          <SelectItem value="canceled">{t("orderDetails.canceled")}</SelectItem>
          <SelectItem value="processing">
            {t("orderDetails.processing")}
          </SelectItem>
          <SelectItem value="delivering">
            {t("orderDetails.delivering")}
          </SelectItem>
          <SelectItem value="delivered">
            {t("orderDetails.delivered")}
          </SelectItem>
        </SelectContent>
      </Select>

      <Button type="submit" variant="secondary" size="sm">
        <Search className="mr-2 h-4 w-4" />
        {t("orderDetails.filterResults")}
      </Button>

      <Button type="button" variant="outline" size="sm">
        <X className="mr-2 h-4 w-4" />
        {t("orderDetails.clearFilters")}
      </Button>
    </form>
  );
}

function OrderTableRow() {
  const { t } = useTranslation();

  return (
    <TableRow className="">
      <TableCell className="py-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className="h-3 w-3"></Search>
              <span className="sr-only">{t("orderDetails.details")}</span>
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
          <span className="font-medium text-muted-foreground">
            {" "}
            {t("orderDetails.pending")}
          </span>
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
  const { t } = useTranslation();
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
                  <TableHead className="w-[140px]">
                    {t("orderDetails.identifier")}
                  </TableHead>
                  <TableHead className="w-[180px]">
                    {t("orderDetails.placedTime")}
                  </TableHead>
                  <TableHead className="w-[140px]">
                    {t("orderDetails.status")}
                  </TableHead>
                  <TableHead className="">Cliente</TableHead>
                  <TableHead className="w-[140px]">
                    {t("orderDetails.totalPrice")}
                  </TableHead>
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
