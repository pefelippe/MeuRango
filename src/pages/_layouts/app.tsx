import Header from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className='flex min-h-screen flex-col antialiased '>
      <Header/>
      <div className='p-8 py-4'>
        <Outlet />
      </div>
    </div>
  )
}