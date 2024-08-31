import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export function Pricing() {
  const { t } = useTranslation();

  const pricingPlans = [
    {
      name: t("pricing.plans.basic.name"),
      description: t("pricing.plans.basic.description"),
      price: t("pricing.plans.basic.price"),
      features: t("pricing.plans.basic.features", { returnObjects: true }),
    },
    {
      name: t("pricing.plans.professional.name"),
      description: t("pricing.plans.professional.description"),
      price: t("pricing.plans.professional.price"),
      features: t("pricing.plans.professional.features", {
        returnObjects: true,
      }),
    },
    {
      name: t("pricing.plans.premium.name"),
      description: t("pricing.plans.premium.description"),
      price: t("pricing.plans.premium.price"),
      features: t("pricing.plans.premium.features", { returnObjects: true }),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-indigo-800 py-32 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 h-40">
          {" "}
          {/* Fixed height added here */}
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-center text-lg text-blue-200 max-w-4xl mx-auto">
            {t("pricing.introduction")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className="bg-white/10 backdrop-blur-lg text-white shadow-lg hover:shadow-xl border border-white/20 overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="p-8 border-b border-white/20">
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-xl font-semibold text-blue-200 ml-2">
                    {t("pricing.perMonth")}
                  </span>
                </div>

                <p className="text-blue-200 text-xs  overflow-hidden overflow-ellipsis">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="p-8 flex-grow flex flex-col justify-between">
                <div className="">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-blue-100"
                      >
                        <svg
                          className="w-5 h-5 mr-3 text-blue-400"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  variant="default"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 mt-6"
                >
                  {t("pricing.choosePlan")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
