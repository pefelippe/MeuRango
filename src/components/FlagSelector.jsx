import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const FlagSelector = () => {
  const { i18n } = useTranslation();

  const selectedLanguage = i18n.language;
  const [language, setLanguage] = useState(selectedLanguage);
  function handleChangeLanguage() {
    const updatedLanguage = language === "en-US" ? "pt-BR" : "en-US";
    i18n.changeLanguage(updatedLanguage);
    setLanguage(() => updatedLanguage);
  }

  const displayLanguage = language.split("-")[1];

  return (
    <Button
      variant={"secondary"}
      className="text-lg py-6 font-medium bg-blue-700 hover:underline"
      onClick={() => handleChangeLanguage()}
    >
      {displayLanguage}
    </Button>
  );
};

export default FlagSelector;
