import { ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="font-bold text-3xl tracking-tighter flex items-center gap-1">
        <ChefHat className="h-8 w-8" /> Zappi
      </h1>
    </Link>
  );
}

export default Logo;
