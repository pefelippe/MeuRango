import { Card, CardContent, CardHeader } from "@/components/ui/card";

function CardInfo({
  title,
  diff,
  value,
  icon,
}: {
  title: string;
  value: string;
  diff: string;
  icon: any;
}) {
  return (
    <Card className="h-[140px] ">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-1">
        <span className="text-base font-light">{title}</span>
        {icon}
      </CardHeader>
      <CardContent className="space-y-1 ">
        <span className="text-3xl font-bold tracking-tighter">{value}</span>
        <p className="text-xs text-muted-foreground">{diff}</p>
      </CardContent>
    </Card>
  );
}

export default CardInfo;
