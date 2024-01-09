import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className='h-20 absolute top-0 w-screen items-center flex justify-center  text-blue-700 bg-white dark:bg-muted-foreground max-md:px-6'>
      <div className="flex w-full max-w-6xl justify-between items-center">
        <Logo />
        <div className="flex gap-3">
        <Button
          variant={"outline"}
          className='text-lg  p-6  font-medium border-blue-700 hover:underline' 
          >
          <Link to="/login" className='flex gap-1 items-center justify-center'>
            Entrar <LogIn/>
          </Link>
        </Button> 
      
          <Button
            variant={"destructive"}
            className='text-lg  p-6  font-medium border-blue-700 hover:underline' 
            >
            <Link to="/dashboard" className='flex gap-2 items-center'>
              Demonstração
            </Link>
          </Button> 
        </div>
      </div>
    </header>
  )
}

export default Header