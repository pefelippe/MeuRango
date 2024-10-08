import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { LogIn, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

export function HeaderLandingPage() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full mx-auto bg-blue-800 text-white z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-20 w-full">
          <div className="flex justify-start items-center gap-8">
            <Logo />
          </div>
          <nav className="hidden md:flex space-x-6">
            <ScrollLink
              to="#services"
              smooth={true}
              duration={500}
              className="text-gray-100 hover:text-blue-100 font-medium cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="#pricing"
              smooth={true}
              duration={500}
              className="text-gray-100 hover:text-blue-100 font-medium cursor-pointer"
            >
              Pricing
            </ScrollLink>
            <ScrollLink
              to="#faq"
              smooth={true}
              duration={500}
              className="text-gray-100 hover:text-blue-100 font-medium cursor-pointer"
            >
              FAQ
            </ScrollLink>
          </nav>
          <div className="hidden md:block">
            <Button variant="default">
              <Link
                to="/painel/login"
                className="flex items-center justify-center gap-2 "
                onClick={toggleMenu}
              >
                {t("header.accessPanel")} <LogIn size={24} />
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              <Menu />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="p-6 flex justify-between items-center ">
              <Logo />
              <Button
                variant="ghost"
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </Button>
            </div>
            <nav className="px-6 py-8 space-y-6">
              <Link
                to="/"
                className="block text-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors duration-200 p-2 rounded"
                onClick={toggleMenu}
              >
                {t("header.home")}
              </Link>
              <Link
                to="/about"
                className="block text-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors duration-200 p-2 rounded"
                onClick={toggleMenu}
              >
                {t("header.about")}
              </Link>
              <Link
                to="/services"
                className="block text-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors duration-200 p-2 rounded"
                onClick={toggleMenu}
              >
                {t("header.services")}
              </Link>
              <Link
                to="/contact"
                className="block text-lg text-gray-700 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors duration-200 p-2 rounded"
                onClick={toggleMenu}
              >
                {t("header.contact")}
              </Link>
              <div className="pt-6 border-t border-gray-200">
                <Button
                  variant="default"
                  className="w-full bg-blue-700 text-white py-6 hover:bg-blue-800 text-lg"
                >
                  <Link
                    to="/painel/login"
                    className="flex items-center justify-center gap-2 4"
                    onClick={toggleMenu}
                  >
                    {t("header.accessPanel")} <LogIn size={20} />
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
