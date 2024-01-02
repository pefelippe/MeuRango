import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

const signUpForm = z.object({
  email: z.string().email(),
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
})

type signUpForm = z.infer<typeof signUpForm>

export function SignUp() {

  const {register, handleSubmit, formState:{isSubmitting} } = useForm()

  const navigate = useNavigate()

  async function handlesignUp() {
      try {
        await new Promise (res => setTimeout(res, 1000))
        toast.success("Restaurante cadastrado com sucesso", {
          action: {
            label: "Login",
            onClick: () => navigate('/sign-in')
          }
        })
      } catch (err) {
        toast.error("Erro ao criar restaurante. ")
        }
      }
  return (
    <>
      <Helmet title="Cadastro"/>
      <div className="p-8">
        <Button asChild variant="ghost" className='absolute right-8 top-8'>
            <Link to="/login" className=''>
                Fazer Login
            </Link>
          </Button>
        <div className="w-[350px] flex flex-col justify-start gap-4">
          <div className='flex flex-col gap-1 text-start'>
            <h1 className='text-2xl font-semibold tracking-tight'>Criar conta grátis</h1>
            <p className='text-sm text-muted-foreground'>Seja um parceiro e comece suas vendas!</p>
          </div>

          <form className='space-y-4' onSubmit={handleSubmit(handlesignUp)}>
            <div className='space-y-2'>
                <Label htmlFor="email">Seu e-mail:</Label>
                <Input id="email"  {...register('email')}/>
            </div>
            <div className='space-y-2'>
                <Label htmlFor="restaurantName">Nome do Estabelecimento:</Label>
                <Input id="restaurantName" type="text" {...register('restaurantName')}/>
            </div>
            <div className='space-y-2'>
                <Label htmlFor="managerName">Seu e-mail:</Label>
                <Input id="managerName" type="text" {...register('managerName')}/>
            </div>
            <div className='space-y-2'>
                <Label htmlFor="phone">Celular para contato:</Label>
                <Input id="phone" {...register('phone')}/>
            </div>

            <Button disabled={isSubmitting} className='w-full' type="submit">Finalizar Cadastro</Button>

            <p className='text-sm leading-relaxed px-6 text-center text-muted-foreground'>Ao continuar, você concorda com nossos termos de serviço e privacidade.</p>
          </form>
        </div>
      </div>
    
    </>
  )
}