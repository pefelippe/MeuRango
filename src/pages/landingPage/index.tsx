import { Helmet } from "react-helmet-async"
import Header from "./Header"
import { SignUp } from "./Sign-up"

function LandingPage() {
  return (
    <div>
      <Helmet title="Inicio"/>
      <Header/>

      <div className="min-h-screen text-slate-950 items-center justify-between mx-auto max-w-7xl h-full flex gap-20">
        <div className="w-full flex flex-col max-w-xl gap-6">
          <h1 className="text-7xl font-bold tracking-normal leading-[1.2]">Potencialize e automatize seu delivery.</h1>
          <h3 className="text-xl font-thin">Oferecer um atendimento rápido, prático e lucrativo com a Zappi, gerenciando pedidos, cardápio digital e muito mais. </h3>
        </div>
        <SignUp/>
      </div>
    </div>
  )
}

export default LandingPage