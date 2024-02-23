import { AuthGoogleContext } from "@/context/AuthGoogleContext";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const { signInGoogle, setDemonstrationUser, user } =
    useContext(AuthGoogleContext);

  const navigate = useNavigate();
  user && navigate("/painel/dashboard");

  return (
    <>
      <Helmet title="Login" />
      <div
        className=" flex-col p-16
       flex justify-center items-start w-full md:min-h-screen gap-2 "
      >
        <div className="flex flex-col justify-start text-start items-start space-y-5 w-full ">
          <h1 className="text-6xl font-bold tracking-tight text-primary">
            Acesse seu painel.
          </h1>

          <div className="flex w-full flex-col max-w-lg  gap-5 ">
            <button
              className="text-lg  py-3 mx-auto font-medium px-8 w-full hover:underline border rounded"
              onClick={signInGoogle}
            >
              Entrar com Google
            </button>
            <button
              className="text-lg  py-3 mx-auto font-medium px-8 w-full hover:underline rounded bg-blue-500 text-white"
              onClick={setDemonstrationUser}
            >
              <Link to="/dashboard">Modo Demonstração</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
