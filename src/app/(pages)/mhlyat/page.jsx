"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function LocalNews() {
  const { t, ready, i18n } = useTranslation("common");
  if (!ready) return null;

  // Only the title translates
  const title = t("cat.locals", {
    defaultValue: i18n.language?.startsWith("en") ? "Local" : "محليات",
  });

  const posts = [
    {
      title: "النازحون ودولتنا السارحة",
      img: "https://al-khandak.com/storage/posts/October2024/XuLuTOnQtWA1Bdv2JmwV.jpg",
      date: "07/10/2024",
      count: 13 /*, link: "..."*/,
    },
    {
      title: "توتال وأهل السلطة: الخديعة الكبرى",
      img: "https://al-khandak.com/storage/posts/July2022/alBOjC3pVUlwUyu5azYB.jpg",
      date: "09/07/2022",
      count: 12,
    },
    {
      title: "قطاع الاتصالات: الموت المدولر",
      img: "https://al-khandak.com/storage/posts/July2022/pSVLdQD78BTMihKbpDCQ.jpg",
      date: "03/07/2022",
      count: 12,
    },
  ];

  const pagination = {
    currentPage: 1,
    totalPages: 7,
    // baseUrl: "https://al-khandak.com/categories/mhlyat?page=",
  };

  const pages = Array.from({ length: pagination.totalPages }, (_, i) => i + 1);

  return (
    <div className="container mx-auto px-4 pb-[70px]">
      <h1 className="text-black ms-5 mb-4 text-3xl font-bold pb-[14px] pt-[50px] ltr:text-left rtl:text-right">
        {title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="w-full">
            <a href={post.link ?? "#"} target="_blank" rel="noopener noreferrer">
              <div className="relative w-full">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-[300px] object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-3 rounded">
                  <h3 className="font-bold">{post.title}</h3>
                  <div className="flex justify-between text-sm text-gray-300 mt-1">
                    <p className="flex items-center gap-1">
                      <i className="fas fa-clock text-xs" /> {post.date}
                    </p>
                    <p className="flex items-center gap-1">
                      <i className="fas fa-newspaper text-xs" /> {post.count}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <ul className="flex items-center gap-2">
          {/* Prev */}
          <li>
            <span className="px-3 py-1 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed">
              ‹
            </span>
          </li>

          {/* Page numbers */}
          {pages.map((page) => (
            <li key={page}>
              <a
                // href={`${pagination.baseUrl}${page}`}
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
              // href={`${pagination.baseUrl}${pagination.currentPage + 1}`}
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
