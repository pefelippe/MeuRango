import { Building, ChevronDown, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthGoogleContext";
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
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          {user?.displayName}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>{user?.displayName}</span>
          <span className="text-xs font-formal text-muted-foreground">
            {user?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to="/store" className="flex items-center ">
          <DropdownMenuItem className=" w-full cursor-pointer">
            <Building /> <span className="px-3  w-full">Perfil da loja</span>
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem
          className="text-rose-500 dark:text-rose-400 w-full cursor-pointer"
          onClick={() => {
            logOut();
            navigate("/painel/login");
          }}
        >
          <LogOut /> <span className="px-3  w-full">Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccountMenu;
