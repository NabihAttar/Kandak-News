"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function InternationalAffairs() {
  const { t, ready, i18n } = useTranslation("common");
  if (!ready) return null;

  // Only the title is translated
  const title = t("cat.international", {
    defaultValue: i18n.language?.startsWith("en") ? "International Affairs" : "عربي ودولي",
  });

  const posts = [
    {
      title: ' "إسرائيل" وسوريا... والماء ثالثهما',
      date: "29/03/2025",
      count: 13,
      img: "https://al-khandak.com/storage/posts/March2025/fU5oIDYo19Gixu41pKLn.jpg",
      // link: "https://al-khandak.com/posts/israeyl-wswrya-walmaa-thalthhma",
    },
    {
      title: "ثورة لا يمكن التنبؤ بمآلاتها",
      date: "26/12/2024",
      count: 13,
      img: "https://al-khandak.com/storage/posts/December2024/VVjPuyZDk2HmFkEaMfGW.jpg",
      // link: "https://al-khandak.com/posts/thwrh-la-ymkn-altnbu-bmaalatha",
    },
    {
      title: "عَلَم جديد، مشاكل قديمة",
      date: "20/12/2024",
      count: 13,
      img: "https://al-khandak.com/storage/posts/December2024/8toBbq28FcGaLeuiGN7u.jpg",
      // link: "https://al-khandak.com/posts/a-l-m-jdyd-mshakl-qdymh",
    },
    // ...add other posts here
  ];

  const pages = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="container mx-auto  px-4 pb-[70px]">
      <h1 className="text-black ms-5 mb-4 text-3xl font-bold pb-[14px] pt-[50px] ltr:text-left rtl:text-right">
        {title}
      </h1>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post, idx) => (
          <div key={idx} className="relative">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-[300px] object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4 rounded">
                <p className="font-bold">{post.title}</p>
                <div className="flex justify-between text-sm text-gray-300 mt-1">
                  <p className="flex items-center gap-1">
                    <i className="fas fa-clock text-xs"></i> {post.date}
                  </p>
                  <p className="flex items-center gap-1">
                    <i className="fas fa-newspaper text-xs"></i> {post.count}
                  </p>
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
