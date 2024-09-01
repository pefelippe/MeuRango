import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AuthGoogleContext } from "@/context/AuthGoogleContext";
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Login() {
  const { t } = useTranslation();
  const { signInGoogle, setDemonstrationUser, user } =
    useContext(AuthGoogleContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/painel/dashboard");
    }
  }, [user, navigate]);

  return (
    <>
      <Helmet title={t("login.title")} />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-800 to-indigo-900 p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {t("login.title")}
            </h1>
            <p className="text-gray-600">{t("login.subtitle")}</p>
          </motion.div>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={setDemonstrationUser}
            >
              <Link to="/painel/dashboard">{t("login.demonstrationMode")}</Link>
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center text-sm text-gray-600"
          >
            <p>
              {t("login.termsText")}{" "}
              <a href="#" className="text-blue-600 hover:underline">
                {t("login.termsLink")}
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
