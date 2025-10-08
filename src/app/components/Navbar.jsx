"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { FaBars, FaSearch, FaFilePdf } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";

export default function Navbar({
  onLatestIssue = () => {},
  onEditionChange = () => {},
  onSearch = () => {},
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSidebar = () => setIsSidebarOpen((o) => !o);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
      <header className="w-full border-b border-gray-300 bg-white">
        {/* Extra top space on mobile/tablet only */}
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-4 lg:py-4">
          {/* =================== DESKTOP (≥ lg) =================== */}
          <div className="hidden lg:flex w-full items-center">
            {/* Start side: menu + lang + search */}
            <div className="flex items-center gap-6 flex-1">
              <button
                type="button"
                aria-label="فتح القائمة"
                className="text-black text-xl"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>

              <LanguageToggle />

              <form onSubmit={handleSearchSubmit} className="flex items-center" aria-label="بحث">
                <div className="flex items-center bg-gray-100 rounded overflow-hidden">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    required
                    placeholder="البحث في الأخبار"
                    onInvalid={(e) => e.currentTarget.setCustomValidity("يرجى كتابة محتوى البحث")}
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="px-4 py-2 bg-transparent text-black placeholder-gray-500 outline-none"
                  />
                  <button type="submit" className="px-3 flex items-center justify-center" aria-label="ابحث">
                    <FaSearch className="text-black" />
                  </button>
                </div>
              </form>
            </div>

            {/* Center: logo */}
            <div className="flex justify-center flex-1">
              <Link href="/" aria-label="العودة إلى الصفحة الرئيسية">
                <Image
                  src="/images/logo.svg"
                  alt="الخندق"
                  width={140}
                  height={64}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* End side: download + select */}
            <div className="flex items-center gap-3 flex-1 justify-end">
              <button
                type="button"
                onClick={onLatestIssue}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded inline-flex items-center gap-2"
              >
                <FaFilePdf className="text-red-600 text-xl" aria-hidden />
                <span>تحميل العدد</span>
              </button>

              <label className="sr-only" htmlFor="edition-select">
                العدد - التاريخ
              </label>
              <select
                id="edition-select"
                onChange={(e) => onEditionChange(e.target.value)}
                className="px-3 py-2 rounded border border-black bg-white text-sm text-black"
                defaultValue=""
              >
                <option disabled value="">
                  العدد - التاريخ
                </option>
                <option value="13">العدد 13 - 10/09/2023</option>
                <option value="12">العدد 12 - 30/09/2021</option>
              </select>
            </div>
          </div>

          {/* =================== MOBILE & TABLET (< lg) =================== */}
          <div className="flex flex-col lg:hidden">
            {/* Top row: burger | logo (center) | language toggle */}
            <div className="relative flex items-center justify-between py-2 mb-4">
              {/* Burger FIRST on mobile/tablet */}
              <button
                type="button"
                aria-label="فتح القائمة"
                className="text-black text-xl order-1"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>

              {/* Centered logo */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <Link href="/" className="pointer-events-auto" aria-label="العودة إلى الصفحة الرئيسية">
                  <Image
                    src="/images/logo.svg"
                    alt="الخندق"
                    width={140}
                    height={64}
                    className="h-16 w-auto object-contain"
                    priority
                  />
                </Link>
              </div>

              {/* Language toggle LAST on mobile/tablet */}
              <div className="order-3">
                <LanguageToggle />
              </div>
            </div>

            {/* Row: download + search (more spacing under the logo row & between items) */}
            <div className="mt-6 flex items-center gap-4 px-1">
              <button
                type="button"
                onClick={onLatestIssue}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded inline-flex items-center justify-center gap-2 flex-1"
              >
                <FaFilePdf className="text-red-600 text-xl" aria-hidden />
                <span>تحميل العدد</span>
              </button>

              <form onSubmit={handleSearchSubmit} className="flex-1 min-w-0" aria-label="بحث">
                <div className="flex items-center gap-2 bg-gray-100 rounded overflow-hidden w-full">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    name="q"
                    type="text"
                    required
                    placeholder="البحث في الأخبار"
                    onInvalid={(e) => e.currentTarget.setCustomValidity("يرجى كتابة محتوى البحث")}
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="flex-1 min-w-0 px-4 py-2 bg-transparent text-black placeholder-gray-500 outline-none"
                  />
                  <button type="submit" className="px-4 flex items-center justify-center" aria-label="ابحث">
                    <FaSearch className="text-black" />
                  </button>
                </div>
              </form>
            </div>

            {/* Edition */}
            <div className="mt-4 px-1">
              <label className="sr-only" htmlFor="edition-select-m">
                العدد - التاريخ
              </label>
              <select
                id="edition-select-m"
                onChange={(e) => onEditionChange(e.target.value)}
                className="w-full px-3 py-2 rounded border border-black bg-white text-sm text-black"
                defaultValue=""
              >
                <option disabled value="">
                  العدد - التاريخ
                </option>
                <option value="13">العدد 13 - 10/09/2023</option>
                <option value="12">العدد 12 - 30/09/2021</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
}
