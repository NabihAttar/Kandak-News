"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { FaBars, FaSearch, FaFilePdf } from "react-icons/fa";
import Link from "next/link";
import { getEditions } from "../../core/repo.js";

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
  const [editions, setEditions] = useState([]);

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

  // Fetch editions on component mount
  useEffect(() => {
    const fetchEditions = async () => {
      try {
        const response = await getEditions();
        if (response?.data) {
          // Sort editions by number in descending order (newest first)
          const sortedEditions = [...response.data].sort(
            (a, b) => b.number - a.number
          );
          setEditions(sortedEditions);
        }
      } catch (error) {
        console.error("Error fetching editions:", error);
      }
    };
    fetchEditions();
  }, []);

  // Format date from YYYY-MM-DD to DD/MM/YYYY
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

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

  const handleEditionChange = (e) => {
    const editionNumber = e.target.value;
    if (editionNumber) {
      // Navigate to edition page with the edition number
      router.push(`/${currentLang}/edition/${editionNumber}`);
    }
    // Call the callback if provided (for backward compatibility)
    onEditionChange(editionNumber);
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
              <Link href="/">
                <img
                  src="/images/logo.svg"
                  alt={t("brandAlt")}
                  className="h-16 object-contain"
                />
              </Link>
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
                onChange={handleEditionChange}
                className="px-3 py-2 rounded border border-black bg-white text-sm text-black"
                aria-label={t("issueDate")}
                defaultValue=""
              >
                <option disabled value="">
                  {t("issueDate")}
                </option>
                {editions.map((edition) => (
                  <option key={edition.id} value={edition.number}>
                    {t("issue")} {edition.number} - {formatDate(edition.date)}
                  </option>
                ))}
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
                onChange={handleEditionChange}
                className="w-full px-3 py-2 rounded border border-black bg-white text-sm text-black"
                aria-label={t("issueDate")}
                defaultValue=""
              >
                <option disabled value="">
                  {t("issueDate")}
                </option>
                {editions.map((edition) => (
                  <option key={edition.id} value={edition.number}>
                    {t("issue")} {edition.number} - {formatDate(edition.date)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        lang={currentLang}
      />
    </>
  );
}
