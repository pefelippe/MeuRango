import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardInfoProps {
  title: string;
  value: string;
  diff?: string;
  icon?: ReactNode;
  trend?: "up" | "down" | "neutral";
  className?: string;
}

function CardInfo({ title, value, diff, icon, trend = "neutral", className }: CardInfoProps) {
  return (
    <Card className={cn("w-full transition-all hover:shadow-lg", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && <div className="text-primary">{icon}</div>}
      </CardHeader>
      <CardContent className="pt-4 pb-6">
        <div className="text-4xl font-bold tracking-tight">{value}</div>
        {diff && (
          <p className={cn(
            "mt-2 text-sm font-medium flex items-center",
            trend === "up" && "text-green-600",
            trend === "down" && "text-red-600",
            trend === "neutral" && "text-muted-foreground"
          )}>
            {trend === "up" && <span className="mr-1">↑</span>}
            {trend === "down" && <span className="mr-1">↓</span>}
            {diff}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default CardInfo;
