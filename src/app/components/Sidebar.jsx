"use client";
import { useEffect } from "react";
import Link from "next/link";
import {
  FaChevronLeft,
  FaBullhorn,
  FaStarOfDavid,
  FaGlobe,
  FaMapMarkerAlt,
  FaComments,
  FaFlag,
  FaBook,
  FaTheaterMasks,
  FaBasketballBall,
  FaChevronRight,
} from "react-icons/fa";

export default function Sidebar({ isOpen, setIsOpen }) {
  const menuItems = [
    { label: "الرئيسية", icon: <FaChevronRight />, path: "/" },
    { label: "افتتاحية", icon: <FaBullhorn />, path: "/editorial-article" },
    { label: "اسرائيليات", icon: <FaStarOfDavid />, path: "/israeli-occupation" },
    { label: "عربي ودولي", icon: <FaGlobe />, path: "/international-affairs" },
    { label: "افريقيا", icon: <FaFlag />, path: "/africa" },
    { label: "محليات", icon: <FaMapMarkerAlt />, path: "/mhlyat" },
    { label: "رأي", icon: <FaComments />, path: "/opinion" },
    { label: "اقتصاد", icon: <FaFlag />, path: "/economy" },
    { label: "فلسفة", icon: <FaBook />, path: "/philosophy" },
    { label: "ثقافة وميديا", icon: <FaTheaterMasks />, path: "/culture-and-media" },
    { label: "رياضة", icon: <FaBasketballBall />, path: "/sports" },
    { label: "ملفات", path: "/folders" },
    { label: "فيديو", path: "/videos" },
    { label: "صور الغلاف", path: "/infographics" },
    // { label: "من نحن", path: "/about-us" },
    { label: "تواصل معنا", path: "/contact-us" },
  ];

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
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`} dir="rtl">
      {/* Overlay — click anywhere on the screen to close */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`absolute right-0 top-0 h-full w-64 bg-gray-100 text-black p-4 overflow-y-auto
          transition-transform duration-300 z-40 scrollbar-hide
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="إغلاق"
          className="absolute left-2 top-2 rounded p-2 text-gray-600 hover:bg-black/5"
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
