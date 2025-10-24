"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { FaBars, FaSearch, FaFilePdf } from "react-icons/fa";

// Load Sidebar on the client only to avoid SSR hydration mismatches
const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });

const langToDir = (lng) => (lng === "ar" ? "rtl" : "ltr");

export default function LanguageAwareNavbar({
  onLatestIssue = () => {},
  onEditionChange = () => {},
  onSearch = () => {},
}) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [lng, setLng] = useState("ar");

  // Extract current language from pathname
  const currentLang = pathname.split("/")[1] || "ar";

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
    applyLang(currentLang);
  }, [currentLang, applyLang]);

  const switchLanguage = useCallback(() => {
    const nextLang = currentLang === "ar" ? "en" : "ar";

    // Get the current path without the language prefix
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "") || "/";

    // Navigate to the same page but with different language
    router.push(`/${nextLang}${pathWithoutLang}`);
  }, [currentLang, pathname, router]);

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

              <button
                onClick={switchLanguage}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded"
                aria-label={t("toggleAria")}
              >
                {currentLang === "ar" ? "En" : "ع"}
              </button>

              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center"
                aria-label={t("search")}
              >
                <div className="flex items-center bg-gray-100 rounded overflow-hidden">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    required
                    placeholder={t("searchPlaceholder")}
                    onInvalid={(e) =>
                      e.currentTarget.setCustomValidity(t("searchRequired"))
                    }
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="px-4 py-2 bg-transparent text-black placeholder-gray-500 outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 flex items-center justify-center"
                    aria-label={t("search")}
                  >
                    <FaSearch className="text-black" />
                  </button>
                </div>
              </form>
            </div>

            <div className="flex justify-center flex-1">
              <img
                src="/images/logo.svg"
                alt={t("brandAlt")}
                className="h-16 object-contain"
              />
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
                <option disabled value="">
                  {t("issueDate")}
                </option>
                <option value="13">{t("issue")} 13 - 10/09/2023</option>
                <option value="12">{t("issue")} 12 - 30/09/2021</option>
              </select>
            </div>
          </div>

          {/* =================== MOBILE (< lg) =================== */}
          <div className="flex flex-col lg:hidden">
            <div className="relative flex items-center justify-between min-h-[88px]">
              <button
                onClick={switchLanguage}
                className="bg-gray-200 text-black font-bold px-4 py-2 rounded"
                aria-label={t("toggleAria")}
              >
                {currentLang === "ar" ? "En" : "ع"}
              </button>

              <button
                aria-label={t("openMenu")}
                className="text-black text-xl"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>

              <div className="absolute inset-x-0 top-3 bottom-3 pointer-events-none flex items-center justify-center">
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

              <form
                onSubmit={handleSearchSubmit}
                className="flex-1 min-w-0"
                aria-label={t("search")}
              >
                <div className="flex items-center gap-2 bg-gray-100 rounded overflow-hidden w-full">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    name="q"
                    type="text"
                    required
                    placeholder={t("searchPlaceholder")}
                    onInvalid={(e) =>
                      e.currentTarget.setCustomValidity(t("searchRequired"))
                    }
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className="flex-1 min-w-0 px-4 py-2 bg-transparent text-black placeholder-gray-500 outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 flex items-center justify-center"
                    aria-label={t("search")}
                  >
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
                <option disabled value="">
                  {t("issueDate")}
                </option>
                <option value="13">{t("issue")} 13 - 10/09/2023</option>
                <option value="12">{t("issue")} 12 - 30/09/2021</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
}
