// src/app/layout.js
import './globals.css';
import { notFound } from 'next/navigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const locales = ['ar', 'en'];

export const metadata = {
  title: 'الخندق الإخباري',
  description: 'أحدث الأخبار المحلية والعالمية',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-[Tajawal] rtl bg-white">
        <Navbar />
        <Sidebar />
        <main className="bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
