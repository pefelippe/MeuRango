import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function Services() {
  const { t } = useTranslation();
  return (
    <section
      id="#services"
      className="bg-gradient-to-b from-white to-gray-100 py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-extrabold text-blue-800 text-center mb-20"
        >
          {t("services.title")}
        </motion.h2>
        <div className="flex flex-col space-y-32 items-start">
          <ServiceColumn
            title={t("services.orderManagement.title")}
            subtitle={t("services.orderManagement.subtitle")}
            features={t("services.orderManagement.features", {
              returnObjects: true,
            })}
            imageSrc="https://placehold.co/600x400?text=Order+Management"
            imageOnRight={true}
          />
          <ServiceColumn
            title={t("services.menuCustomization.title")}
            subtitle={t("services.menuCustomization.subtitle")}
            features={t("services.menuCustomization.features", {
              returnObjects: true,
            })}
            imageSrc="https://placehold.co/600x400?text=Menu+Customization"
            imageOnRight={false}
          />
          <ServiceColumn
            title={t("services.analytics.title")}
            subtitle={t("services.analytics.subtitle")}
            features={t("services.analytics.features", { returnObjects: true })}
            imageSrc="https://placehold.co/600x400?text=Analytics"
            imageOnRight={true}
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceColumnProps {
  title: string;
  subtitle: string;
  features: string[];
  imageSrc: string;
  imageOnRight: boolean;
}

function ServiceColumn({
  title,
  subtitle,
  features,
  imageSrc,
  imageOnRight,
}: ServiceColumnProps) {
  const contentOrder = imageOnRight
    ? "order-1 md:order-1"
    : "order-1 md:order-2";
  const imageOrder = imageOnRight ? "order-2 md:order-2" : "order-2 md:order-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, x: imageOnRight ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className={`md:w-1/2 ${contentOrder}`}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: imageOnRight ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className={`md:w-1/2 ${imageOrder}`}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
}
