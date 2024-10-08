import { ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="font-bold text-2xl tracking-tighter flex items-center gap-1 hover:text-gray-300">
        <ChefHat className="h-7 w-7" />
        Meu Rango
      </h1>
    </Link>
  );
}

export default Logo;
