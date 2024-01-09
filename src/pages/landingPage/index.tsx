import { Button } from "@/components/ui/button"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import Header from "./Header"
import { SignUp } from "./Sign-up"

function LandingPage() {
  return (
    <div className="">
      <Helmet title="Inicio"/>
      <Header/>

      <div className="min-h-screen text-slate-950 max-md:px-6  items-center dark:text-white
        justify-center mx-auto max-w-6xl h-full  gap-16 grid grid-cols-2 ">

        <div className="w-full flex flex-col  gap-6 justify-center ">
          <p className="uppercase tracking-wide font-semibold text-lg dark:text-gray-300">totalmente grátis</p>
          <h1 className="text-7xl font-extrabold ">Potencialize seu delivery.</h1>
          <h3 className="text-xl font-normal max-w-md dark:text-gray-300 py-3">Software de ponto de venda para todos os tipos de negócios gastronômicos. </h3>
          <Button
            variant={"destructive"}
            className='text-lg  p-7 w-full max-w-md font-medium border-blue-700 hover:underline' 
            >
            <Link to="/dashboard" className='flex  items-center '>
              Ver Demonstração
            </Link>
          </Button> 
          <div>

          </div>
        </div>
        <SignUp/>
      </div>
    </div>
  )
}

export default LandingPage