import { Link, Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="relative flex h-full w-full">
      <div className="flex flex-col text-start w-full min-h-screen justify-between   p-10 px-20
       text-muted-foreground bg-primary">
        <Link to="/" className=" font-semibold text-white tracking-tight text-3xl">Zappi</Link>
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