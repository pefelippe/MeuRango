import { useState } from "react";
import { Home, UtensilsCrossedIcon, Menu, X } from "lucide-react";
import AccountMenu from "./account-menu";
import NavLink from "./nav-link";
import { Button } from "@/components/ui/button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="border-b">
      <div className="flex h-20 items-center justify-between px-6">
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/painel/dashboard">
            <Home />
            Inicio
          </NavLink>
          <NavLink to="/painel/orders">
            <UtensilsCrossedIcon />
            Pedidos
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <AccountMenu />
        </div>

        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            <Menu />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg">
            <div className="p-4 flex justify-end">
              <Button variant="ghost" onClick={toggleMenu}>
                <X size={24} />
              </Button>
            </div>
            <nav className="px-4 py-2 space-y-4">
              <NavLink to="/painel/dashboard" onClick={toggleMenu}>
                <Home />
                Inicio
              </NavLink>
              <NavLink to="/painel/orders" onClick={toggleMenu}>
                <UtensilsCrossedIcon />
                Pedidos
              </NavLink>
            </nav>
            <div className="px-4 py-2">
              <AccountMenu />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
