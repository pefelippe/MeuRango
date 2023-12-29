import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Helmet } from 'react-helmet-async';

export function SignIn() {
  return (
    <>
      <Helmet title="Login ShopCart"/>
      <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>Acessar painel</h1>
            <p className='text-sm text-muted-foreground'>Acompanhe suas vendas</p>
          </div>

          <form className='space-y-4'>
            <div className='space-y-2'>
               <Label htmlfor="email">Seu e-mail</Label>
              <Input id="email"/>
            </div>
            <Button className='w-full' type="submit">Acessar Painel</Button>
          </form>
        </div>
      </div>
    
    </>
  )
}