import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  return (
    <div className="relative bg-blue-800 text-white flex flex-col justify-between ">
      <div className="flex flex-col justify-center pt-10 md:pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="space-y-6 md:space-y-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              {t("hero.title", "Generative AI for Your Enterprise")}
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto font-light">
              {t(
                "hero.description",
                "Build tailor-made generative AI agents, applications and chatbots that cater to your users' unique needs. Seamlessly integrate your own data and GPT-powered models without any coding experience.",
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 mt-10 md:mt-24">
        <img
          src="/screens/dashboard.png"
          alt="Platform Screenshot"
          className="w-full h-auto max-w-full object-cover rounded-t-3xl shadow-2xl border-t-4 sm:border-t-8 border-r-4 sm:border-r-8 border-l-4 sm:border-l-8 border-gray-800"
          loading="lazy"
          srcSet="/screens/dashboard.png 1x, /screens/dashboard@2x.png 2x, /screens/dashboard@3x.png 3x"
        />
      </div>
    </div>
  );
}
