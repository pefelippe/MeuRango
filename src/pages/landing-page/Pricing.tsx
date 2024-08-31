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
    <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 py-32 min-h-screen flex flex-col items-center justify-center">
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
              className="bg-[#050e1b] text-white shadow-lg hover:shadow-xl border-none
               border-blue-500 overflow-hidden flex flex-col h-full"
            >
              <CardHeader className=" m-3 border-b border-blue-700 ">
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </CardTitle>
                {/* <p className="text-blue-200">{plan.description}</p> */}
              </CardHeader>
              <CardContent className="py-6 flex-grow flex flex-col ">
                <div className=" text-start ">
                  <div className="flex items-end ">
                    <p className="text-5xl font-bold text-white">
                      {plan.price}{" "}
                    </p>
                    <p className="text-3xl font-semibold text-blue-200">
                      {t("pricing.perMonth")}
                    </p>
                  </div>
                  {/* <p className="text-xs text-blue-300 mt-2">
                    {t("pricing.noCreditCard")}
                  </p> */}
                </div>
                <Button
                  variant="default"
                  className="my-6 w-full bg-blue-500 hover:bg-blue-600 "
                >
                  {t("pricing.choosePlan")}
                </Button>
                <div className="border-t border-blue-700 pt-6">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-blue-200"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
