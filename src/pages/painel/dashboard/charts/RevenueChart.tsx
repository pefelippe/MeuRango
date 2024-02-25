import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import colors from "tailwindcss/colors";

const data = [
  { date: "10/12", revenue: 1200 },
  { date: "11/12", revenue: 800 },
  { date: "12/12", revenue: 900 },
  { date: "13/12", revenue: 400 },
  { date: "14/12", revenue: 2300 },
  { date: "15/12", revenue: 800 },
  { date: "16/12", revenue: 640 },
];

export function RevenueChart() {
  return (
    <Card className="relative col-span-6 w-full h-full">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="0">
          <CardTitle className="">Receita</CardTitle>
          <CardDescription>
            Acompanhe sua receita na última semana
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              className=""
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <Line
              stroke={colors.violet[500]}
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
            />
            <CartesianGrid vertical={false} className="stroke-muted " />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
