// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { cookies } from "next/headers";
// import I18nProvider from "./i18n-provider"; 

// const langToDir = (lng) => (lng === "ar" ? "rtl" : "ltr");

// export const metadata = {
//   title: "الخندق الإخباري",
//   description: "أحدث الأخبار المحلية والعالمية",
// };

// export default function RootLayout({ children }) {
//   const c = cookies();
//   const lng = c.get("lang")?.value || "ar";

//   return (
//     <html lang={lng} dir={langToDir(lng)} suppressHydrationWarning>
//       <body className="bg-white">
//         <I18nProvider>
//           <Navbar />
//           {/* remove <Sidebar /> here if it's already inside Navbar */}
//           <main>{children}</main>
//           <Footer />
//         </I18nProvider>
//       </body>
//     </html>
//   );
// }




// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import I18nProvider from "./i18n-provider";
// import ClientLangSync from "./ClientLangSync";
// import { cookies } from "next/headers";

// const langToDir = (lng) => (lng === "ar" ? "rtl" : "ltr");

// export const metadata = {
//   title: "الخندق الإخباري",
//   description: "أحدث الأخبار المحلية والعالمية",
// };

// export default async function RootLayout({ children }) {
//   const c = await cookies();                 // <= await here
//   const lng = c.get("lang")?.value || "ar";  // "ar" if cookie missing

//   return (
//     <html lang={lng} dir={langToDir(lng)} suppressHydrationWarning>
//       <body className="bg-white">
//         <I18nProvider>
//           <ClientLangSync />
//           <Navbar />
//           <main>{children}</main>
//           <Footer />
//         </I18nProvider>
//       </body>
//     </html>
//   );
// }
// src/app/layout.js


import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import I18nProvider from "./i18n-provider";
import ClientLangSync from "./ClientLangSync";

export const metadata = {
  title: "الخندق الإخباري",
  description: "أحدث الأخبار المحلية والعالمية",
};

export default function RootLayout({ children }) {
  // Default Arabic/RTL on first paint; ClientLangSync will correct on the client
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="bg-white">
        <I18nProvider>
          <ClientLangSync />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
