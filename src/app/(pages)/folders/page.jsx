"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function FilesSection() {
  const { t, ready, i18n } = useTranslation("common");
  if (!ready) return null;

  // Only the title translates
  const title = t("cat.folders", {
    defaultValue: i18n.language?.startsWith("en") ? "Folders" : "ملفات",
  });

  const files = [
    {
      title: "عنوان",
      // link: "https://al-khandak.com/folders/title",
      image: "https://al-khandak.com/storage",
    },
  ];

  // --- Pagination data (define BEFORE JSX) ---
  const totalPages = 3;
  const currentPage = 1;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pagination = { currentPage, totalPages };
  // ------------------------------------------

  return (
    <div className="container mx-auto px-4 pb-[70px]">
      <h1 className="text-black ms-5 mb-4 text-3xl font-bold pb-[14px] pt-[50px] ltr:text-left rtl:text-right">
        {title}
      </h1>

      <div className="grid gap-2 grid-cols-1 lg:grid-cols-3">
        {files.map((file, idx) => (
          <a
            key={idx}
            // href={file.link}
            className="block rounded overflow-hidden shadow-lg relative group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={file.image}
              alt={file.title}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-lg font-semibold">
              {file.title}
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ul className="flex items-center gap-2">
          {/* Prev (disabled on page 1) */}
          <li>
            <span className="px-3 py-1 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed">
              ‹
            </span>
          </li>

          {pages.map((page) => (
            <li key={page}>
              <a
                // href={`${baseUrl}${page}`}
                className={`px-3 py-1 rounded-md ${
                  page === pagination.currentPage
                    ? "bg-red-500 text-white"
                    : "bg-gray-800 text-white hover:bg-red-600"
                }`}
              >
                {page}
              </a>
            </li>
          ))}

          {/* Next */}
          <li>
            <a
              // href={`${baseUrl}${pagination.currentPage + 1}`}
              className="px-3 py-1 bg-gray-800 text-white hover:bg-red-600 rounded-md"
            >
              ›
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
