import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideDelete } from "lucide-react";

function DayOrdersAmountCard() {
  return (
    <Card className="h-[140px] ">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-0">
        <span className="text-3xl font-bold tracking-tight">24</span>
        <LucideDelete className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-0">
        <span className="text-lg">Pedidos Cancelados</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-6%</span> em
          relacao ao dia anterior
        </p>
      </CardContent>
    </Card>
  );
}

export default DayOrdersAmountCard;
