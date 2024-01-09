import { Separator } from "@/components/ui/separator"
import { Home, Pizza, UtensilsCrossedIcon } from "lucide-react"

import AccountMenu from "./account-menu"
import NavLink from "./nav-link"

function Header() {
  return (
    <div className='border-b'>
      <div className='flex h-16 items-center gap-4 px-6'>
        <Pizza className="h-6 w-6 " />
        <Separator orientation="vertical"  />
        <nav className="flex items-center space-x-4 lg:space-x-6 mr-auto" >
          <NavLink to="/"><Home />Inicio</NavLink>
          <NavLink to="/orders"><UtensilsCrossedIcon />Pedidos</NavLink>
        </nav>

        <AccountMenu/>

      </div>
    </div>
  )
}

export default Header