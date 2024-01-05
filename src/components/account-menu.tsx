import { Building, ChevronDown, LogOut } from 'lucide-react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='flex items-center gap-2 select-none'>
          Pizza shop
          <ChevronDown/>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className= "w-56">
        <DropdownMenuLabel className='flex flex-col'>
          <span>Pedro Felippe</span>
          <span className='text-xs font-formal text-muted-foreground'>pedfelippe@gmail.com</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='' >
          <Building/> <span className='px-3'>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className='text-rose-500 dark:text-rose-400' >
          <LogOut/> <span className='px-3'>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AccountMenu