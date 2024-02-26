import { Card, CardTitle } from "@/components/ui/card";
import { DollarSign, LucideDelete, MoveRight, Store } from "lucide-react";
import { Helmet } from "react-helmet-async";

import CardInfo from "../../components/cardInfo";
import { RecentSales } from "../../components/RecentSales";
import { RevenueChart } from "../../components/RevenueChart";

function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4  w-full">
        <div className="relative flex max-lg:flex-col gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="relative w-full h-full">
              <RevenueChart />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <CardInfo
                title="Receita total no período"
                diff="+2% em relacao ao mes passado"
                value="3.000,00"
                icon=<DollarSign />
              />
              <CardInfo
                title="Pedidos (hoje)"
                diff="+2% em relacao ao mes passado"
                value="12"
                icon={<DollarSign />}
              />
              <CardInfo
                title="Pedidos cancelados (hoje)"
                diff="+2% em relacao ao mes passado"
                value="3"
                icon=<LucideDelete />
              />
            </div>
          </div>

          <div className="relative w-full lg:max-w-sm gap-4 flex flex-col h-full">
            <Card className="h-[140px] rounded-xl flex w-full bg-gray-900 p-6 text-[#f8f8f8] flex-col items-center gap-2 justify-center">
              <CardTitle className="text-xl flex items-center gap-3 mx-auto">
                <Store className="h-8 w-8" />
                <p className="">Gerencie sua loja virtual</p>
                <MoveRight className="h-8 w-8" />
              </CardTitle>
            </Card>

            <RecentSales />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
