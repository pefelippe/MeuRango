import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
}

export function Pricing() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const pricingPlans: PricingPlan[] = [
    {
      name: t("pricing.plans.basic.name"),
      description: t("pricing.plans.basic.description"),
      price: t("pricing.plans.basic.price"),
      features: t("pricing.plans.basic.features", {
        returnObjects: true,
      }) as string[],
    },
    {
      name: t("pricing.plans.professional.name"),
      description: t("pricing.plans.professional.description"),
      price: t("pricing.plans.professional.price"),
      features: t("pricing.plans.professional.features", {
        returnObjects: true,
      }) as string[],
    },
  ];

  return (
    <section
      id="#pricing"
      className="bg-blue-800 py-32 min-h-screen flex flex-col items-center justify-center"
    >
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
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                className="bg-white/10 backdrop-blur-lg hover:border-white text-white shadow-lg hover:shadow-xl border
                 border-white/20 overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-105"
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

                  <p className="text-blue-200 text-sm  overflow-hidden overflow-ellipsis">
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
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="default"
                      className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 mt-6"
                    >
                      {t("pricing.choosePlan")}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
