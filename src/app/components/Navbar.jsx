// "use client";

// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import { FaBars, FaSearch, FaFilePdf } from "react-icons/fa";

// export default function Navbar({
//   onLanguageToggle = () => {},
//   onLatestIssue = () => {},
//   onEditionChange = () => {},
//   onSearch = () => {},
// }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   const toggleSidebar = () => setIsSidebarOpen((o) => !o);
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <>
//       <header className="w-full border-b border-gray-300 bg-white">
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           {/* =================== DESKTOP (≥ lg) =================== */}
//           <div className="hidden lg:flex w-full items-center">
//             {/* Left: menu + EN + search */}
//             <div className="flex items-center gap-6 flex-1">
//               <button
//                 aria-label="فتح القائمة"
//                 className="text-black text-xl"
//                 onClick={toggleSidebar}
//               >
//                 <FaBars />
//               </button>

//               <button
//                 onClick={onLanguageToggle}
//                 className="bg-gray-200 text-black font-bold px-4 py-2 rounded"
//               >
//                 En
//               </button>

//               <form onSubmit={handleSearchSubmit} className="flex items-center" aria-label="بحث">
//                 <div className="flex items-center bg-gray-100 rounded overflow-hidden">
//                   <input
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     type="text"
//                     required
//                     placeholder="البحث في الأخبار"
//                     onInvalid={(e) => e.currentTarget.setCustomValidity("يرجى كتابة محتوى البحث")}
//                     onInput={(e) => e.currentTarget.setCustomValidity("")}
//                     className="px-4 py-2 bg-transparent text-black placeholder-gray-500 outline-none"
//                   />
//                   <button type="submit" className="px-3 flex items-center justify-center" aria-label="ابحث">
//                     <FaSearch className="text-black" />
//                   </button>
//                 </div>
//               </form>
//             </div>

//             {/* Center: logo */}
//             <div className="flex justify-center flex-1">
//               <img src="/images/logo.svg" alt="الخندق" className="h-16 object-contain" />
//             </div>

//             {/* Right: download + select */}
//             <div className="flex items-center gap-3 flex-1 justify-end">
//               <button
//                 onClick={onLatestIssue}
//                 className="bg-gray-200 text-black font-bold px-4 py-2 rounded inline-flex items-center gap-2"
//               >
//                 <FaFilePdf className="text-red-600 text-xl" aria-hidden />
//                 <span>تحميل العدد</span>
//               </button>

//               <select
//                 onChange={(e) => onEditionChange(e.target.value)}
//                 className="px-3 py-2 rounded border border-black bg-white text-sm text-black"
//                 aria-label="العدد - التاريخ"
//                 defaultValue=""
//               >
//                 <option disabled value="">
//                   العدد - التاريخ
//                 </option>
//                 <option value="13">العدد 13 - 10/09/2023</option>
//                 <option value="12">العدد 12 - 30/09/2021</option>
//               </select>
//             </div>
//           </div>

//           {/* =================== MOBILE (< lg) =================== */}
//           <div className="flex flex-col lg:hidden">
//             {/* Top row: EN (left) | LOGO (center) | MENU (right) */}
//             <div className="relative flex items-center justify-between">
//               {/* EN on the LEFT */}
//               <button
//                 onClick={onLanguageToggle}
//                 className="bg-gray-200 text-black font-bold px-4 py-2 rounded"
//               >
//                 En
//               </button>

//               {/* MENU on the RIGHT */}
//               <button
//                 aria-label="فتح القائمة"
//                 className="text-black text-xl"
//                 onClick={toggleSidebar}
//               >
//                 <FaBars />
//               </button>

//               {/* LOGO absolutely centered */}
//               <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
//                 <img
//                   src="/images/logo.svg"
//                   alt="الخندق"
//                   className="h-16 object-contain pointer-events-auto"
//                 />
//               </div>
//             </div>

//             {/* Row: download + search side-by-side */}
//             <div className="mt-3 flex items-center gap-2 px-1">
//               <button
//                 onClick={onLatestIssue}
//                 className="bg-gray-200 text-black font-bold px-4 py-2 rounded
//                            inline-flex items-center justify-center gap-2 flex-1"
//               >
//                 <FaFilePdf className="text-red-600 text-xl" aria-hidden />
//                 <span>تحميل العدد</span>
//               </button>

//               <form onSubmit={handleSearchSubmit} className="flex-1 min-w-0" aria-label="بحث">
//                 <div className="flex items-center gap-2 bg-gray-100 rounded overflow-hidden w-full">
//                   <input
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     name="q"
//                     type="text"
//                     required
//                     placeholder="البحث في الأخبار"
//                     onInvalid={(e) => e.currentTarget.setCustomValidity("يرجى كتابة محتوى البحث")}
//                     onInput={(e) => e.currentTarget.setCustomValidity("")}
//                     className="flex-1 min-w-0 px-4 py-2 bg-transparent text-black placeholder-gray-500 outline-none"
//                   />
//                   <button type="submit" className="px-4 flex items-center justify-center" aria-label="ابحث">
//                     <FaSearch className="text-black" />
//                   </button>
//                 </div>
//               </form>
//             </div>

