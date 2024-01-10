import { Building, ChevronDown, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          Demo Shop
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Demo Account</span>
          <span className="text-xs font-formal text-muted-foreground">
            demoaccount@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to="/store" className="flex items-center ">
          <DropdownMenuItem className=" w-full cursor-pointer">
            <Building /> <span className="px-3  w-full">Perfil da loja</span>
          </DropdownMenuItem>
        </Link>
        <Link to="/" className="flex items-center ">
          <DropdownMenuItem className="text-rose-500 dark:text-rose-400 w-full cursor-pointer">
            <LogOut /> <span className="px-3  w-full">Sair</span>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccountMenu;
