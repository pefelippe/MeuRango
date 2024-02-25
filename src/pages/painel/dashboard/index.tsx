import { Helmet } from "react-helmet-async";

import CardCreateStore from "./cards/CardManageStore";
import DayOrdersAmountCard from "./cards/DayOrdersAmountCard";
import MonthOrdersAmountCard from "./cards/MonthOrdersAmountCard";
import MonthRevenueCard from "./cards/MonthRevenueCard";
import { RecentSales } from "./charts/RecentSales";
import { RevenueChart } from "./charts/RevenueChart";

function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4  w-full">
        <h1 className="text-2xl font-bold tracking-tight">Inicio</h1>

        <div className="relative flex max-lg:flex-col gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="grid md:grid-cols-3 gap-4">
              <MonthRevenueCard />
              <MonthOrdersAmountCard />
              <DayOrdersAmountCard />
            </div>
            <div className="relative w-full h-full">
              <RevenueChart />
            </div>
          </div>

          <div className="relative w-full lg:max-w-sm gap-4 flex flex-col h-full">
            <CardCreateStore />
            <RecentSales />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
