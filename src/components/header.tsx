import { Separator } from "@/components/ui/separator";
import { Home, UtensilsCrossedIcon } from "lucide-react";

import AccountMenu from "./account-menu";
import Logo from "./Logo";
import NavLink from "./nav-link";

function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-4 px-6">
        <Logo />
        <Separator orientation="vertical" className="mx-3" />
        <nav className="flex items-center space-x-4 lg:space-x-6 mr-auto">
          <NavLink to="/painel/dashboard">
            <Home />
            Inicio
          </NavLink>
          <NavLink to="/painel/orders">
            <UtensilsCrossedIcon />
            Pedidos
          </NavLink>
        </nav>

        <AccountMenu />
      </div>
    </div>
  );
}

export default Header;
