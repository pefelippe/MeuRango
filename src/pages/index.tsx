import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { HeaderLandingPage } from "./landing-page/Header";
import { Hero } from "./landing-page/Hero";

import { Pricing } from "./landing-page/Pricing";
import { FAQ } from "./landing-page/FAQ";

import { Footer } from "./landing-page/Footer";
import { Services } from "./landing-page/Services";
import { CallToAction } from "./landing-page/CallToAction";

function LandingPage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen min-w-[400px] w-full ">
      <Helmet titleTemplate={t("pageTitle")} title={t("pageTitle")} />
      <HeaderLandingPage />
      <main className="flex flex-col  mt-20">
        <Hero />
        <Services />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
