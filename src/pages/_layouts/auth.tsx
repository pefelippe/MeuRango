import Logo from '@/components/Logo'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="relative  h-full w-full gap-16 grid grid-cols-1 md:grid-cols-2 "> 
      <div className="flex md:flex-col text-start w-full md:min-h-screen justify-between   p-10 px-20
       text-white bg-primary max-md:items-center">
        <Logo/>
        <footer className="text-sm text-gray-300">
          Painel do parceiro  - {new Date().getFullYear()}
        </footer>
      </div>
      <div className=" h-full flex flex-col w-full mx-auto ">
        <Outlet />
      </div>
    </div>
  )
}