import { Link, Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="relative flex h-full w-full">
      <div className="flex flex-col text-start w-fit min-h-screen justify-between  max-w-xs p-10 px-20
       text-muted-foreground bg-primary">
        <Link to="/" className=" font-semibold text-white tracking-tight text-3xl">Zappi</Link>
        <footer className="text-sm text-gray-300">
          Painel do parceiro  - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="w-full h-full flex flex-col max-w-5xl mx-auto ">
        <Outlet />
      </div>
    </div>
  )
}