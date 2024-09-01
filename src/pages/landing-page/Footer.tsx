import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-10 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className=" flex  items-center justify-between  text-center text-md">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.companyName")}.{" "}
            {t("footer.allRightsReserved")}
          </p>

          <Link
            to="https://pedrofelippe.vercel.app/"
            target="_blank"
            className="text-md underline font-medium hover:text-gray-500 transition-all leading-[1.2]"
          >
            Pedro Felippe
          </Link>
        </div>
      </div>
    </footer>
  );
}
