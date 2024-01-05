import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { TableCell, TableRow } from '@/components/ui/table';
import { ArrowRight, Search, X } from 'lucide-react';
import { OrderDetails } from './order-details';

function OrderTableRow() {
  return (
    <TableRow >
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className='h-3 w-3'></Search>
              <span className='sr-only'>Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <OrderDetails/>
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">id0101101010</TableCell>
      <TableCell className="text-muted-foreground"> 15 minutos</TableCell>
      <TableCell className="">
        <div className='flex items-center gap-2'>
          <span className='h-2 w-2 rounded-full bg-slate-400'></span>
          <span className='font-medium text-muted-foreground'>Pendentes</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Pedro Felippe Domingos Fernandes</TableCell>
      <TableCell className="font-medium">R$ 190,00</TableCell>
      <TableCell className="">
        <Button variant="outline" size="sm">
          <X className='h-5 w-5 mr-2'/>Cancelar
        </Button>
      </TableCell>
      <TableCell className="">
      <Button variant="ghost" size="sm">
          <ArrowRight className='h-5 w-5 mr-2'/>Aprovar
        </Button>
      </TableCell>
    </TableRow>
    )

}

export default OrderTableRow