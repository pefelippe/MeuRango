import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-0">
        <CardTitle className="text-3xl font-bold tracking-tight">
          R$ 1245,31{" "}
        </CardTitle>
        <DollarSign className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-0">
        <span className="text-lg ">Receita Total</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+2%</span> em
          relacao ao mes passado
        </p>
      </CardContent>
    </Card>
  );
}

export default MonthRevenueCard;
