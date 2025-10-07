"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { FaBars, FaSearch, FaFilePdf } from "react-icons/fa";

export default function Navbar({
  onLanguageToggle = () => {},
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
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* =================== DESKTOP (≥ lg) =================== */}
          <div className="hidden lg:flex w-full items-center">
            {/* Left: menu + EN + search */}
            <div className="flex items-center gap-6 flex-1">
              <button
                aria-label="فتح القائمة"
                className="text-black text-xl"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>

              <button
                onClick={onLanguageToggle}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded"
              >
                En
              </button>

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
              <img src="/images/logo.svg" alt="الخندق" className="h-16 object-contain" />
            </div>

            {/* Right: download + select */}
            <div className="flex items-center gap-3 flex-1 justify-end">
              <button
                onClick={onLatestIssue}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded inline-flex items-center gap-2"
              >
                <FaFilePdf className="text-red-600 text-xl" aria-hidden />
                <span>تحميل العدد</span>
              </button>

              <select
                onChange={(e) => onEditionChange(e.target.value)}
                className="px-3 py-2 rounded border border-black bg-white text-sm text-black"
                aria-label="العدد - التاريخ"
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

          {/* =================== MOBILE (< lg) =================== */}
          <div className="flex flex-col lg:hidden">
            {/* Top row: EN (left) | LOGO (center) | MENU (right) */}
            <div className="relative flex items-center justify-between">
              {/* EN on the LEFT */}
              <button
                onClick={onLanguageToggle}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded"
              >
                En
              </button>

              {/* MENU on the RIGHT */}
              <button
                aria-label="فتح القائمة"
                className="text-black text-xl"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>

              {/* LOGO absolutely centered */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <img
                  src="/images/logo.svg"
                  alt="الخندق"
                  className="h-16 object-contain pointer-events-auto"
                />
              </div>
            </div>

            {/* Row: download + search side-by-side */}
            <div className="mt-3 flex items-center gap-2 px-1">
              <button
                onClick={onLatestIssue}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded
                           inline-flex items-center justify-center gap-2 flex-1"
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

            {/* Dropdown below */}
            <div className="mt-3 px-1">
              <select
                onChange={(e) => onEditionChange(e.target.value)}
                className="w-full px-3 py-2 rounded border border-black bg-white text-sm text-black"
                aria-label="العدد - التاريخ"
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
