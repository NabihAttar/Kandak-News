"use client";
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
    { label: "الخندق", icon: <FaChevronRight />, path: "/" },
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
    { label: "انفوغرافيك", path: "/infographics" },
    { label: "الرئيسية", path: "/" },
    { label: "من نحن", path: "/about-us" },
    { label: "تواصل معنا", path: "/contact-us" },
  ];

  return (
    <div
      className={`fixed top-0 bottom-0 right-0 w-64 bg-gray-100 text-black p-4 overflow-y-auto transition-transform duration-300 z-40 scrollbar-hide ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      dir="rtl"
    >
      <ul className="space-y-6 text-lg">
        {menuItems.map(({ label, icon, path }, idx) => (
          <li key={idx} className="flex items-center justify-between cursor-pointer">
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
    </div>
  );
}
