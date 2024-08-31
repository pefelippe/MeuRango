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
      <div className="flex items-center justify-center min-h-screen bg-blue-800">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {t("login.title")}
            </h1>
            <p className="text-gray-600">{t("login.subtitle")}</p>
          </div>

          <div className="space-y-4">
            <button
              className="w-full px-4 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300 flex items-center justify-center space-x-2"
              onClick={signInGoogle}
            >
              <img
                src="/google-color-icon.svg"
                width={20}
                height={20}
                alt="Google icon"
                className="inline-block"
              />
              <span>{t("login.signInGoogle")}</span>
            </button>
            <button
              className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={setDemonstrationUser}
            >
              <Link to="/painel/dashboard">{t("login.demonstrationMode")}</Link>
            </button>
          </div>

          <div className="text-center text-sm text-gray-600">
            <p>
              {t("login.termsText")}{" "}
              <a href="#" className="text-blue-600 hover:underline">
                {t("login.termsLink")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