//             {/* Dropdown below */}
//             <div className="mt-3 px-1">
//               <select
//                 onChange={(e) => onEditionChange(e.target.value)}
//                 className="w-full px-3 py-2 rounded border border-black bg-white text-sm text-black"
//                 aria-label="العدد - التاريخ"
//                 defaultValue=""
//               >
//                 <option disabled value="">
//                   العدد - التاريخ
//                 </option>
//                 <option value="13">العدد 13 - 10/09/2023</option>
//                 <option value="12">العدد 12 - 30/09/2021</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </header>

//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//     </>
//   );
// }

"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { FaBars, FaSearch, FaFilePdf } from "react-icons/fa";

// Load Sidebar on the client only to avoid SSR hydration mismatches
const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });

const langToDir = (lng) => (lng === "ar" ? "rtl" : "ltr");

export default function Navbar({
  onLatestIssue = () => {},
  onEditionChange = () => {},
  onSearch = () => {},
}) {
  const { t } = useTranslation("common");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [lng, setLng] = useState("ar"); // match SSR; will sync on mount

  const applyLang = useCallback((val) => {
    document.documentElement.setAttribute("lang", val);
    document.documentElement.setAttribute("dir", langToDir(val));
    try {
      localStorage.setItem("lang", val);
      document.cookie = `lang=${val}; path=/; max-age=${60 * 60 * 24 * 365}`;
    } catch {}
    setLng(val);
  }, []);

  useEffect(() => {
    const current = i18n.language || "ar";
    applyLang(current);
    const handler = (next) => applyLang(next);
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, [applyLang]);

  const switchLanguage = useCallback(async () => {
    const next = (i18n.language || "ar") === "ar" ? "en" : "ar";
    await i18n.changeLanguage(next);
    applyLang(next);
  }, [applyLang]);

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
            <div className="flex items-center gap-6 flex-1">
              <button
                aria-label={t("openMenu")}
                className="text-black text-xl"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>

              {/* Keep label fixed to "En" */}
              <button
                onClick={switchLanguage}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded"
                aria-label={t("toggleAria")}
              >
                En
              </button>

              <form onSubmit={handleSearchSubmit} className="flex items-center" aria-label={t("search")}>
                <div className="flex items-center bg-gray-100 rounded overflow-hidden">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    required
                    placeholder={t("searchPlaceholder")}
                    onInvalid={(e) => e.currentTarget.setCustomValidity(t("searchRequired"))}
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="px-4 py-2 bg-transparent text-black placeholder-gray-500 outline-none"
                  />
                  <button type="submit" className="px-3 flex items-center justify-center" aria-label={t("search")}>
                    <FaSearch className="text-black" />
                  </button>
                </div>
              </form>
            </div>

            <div className="flex justify-center flex-1">
              <img src="/images/logo.svg" alt={t("brandAlt")} className="h-16 object-contain" />
            </div>

            <div className="flex items-center gap-3 flex-1 justify-end">
              <button
                onClick={onLatestIssue}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded inline-flex items-center gap-2"
              >
                <FaFilePdf className="text-red-600 text-xl" aria-hidden />
                <span>{t("downloadIssue")}</span>
              </button>

              <select
                onChange={(e) => onEditionChange(e.target.value)}
                className="px-3 py-2 rounded border border-black bg-white text-sm text-black"
                aria-label={t("issueDate")}
                defaultValue=""
              >
                <option disabled value="">{t("issueDate")}</option>
                <option value="13">{t("issue")} 13 - 10/09/2023</option>
                <option value="12">{t("issue")} 12 - 30/09/2021</option>
              </select>
            </div>
          </div>

          {/* =================== MOBILE (< lg) =================== */}
          <div className="flex flex-col lg:hidden">
            <div className="relative flex items-center justify-between">
              <button
                onClick={switchLanguage}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded"
                aria-label={t("toggleAria")}
              >
                En
              </button>

              <button
                aria-label={t("openMenu")}
                className="text-black text-xl"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>

              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <img
                  src="/images/logo.svg"
                  alt={t("brandAlt")}
                  className="h-16 object-contain pointer-events-auto"
                />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 px-1">
              <button
                onClick={onLatestIssue}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded inline-flex items-center justify-center gap-2 flex-1"
              >
                <FaFilePdf className="text-red-600 text-xl" aria-hidden />
                <span>{t("downloadIssue")}</span>
              </button>

              <form onSubmit={handleSearchSubmit} className="flex-1 min-w-0" aria-label={t("search")}>
                <div className="flex items-center gap-2 bg-gray-100 rounded overflow-hidden w-full">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    name="q"
                    type="text"
                    required
                    placeholder={t("searchPlaceholder")}
                    onInvalid={(e) => e.currentTarget.setCustomValidity(t("searchRequired"))}
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="flex-1 min-w-0 px-4 py-2 bg-transparent text-black placeholder-gray-500 outline-none"
                  />
                  <button type="submit" className="px-4 flex items-center justify-center" aria-label={t("search")}>
                    <FaSearch className="text-black" />
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-3 px-1">
              <select
                onChange={(e) => onEditionChange(e.target.value)}
                className="w-full px-3 py-2 rounded border border-black bg-white text-sm text-black"
                aria-label={t("issueDate")}
                defaultValue=""
              >
                <option disabled value="">{t("issueDate")}</option>
                <option value="13">{t("issue")} 13 - 10/09/2023</option>
                <option value="12">{t("issue")} 12 - 30/09/2021</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Client-only Sidebar (auto-detects dir and i18n) */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
}
