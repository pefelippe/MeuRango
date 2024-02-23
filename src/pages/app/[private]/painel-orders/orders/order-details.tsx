import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";


export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 19031839018903</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-slate-400'></span>
                  <span className='font-medium text-muted-foreground'>Pendentes</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                <div className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-slate-400'></span>
                  <span className='font-medium text-muted-foreground'>Pedro Felippe Domingos Fernands</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                <div className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-slate-400'></span>
                  <span className='font-medium text-muted-foreground'>(75) 99999-9994</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                <div className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-slate-400'></span>
                  <span className='font-medium text-muted-foreground'>pedfelippe@gmail.com</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Realizado há</TableCell>
              <TableCell className="flex justify-end">
                <div className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-slate-400'></span>
                  <span className='font-medium text-muted-foreground'>15 minutos</span>
                </div>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead>Qtd.</TableHead>
              <TableHead>Preco</TableHead>
              <TableHead>Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Pizza Peperroni - G</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$69,99</TableCell>
              <TableCell className="text-right">R$139,80</TableCell>
            </TableRow>
          </TableBody>

          <TableBody>
            <TableRow>
              <TableCell>Pizza Mussarela - G</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$69,99</TableCell>
              <TableCell className="text-right">R$139,80</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell className="txt-right font-medium">
              R$259,60
            </TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
