import { useState } from "react";
import { useTranslation } from "react-i18next";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const faqItems = [
    {
      question: t("faq.whatCanIBuild"),
      answer: t("faq.whatCanIBuildAnswer"),
    },
    {
      question: t("faq.useWithoutPayment"),
      answer: t("faq.useWithoutPaymentAnswer"),
    },
    {
      question: t("faq.apiIntegration"),
      answer: t("faq.apiIntegrationAnswer"),
    },
    {
      question: t("faq.embedChatbot"),
      answer: t("faq.embedChatbotAnswer"),
    },
    {
      question: t("faq.credits"),
      answer: t("faq.creditsAnswer"),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-gray-100 py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/4">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-800 mb-6">
              {t("faq.title")}
            </h2>
            <p className="mb-8 text-base">{t("faq.description")}</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              {t("faq.contactUs")}
            </button>
          </div>
          <div className="md:w-2/4 space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  className="w-full text-left p-4 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{item.question}</span>
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="p-4 pt-0">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
