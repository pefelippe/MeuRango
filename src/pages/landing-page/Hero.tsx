import { SignUp } from "@/components/Sign-up";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl font-light">{t("hero.description")}</p>
          {/* <Button
            size="lg"
            className="bg-white text-blue-800 hover:bg-blue-100"
          >
            Veja mais
          </Button> */}
        </div>
        <SignUp />
      </div>
    </div>
  );
}
