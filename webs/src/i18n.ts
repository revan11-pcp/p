import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0
    },
    resources: {
      en: {
        translation: {
          "Track Your Shipment": "Track Your Shipment",
          "Kamu dapat melakukan 10 pelacakan sekaligus, nomor dipisah dengan spasi atau koma": "You can track up to 10 shipments at once, numbers separated by spaces or commas",
          home: 'HOME',
          services: 'SERVICES',
          TrackAndEstimate: 'TRACK & ESTIMATE',
          tracking: 'Track & Trace',
          pricing: 'Rate Calculator',
          coverage: 'Delivery Coverage',
          about: 'ABOUT US',
          companyProfile: 'Company Profile',
          career: 'Career',
          contact: 'CONTACT US',
        },
      },
      id: {
        translation: {
          "Track Your Shipment": "Lacak Kiriman Anda",
          "Kamu dapat melakukan 10 pelacakan sekaligus, nomor dipisah dengan spasi atau koma": "Kamu dapat melakukan 10 pelacakan sekaligus, nomor dipisah dengan spasi atau koma",
          home: 'BERANDA',
          services: 'LAYANAN',
          TrackAndEstimate: 'CEK & HITUNG',
          tracking: 'Lacak Kiriman',
          pricing: 'Hitung Tarif',
          coverage: 'Wilayah Pengiriman',
          about: 'TENTANG KAMI',
          companyProfile: 'Profil Perusahaan',
          career: 'Karier',
          contact: 'KONTAK KAMI',
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
