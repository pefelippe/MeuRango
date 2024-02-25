import { TableCell, TableRow } from "@/components/ui/table";

function OrderTableRecents() {
  return (
    <TableRow className="relative flex justify-between w-full text-sm items-center h-14">
      <span className="font-medium px-1">Pedro Felippe</span>
      {/* <TableCell className="text-muted-foreground">há 15 minutos</TableCell> */}
      <TableCell className="font-light text-lg">+R$ 190,00</TableCell>
    </TableRow>
  );
}

export default OrderTableRecents;
