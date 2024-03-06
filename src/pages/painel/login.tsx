import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AuthGoogleContext } from "@/context/AuthGoogleContext";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { t } = useTranslation();
  const { signInGoogle, setDemonstrationUser, user } =
    useContext(AuthGoogleContext);

  const navigate = useNavigate();
  user && navigate("/painel/dashboard");

  return (
    <>
      <Helmet title={t("login.title")} />
      <div className="flex-col p-16 flex justify-center items-start w-full md:min-h-screen gap-2">
        <div className="flex flex-col justify-center text-center items-center space-y-5 w-full mx-auto">
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            {t("login.title")}
          </h1>

          <div className="flex w-full flex-col max-w-md gap-5">
            <button
              className="text-lg py-3 mx-auto font-medium px-8 w-full hover:underline border items-center justify-center flex gap-2 rounded-3xl"
              onClick={signInGoogle}
            >
              <img
                src="/google-color-icon.svg"
                width={25}
                height={25}
                alt="google icon"
              />
              {t("login.signInGoogle")}
            </button>
            <button
              className="text-lg py-3 mx-auto font-medium px-8 w-full hover:underline bg-blue-500 text-white rounded-3xl"
              onClick={setDemonstrationUser}
            >
              <Link to="/painel/dashboard">{t("login.demonstrationMode")}</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
