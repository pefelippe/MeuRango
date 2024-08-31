import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className=" text-white">
      <div className="w-fit px-32 mx-auto text-center bg-primary py-24 rounded-xl flex flex-col">
        <h2 className="text-5xl font-bold mb-4">{t("callToAction.title")}</h2>
        <p className="mb-6">{t("callToAction.description")}</p>
        <Button
          variant="secondary"
          size="lg"
          className=" max-w-sm  mx-auto rounded-xl text-md transition-colors duration-300"
        >
          {t("callToAction.buttonText")}
        </Button>
      </div>
    </section>
  );
}
