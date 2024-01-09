import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

const signInForm = z.object({
  email: z.string().email()
})

type SignInForm = z.infer<typeof signInForm>

export function Login() {

  const {register, handleSubmit, formState:{isSubmitting} } = useForm()

  async function handleSignIn(data : SignInForm) {
      try {
        await new Promise (res => setTimeout(res, 1000))
        toast.success("Enviamos um link de autenticação para seu e-mail", {
          action: {
            label: "Reenviar",
            onClick: () => handleSignIn(data)
          }
        })
      } catch (err) {
        toast.error("Credenciais invalidas.")
        }
      }
  return (
    <>
      <Helmet title="Login"/>
      <div className=" flex-col
       flex justify-center items-start w-full min-h-screen gap-2 ">

        <form onSubmit={handleSubmit(handleSignIn)} 
          className="flex flex-col justify-start text-start items-start w-full mx-auto">

          <div className='flex flex-col justify-start text-start items-start space-y-6 w-full max-w-xl'>
            <h1 className='text-7xl font-bold tracking-tight text-primary'>Acesse seu painel.</h1>
            <p className='text-2xl font-thin'>Digite abaixo o seu email de cadastro:</p>

            <div className='flex w-full flex-col  gap-5 '>
              <Input className="text-md rounded  py-7
              text-gray-950 w-full focus-visible:ring-black" 
              id="email" {...register('email')} placeholder='Escreva aqui seu email'/>
 
              <Button 
                disabled={isSubmitting} 
                className='text-md  py-7 mx-auto font-medium px-8 w-full hover:underline' 
                >
                <Link to="/dashboard" className=''>
                  Acessar seu painel
                </Link>
              </Button>        
            </div>
          </div>
        </form>
      </div>
    </>
  )
}