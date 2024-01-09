import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className='h-20 fixed w-screen items-center border-b flex justify-center bg-white'>
      <div className="flex w-full max-w-7xl justify-between items-center">
        <h1 className="font-bold text-2xl">zappi</h1>
        <div className="flex gap-3">
        <Button
            className='text-md py-6 w-[150px] font-medium   hover:underline' 
            >
            <Link to="/dashboard" className=''>
              Acessar seu painel
            </Link>
          </Button> 
          <Button
            variant={"destructive"}
            className='text-md py-6 font-medium  w-[150px]  hover:underline' 
            >
            <Link to="/dashboard" className=''>
              Visite a  Demo
            </Link>
          </Button> 
        </div>
      </div>
    </header>
  )
}

export default Header