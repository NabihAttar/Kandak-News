"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  FaChevronLeft,
  FaChevronRight,
  FaBullhorn,
  FaStarOfDavid,
  FaGlobe,
  FaMapMarkerAlt,
  FaComments,
  FaFlag,
  FaBook,
  FaTheaterMasks,
  FaBasketballBall,
} from "react-icons/fa";

export default function Sidebar({ isOpen, setIsOpen, side, widthClass = "w-64" }) {
  const { t } = useTranslation("common");

  // Auto-detect dir from <html dir>, and keep it in sync when it changes
  const [autoSide, setAutoSide] = useState("right");
  useEffect(() => {
    const compute = () =>
      (document?.documentElement?.getAttribute("dir") || "rtl") === "rtl" ? "right" : "left";
    setAutoSide(compute());

    const mo = new MutationObserver(() => setAutoSide(compute()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => mo.disconnect();
  }, []);

  const effectiveSide = side || autoSide;            // "right" in AR (rtl), "left" in EN (ltr)
  const isLeft = effectiveSide === "left";           // ✅ FIXED (was inverted before)
  const sideClass = isLeft ? "left-0" : "right-0";
  const translateClosed = isLeft ? "-translate-x-full" : "translate-x-full";
  const closeBtnSide = isLeft ? "right-2" : "left-2";
  const Chevron = isLeft ? FaChevronLeft : FaChevronRight;

  const menuItems = useMemo(
    () => [
      { label: t("home"),          icon: <Chevron />,        path: "/" },
      { label: t("cat.editorial"), icon: <FaBullhorn />,     path: "/editorial-article" },
      { label: t("cat.israelis"),  icon: <FaStarOfDavid />,  path: "/israeli-occupation" },
      { label: t("cat.international"), icon: <FaGlobe />,    path: "/international-affairs" },
      { label: t("cat.africa"),    icon: <FaFlag />,         path: "/africa" },
      { label: t("cat.locals"),    icon: <FaMapMarkerAlt />, path: "/mhlyat" },
      { label: t("cat.opinion"),   icon: <FaComments />,     path: "/opinion" },
      { label: t("cat.economy"),   icon: <FaFlag />,         path: "/economy" },
      { label: t("cat.philosophy"),icon: <FaBook />,         path: "/philosophy" },
      { label: t("cat.cultureMedia"), icon: <FaTheaterMasks />, path: "/culture-and-media" },
      { label: t("cat.sports"),    icon: <FaBasketballBall />, path: "/sports" },
      { label: t("cat.folders"),   icon: null,               path: "/folders" },
      { label: t("cat.videos"),    icon: null,               path: "/videos" },
      { label: t("cat.infographics"), icon: null,            path: "/infographics" },
      { label: t("cat.contact"),   icon: null,               path: "/contact-us" },
    ],
    [t, isLeft] // re-compute when language or direction changes (Chevron flips)
  );

  // Close on Esc + lock body scroll when open
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && isOpen && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, setIsOpen]);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`} dir="auto">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`absolute top-0 ${sideClass} h-full ${widthClass} bg-gray-100 text-black p-4 overflow-y-auto
          transition-transform duration-300 z-40 scrollbar-hide
          ${isOpen ? "translate-x-0" : translateClosed}`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label={t("close")}
          className={`absolute top-2 ${closeBtnSide} rounded p-2 text-gray-600 hover:bg-black/5`}
        >
          ✕
        </button>

        <ul className="space-y-6 text-lg mt-10">
          {menuItems.map(({ label, icon, path }, idx) => (
            <li key={idx} className="flex items-center justify-between">
              <Link
                href={path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 hover:text-red-600"
              >
                {icon && <span className="text-xl">{icon}</span>}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
