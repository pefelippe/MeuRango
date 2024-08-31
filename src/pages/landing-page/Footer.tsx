import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className=" py-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="  border-gray-700 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.companyName")}.{" "}
            {t("footer.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
