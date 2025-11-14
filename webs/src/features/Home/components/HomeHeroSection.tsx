import CarouselSection from "./CarouselSection";
import Tracing from "../../../shared/components/Tracing";
import QuickLinks from "./QuickLinks";
import { useTranslation } from "react-i18next";

const HomeHeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative flex items-center justify-center h-screen">
      <CarouselSection />
      <div className="absolute z-10 text-center px-6 w-full max-w-4xl">
        <h1 className="text-4xl md:text-3xl  text-white drop-shadow-lg">
          {t('Track Your Shipment')}
        </h1>
        <p></p>
        <div className="p-4">
          <Tracing redirectOnSearch={true} />
          <p className="text-white drop-shadow-lg">
            {t('Kamu dapat melakukan 10 pelacakan sekaligus, nomor dipisah dengan spasi atau koma')}
          </p>
          <QuickLinks />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
