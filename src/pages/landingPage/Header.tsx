import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { LogIn } from "lucide-react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className='h-20 absolute top-0 w-screen items-center flex justify-center border-b
      text-blue-700 max-md:px-6'>
      <div className="flex w-full max-w-6xl justify-between items-center">
        <Logo />
        <div className="flex gap-3">
        <Button
          variant={"outline"}
          className='text-lg   font-medium border-blue-700 hover:underline' 
          >
          <Link to="/login" className='flex gap-1 items-center justify-center'>
            Entrar <LogIn/>
          </Link>
        </Button> 
      
        <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header