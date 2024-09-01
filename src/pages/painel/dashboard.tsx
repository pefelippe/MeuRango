import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingCart, AlertTriangle, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

import CardInfo from "../../components/cardInfo";
import { RecentSales } from "../../components/RecentSales";
import { RevenueChart } from "../../components/RevenueChart";
import { PopularProducts } from "../../components/PopularProducts";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();

  return (
    <div className="p-6 space-y-6">
      <Helmet title="Dashboard" />
      <h1 className="text-3xl font-bold">{t("dashboard.title")}</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <CardInfo
          title={t("dashboard.totalRevenue")}
          diff={`+2% ${t("dashboard.diffComparedToLastMonth")}`}
          value="R$ 3.000,00"
          icon={<DollarSign className="h-4 w-4 text-green-500" />}
        />
        <CardInfo
          title={t("dashboard.ordersToday")}
          diff={`+2% ${t("dashboard.diffComparedToLastMonth")}`}
          value="12"
          icon={<ShoppingCart className="h-4 w-4 text-blue-500" />}
        />
        <CardInfo
          title={t("dashboard.canceledOrdersToday")}
          diff={`+2% ${t("dashboard.diffComparedToLastMonth")}`}
          value="3"
          icon={<AlertTriangle className="h-4 w-4 text-red-500" />}
        />
        <CardInfo
          title={t("dashboard.averageOrderValue")}
          diff={`+5% ${t("dashboard.diffComparedToLastMonth")}`}
          value="R$ 250,00"
          icon={<TrendingUp className="h-4 w-4 text-purple-500" />}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <RevenueChart />
        <PopularProducts />
      </div>

      <RecentSales />

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>{t("dashboard.manage")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t("dashboard.manageDescription")}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;
