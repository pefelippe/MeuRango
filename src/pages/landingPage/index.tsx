import { Helmet } from "react-helmet-async"
import Header from "./Header"
import { SignUp } from "./Sign-up"

function LandingPage() {
  return (
    <div className="">
      <Helmet title="Inicio"/>
      <Header/>

      <div className="min-h-screen text-slate-950 max-md:px-6  items-center dark:bg-muted
        justify-center mx-auto max-w-6xl h-full  gap-16 grid grid-cols-2 ">

        <div className="w-full flex flex-col  gap-6 justify-center ">
          <p className="uppercase tracking-wide font-semibold text-lg">totalmente grátis</p>
          <h1 className="text-7xl font-extrabold pb-4">Potencialize seu delivery.</h1>
          <h3 className="text-xl font-normal max-w-md ">Software de ponto de venda para todos os tipos de negócios gastronômicos. </h3>

          <div>

          </div>
        </div>
        <SignUp/>
      </div>
    </div>
  )
}

export default LandingPage