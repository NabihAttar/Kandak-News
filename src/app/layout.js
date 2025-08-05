// src/app/layout.js
import "./globals.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "الخندق الإخباري",
  description: "أحدث الأخبار المحلية والعالمية",
  //   icons: {
  //   icon: '/favicon.ico',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">

      <body>
        <Navbar />
        <Sidebar />
        <main className="bg-white">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
