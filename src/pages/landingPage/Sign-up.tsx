import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
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
      <div className="w-[500px]  flex-col border p-8 rounded-xl
       flex justify-center items-start  gap-2 ">
        <div className=" flex flex-col justify-start gap-8 mx-auto">
          <div className='flex flex-col gap-4 text-start'>
            <h1 className='text-5xl font-bold tracking-tight'>Criar conta grátis</h1>
            <p className='text-2xl font-thin'>Seja um parceiro e comece suas vendas!</p>
          </div>

          <form className='space-y-8' onSubmit={handleSubmit(handlesignUp)}>
            <div className='space-y-2'>
                <Label htmlFor="email" className="  text-lg">Seu e-mail:</Label>
                <Input id="email" className="p-6" {...register('email')}/>
            </div>
            <div className='space-y-2'>
                <Label htmlFor="restaurantName" className="  text-lg">Nome do Estabelecimento:</Label>
                <Input id="restaurantName" className="p-6" type="text" {...register('restaurantName')}/>
            </div>

            <Button disabled={isSubmitting} className='w-full p-6 text-lg' type="submit">Finalizar Cadastro</Button>

            <p className='text-sm leading-relaxed px-6 text-center text-muted-foreground'>Ao continuar, você concorda com nossos termos de serviço e privacidade.</p>
          </form>
        </div>
      </div>
    
    </>
  )
}