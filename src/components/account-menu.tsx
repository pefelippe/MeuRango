import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu'

function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='flex items-center gap-2 select-none'>
          Pizza shop
          <ChevronDown/>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default AccountMenu