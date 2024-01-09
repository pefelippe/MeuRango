import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// const signUpForm = z.object({
//   email: z.string().email(),
//   restaurantName: z.string(),
//   managerName: z.string(),
//   phone: z.string(),
// })

// type signUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const navigate = useNavigate();

  async function handlesignUp() {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Restaurante cadastrado com sucesso", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch (err) {
      toast.error("Erro ao criar restaurante. ");
    }
  }
  return (
    <>
      <Card
        className=" flex-col border-2 p-8 rounded-md shadow  h-fit w-full ml-auto max-w-md
       flex  gap-2 "
      >
        <div className=" flex flex-col items-start justify-start gap-4 ">
          <div className="flex flex-col gap-2 text-start">
            <h1 className="text-4xl font-bold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-xl  font-thin">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form
            className="space-y-5 w-full"
            onSubmit={handleSubmit(handlesignUp)}
          >
            <Input
              placeholder="Seu nome"
              id="name"
              className="p-4"
              {...register("name")}
            />
            <Input
              placeholder="Seu e-mail"
              id="email"
              className="p-4"
              {...register("email")}
            />
            <Input
              id="restaurantName"
              placeholder="Seu estabelecimento"
              className="p-4"
              type="text"
              {...register("restaurantName")}
            />
            <Input
              id="contact"
              placeholder="Contato"
              className="p-4"
              type="text"
              {...register("contact")}
            />

            <Button
              disabled={isSubmitting}
              className="w-full text-lg py-6"
              type="submit"
            >
              Finalizar Cadastro
            </Button>

            <p className="text-xs leading-relaxed  text-center text-muted-foreground">
              Ao continuar, você concorda com nossos termos de serviço e
              privacidade.
            </p>
          </form>
        </div>
      </Card>
    </>
  );
}
