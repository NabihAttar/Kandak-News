"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const infographics = [
  { url: "https://al-khandak.com/storage/infographics/July2022/ekEdAvXgCyh6uCgQyEWQ.jpg", title: "جعجع قاتل الرشيد" },
  { url: "https://al-khandak.com/storage/infographics/July2022/QazqAAdwY4bUbdzO0Tkl.jpg", title: "جعجع قاتل الرشيد" },
  { url: "https://al-khandak.com/storage/infographics/July2022/eJYrtgM26sPSRygzrRxm.jpg", title: "جعجع قاتل الرشيد" },
  { url: "https://al-khandak.com/storage/infographics/July2022/DdirJJuq1NmwNeCrEmd8.jpg", title: "جعجع قاتل الرشيد" },
  { url: "https://al-khandak.com/storage/infographics/December2021/LimQzRMvw4VHsgkQHtWU.jpg", title: "سياسة الإفقار في لبنان" },
  { url: "https://al-khandak.com/storage/infographics/December2021/tB0HBVM7hHwIYtsOOZWr.jpg", title: "سياسة الإفقار في لبنان" },
  { url: "https://al-khandak.com/storage/infographics/December2021/momqn1YmKh0B2X0f5r4t.jpg", title: "سياسة الإفقار في لبنان" },
  { url: "https://al-khandak.com/storage/infographics/December2021/7nXOoDRcYMBhDUNU0TnB.jpg", title: "سياسة الإفقار في لبنان" },
  { url: "https://al-khandak.com/storage/infographics/December2021/42QRmUFPmg8LMj9AZhux.jpg", title: "سياسة الإفقار في لبنان" },
  { url: "https://al-khandak.com/storage/infographics/December2021/Ye7XB2uaKZtVe5eAlXBx.jpg", title: "سياسة الإفقار في لبنان" },
];

export default function Infographics() {
  const { t, ready, i18n } = useTranslation("common");
  if (!ready) return null;

  // Only the page title translates
  const title = t("cat.infographics", {
    defaultValue: i18n.language?.startsWith("en") ? "Cover Images" : "صور الغلاف",
  });

  // Pagination data
  const totalPages = 7;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pagination = { currentPage: 1, totalPages };

  return (
    <div className="container mx-auto px-4 pb-[70px]">
      <h1 className="text-black ms-5 mb-4 text-3xl font-bold pb-[14px] pt-[50px] ltr:text-left rtl:text-right">
        {title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {infographics.map(({ url, title }, i) => (
          <a
            href={url}
            key={i}
            className="relative group block overflow-hidden rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={url}
              alt={title}
              className="w-full h-[380px] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              {title}
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
  <ul className="flex items-center gap-2">
    {/* Prev */}
    <li>
      <button
        className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed"
        disabled
        aria-label="Previous page"
      >
        {/* left chevron */}
        <svg
          className="w-4 h-4 rtl:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
    </li>

    {pages.map((page) => (
      <li key={page}>
        <a
          className={`inline-flex items-center justify-center w-10 h-10 rounded-md leading-none ${
            page === 1 ? "bg-red-500 text-white" : "bg-gray-800 text-white hover:bg-red-600"
          }`}
        >
          {page}
        </a>
      </li>
    ))}

    {/* Next */}
    <li>
      <a
        className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-800 text-white hover:bg-blue-600"
        aria-label="Next page"
      >
        {/* right chevron */}
        <svg
          className="w-4 h-4 rtl:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </a>
    </li>
  </ul>
</div>
    </div>
  );
}
