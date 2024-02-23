import { Helmet } from "react-helmet-async"

import DayOrdersAmountCard from "./cards/DayOrdersAmountCard"
import MonthOrdersCancelledCard from "./cards/MonthCancelledOrdersCard"
import MonthOrdersAmountCard from "./cards/MonthOrdersAmountCard"
import MonthRevenueCard from "./cards/MonthRevenueCard"
import { PopularProducts } from "./charts/PopularProducts"
import { RevenueChart } from "./charts/RevenueChart"

function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthOrdersCancelledCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart/>
          <PopularProducts />
        </div>
      </div>
    </div>
  )
}

export default Dashboard