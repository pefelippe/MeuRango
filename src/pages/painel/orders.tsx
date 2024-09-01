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
import { useState, useMemo, useCallback } from 'react';

// Mock data
const mockOrders = [
  {
    id: 'ORD001',
    placedTime: '15 minutos',
    status: 'pending',
    customer: 'Pedro Felippe Domingos Fernandes',
    totalPrice: 190.00,
  },
  {
    id: 'ORD002',
    placedTime: '1 hora',
    status: 'processing',
    customer: 'Maria Silva',
    totalPrice: 150.50,
  },
  {
    id: 'ORD003',
    placedTime: '30 minutos',
    status: 'delivered',
    customer: 'João Santos',
    totalPrice: 85.75,
  },
  {
    id: 'ORD004',
    placedTime: '2 horas',
    status: 'canceled',
    customer: 'Ana Oliveira',
    totalPrice: 120.00,
  },
  {
    id: 'ORD005',
    placedTime: '45 minutos',
    status: 'delivering',
    customer: 'Carlos Ferreira',
    totalPrice: 200.25,
  },
];

// Generate 35 more mock orders
for (let i = 6; i <= 40; i++) {
  const statuses = ['pending', 'processing', 'delivering', 'delivered', 'canceled'];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const randomPrice = parseFloat((Math.random() * 300 + 50).toFixed(2));
  const randomMinutes = Math.floor(Math.random() * 180) + 1;
  
  mockOrders.push({
    id: `ORD${i.toString().padStart(3, '0')}`,
    placedTime: `${randomMinutes} ${randomMinutes === 1 ? 'minuto' : 'minutos'}`,
    status: randomStatus,
    customer: `Cliente ${i}`,
    totalPrice: randomPrice,
  });
}

export function OrderDetails() {
  const { t } = useTranslation();

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{t("orderDetails.order")}: 19031839018903</DialogTitle>
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
  const { t } = useTranslation();

  return (
    <TableRow className="relative flex justify-between w-full text-sm items-center h-14">
      <span className="font-medium px-1">Pedro Felippe</span>
      <TableCell className="font-light text-lg">+R$ 190,00</TableCell>
    </TableRow>
  );
}

function OrderTableFilters({ onFilterChange }: { onFilterChange: (filterType: string, value: string) => void }) {
  const { t } = useTranslation();

  return (
    <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
      <span className="text-sm font-semibold">
        {t("orderDetails.filters")}:
      </span>
      <Input 
        placeholder={t("orderDetails.orderId")} 
        className="h-8 w-auto" 
        onChange={(e) => onFilterChange('orderId', e.target.value)}
      />
      <Input
        placeholder={t("orderDetails.customerName")}
        className="h-8 w-[320px]"
        onChange={(e) => onFilterChange('customerName', e.target.value)}
      />
      <Select defaultValue="all" onValueChange={(value) => onFilterChange('status', value)}>
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{t("orderDetails.all")}</SelectItem>
          <SelectItem value="pending">{t("orderDetails.pending")}</SelectItem>
          <SelectItem value="canceled">{t("orderDetails.canceled")}</SelectItem>
          <SelectItem value="processing">{t("orderDetails.processing")}</SelectItem>
          <SelectItem value="delivering">{t("orderDetails.delivering")}</SelectItem>
          <SelectItem value="delivered">{t("orderDetails.delivered")}</SelectItem>
        </SelectContent>
      </Select>

      <Button type="button" variant="secondary" size="sm" onClick={() => onFilterChange('apply', '')}>
        <Search className="mr-2 h-4 w-4" />
        {t("orderDetails.filterResults")}
      </Button>

      <Button type="button" variant="outline" size="sm" onClick={() => onFilterChange('clear', '')}>
        <X className="mr-2 h-4 w-4" />
        {t("orderDetails.clearFilters")}
      </Button>
    </form>
  );
}

function OrderTableRow({ order }: { order: any }) {
  const { t } = useTranslation();

  return (
    <TableRow>
      <TableCell className="py-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className="h-3 w-3"></Search>
              <span className="sr-only">{t("orderDetails.details")}</span>
            </Button>
          </DialogTrigger>
          <OrderDetails order={order} />
        </Dialog>
      </TableCell>
      <TableCell className="py-2 font-mono text-xs font-medium">{order.id}</TableCell>
      <TableCell className="py-2 text-muted-foreground">{order.placedTime}</TableCell>
      <TableCell className="py-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span className="font-medium text-muted-foreground">
            {t(`orderDetails.${order.status}`)}
          </span>
        </div>
      </TableCell>
      <TableCell className="font-medium py-2">{order.customer}</TableCell>
      <TableCell className="font-medium py-2">R$ {order.totalPrice.toFixed(2)}</TableCell>
      <TableCell className="py-2">
        <Button variant="outline" size="sm">
          <X className="h-5 w-5 mr-2" />
          {t("orderManagement.cancel")}
        </Button>
      </TableCell>
      <TableCell className="py-2">
        <Button variant="ghost" size="sm">
          <ArrowRight className="h-5 w-5 mr-2" />
          {t("orderManagement.approve")}
        </Button>
      </TableCell>
    </TableRow>
  );
}

function Orders() {
  const { t } = useTranslation();
  const [filters, setFilters] = useState({ orderId: '', customerName: '', status: 'all' });
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const handleFilterChange = useCallback((filterType: string, value: string) => {
    if (filterType === 'clear') {
      setFilters({ orderId: '', customerName: '', status: 'all' });
    } else if (filterType === 'apply') {
      // The filters are already applied as the user types/selects, so we don't need to do anything here
    } else {
      setFilters(prev => ({ ...prev, [filterType]: value }));
    }
    setCurrentPage(1); // Reset to first page when filters change
  }, []);

  const filteredOrders = useMemo(() => {
    return mockOrders.filter(order => 
      (filters.orderId === '' || order.id.toLowerCase().includes(filters.orderId.toLowerCase())) &&
      (filters.customerName === '' || order.customer.toLowerCase().includes(filters.customerName.toLowerCase())) &&
      (filters.status === 'all' || order.status === filters.status)
    );
  }, [filters]);

  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * ordersPerPage;
    return filteredOrders.slice(startIndex, startIndex + ordersPerPage);
  }, [filteredOrders, currentPage]);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const handlePageChange = useCallback((newPage: number) => {
    setCurrentPage(newPage + 1); // Add 1 because Pagination component is zero-indexed
  }, []);

  return (
    <div>
      <Helmet title={t("orderManagement.title")} />
      <div className="flex flex-col gap-3">
        <div className="space-y-2.5">
          <OrderTableFilters onFilterChange={handleFilterChange} />

          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">{t("orderDetails.identifier")}</TableHead>
                  <TableHead className="w-[180px]">{t("orderDetails.placedTime")}</TableHead>
                  <TableHead className="w-[140px]">{t("orderDetails.status")}</TableHead>
                  <TableHead className="">{t("orderManagement.customer")}</TableHead>
                  <TableHead className="w-[140px]">{t("orderDetails.totalPrice")}</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {paginatedOrders.map((order) => (
                  <OrderTableRow key={order.id} order={order} />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <Pagination 
          pageIndex={currentPage - 1} // Subtract 1 because Pagination component is zero-indexed
          totalCount={filteredOrders.length}
          perPage={ordersPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Orders;
