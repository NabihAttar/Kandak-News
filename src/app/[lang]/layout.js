import "../globals.css";
import LanguageAwareNavbar from "../components/LanguageAwareNavbar";
import Footer from "../components/Footer";
import LangI18nProvider from "./i18n-provider";

const langToDir = (lng) => (lng === "ar" ? "rtl" : "ltr");

export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const { lang } = params;

  const metadata = {
    ar: {
      title: "الخندق الإخباري",
      description: "أحدث الأخبار المحلية والعالمية",
    },
    en: {
      title: "Al-Khandak News",
      description: "Latest local and international news",
    },
  };

  return metadata[lang] || metadata.ar;
}

export default function LangLayout({ children, params }) {
  const { lang } = params;

  return (
    <html lang={lang} dir={langToDir(lang)} suppressHydrationWarning>
      <body className="bg-white">
        <LangI18nProvider lang={lang}>
          <LanguageAwareNavbar />
          <main className="bg-white">{children}</main>
          <Footer />
        </LangI18nProvider>
      </body>
    </html>
  );
}
