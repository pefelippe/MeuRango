
import { Helmet } from "react-helmet-async"
import DayOrdersAmountCard from "./DayOrdersAmountCard"
import MonthOrdersCancelledCard from "./MonthCancelledOrdersCard"
import MonthOrdersAmountCard from "./MonthOrdersAmountCard"
import MonthRevenueCard from "./MonthRevenueCard"

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
      </div>
    </div>
  )
}

export default Dashboard