import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// const signUpForm = z.object({
//   email: z.string().email(),
//   restaurantName: z.string(),
//   managerName: z.string(),
//   phone: z.string(),
// })

// type signUpForm = z.infer<typeof signUpForm>

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
      <Card className=" flex-col border-2 p-8 rounded-md shadow  h-fit
       flex justify-center items-start  gap-2 ">
        <div className=" flex flex-col justify-start gap-5 mx-auto">
          <div className='flex flex-col gap-3 text-start'>
            <h1 className='text-3xl font-bold tracking-tight'>Criar conta grátis</h1>
            <p className='text-lg  font-thin'>Seja um parceiro e comece suas vendas!</p>
          </div>

          <form className='space-y-8' onSubmit={handleSubmit(handlesignUp)}>
          <div className='space-y-2'>
                <Label htmlFor="name" className="  text-lg">Seu nome:</Label>
                <Input id="name" className="p-6" {...register('name')}/>
            </div>
            <div className='space-y-2'>
                <Label htmlFor="email" className="  text-lg">Seu e-mail:</Label>
                <Input id="email" className="p-6" {...register('email')}/>
            </div>
            <div className='space-y-2'>
                <Label htmlFor="restaurantName" className="  text-lg">Nome do Estabelecimento:</Label>
                <Input id="restaurantName" className="p-6" type="text" {...register('restaurantName')}/>
            </div>

            <Button disabled={isSubmitting} className='w-full p-6 text-lg' type="submit">Finalizar Cadastro</Button>

            <p className='text-sm leading-relaxed  text-start text-muted-foreground'>Ao continuar, você concorda com nossos termos de serviço e privacidade.</p>
          </form>
        </div>
      </Card>
    
    </>
  )
}