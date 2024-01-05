import { ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";

export interface PaginationProps {
  pageIndex: number;
  totalCount: number;
  perPage: number;
}

function Pagination({pageIndex, totalCount, perPage}: PaginationProps) {

  const pages = Math.ceil(totalCount / perPage) || 1

  return (
   <div className="flex items-center justify-between">
    <span>Total de {totalCount} items(s)</span>

    <div className="flex items-center gap-6 lg:gap-8">
      <div className="flex text-sm font-medium">
        Página de {pageIndex + 1} de {pages}
      </div>

      <div className="flex items-center gap-2">
        <Button variant='outline' className='h-8 w-8 p-0'>
          <ChevronsRight className='h-4 w-4' />
          <span className="sr-only">Primeira página</span>
        </Button>

        <Button variant='outline' className='h-8 w-8 p-0'>
          <ChevronRight className='h-4 w-4' />
          <span className="sr-only">Proxima Página</span>
        </Button>

        <Button variant='outline' className='h-8 w-8 p-0'>
          <ChevronsLeft className='h-4 w-4' />
          <span className="sr-only">Página Anterior</span>
        </Button>

        <Button variant='outline' className='h-8 w-8 p-0'>
          <ChevronsLeft className='h-4 w-4' />
          <span className="sr-only">últma página</span>
        </Button>
      </div>
    </div>
   </div>
  )
}
export default Pagination