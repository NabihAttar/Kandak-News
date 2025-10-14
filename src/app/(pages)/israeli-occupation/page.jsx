"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const israeliOccupationPosts = [
  { id: 1, img: "https://al-khandak.com/storage/posts/October2024/ro5ZSGk2UMPx1VErdEJC.jpg", title: "خطة الجنرالات للحرب على غزة", date: "11/10/2024", views: 13, href: undefined },
  { id: 2, img: "https://al-khandak.com/storage/posts/April2024/iuixj8ZdMyIAWCEtQIuk.jpeg", title: "حول الدفاع الصاروخي الإسرائيلي", date: "17/04/2024", views: 13, href: undefined },
  { id: 3, img: "https://al-khandak.com/storage/posts/old/1621343628_458338697.jpeg", title: 'صعود الدينية السياسية في "إسرائيل" (1)', date: "31/10/2023", views: 13, href: undefined },
  { id: 4, img: "https://al-khandak.com/storage/posts/old/1621535411_867011758.jpeg", title: 'صعود الدينية السياسية في "إسرائيل" (2)', date: "31/10/2023", views: 13, href: undefined },
  { id: 5, img: "https://al-khandak.com/storage/posts/October2023/vegSz6PWAl0NPdt1R6e3.jpeg", title: "قراءة في الحروب الإسرائيلية على غزة", date: "26/10/2023", views: 13, href: undefined },
  { id: 6, img: "https://al-khandak.com/storage/posts/October2023/PgVkpeS0fwAED1VekLeY.jpg", title: "بين حصارين", date: "19/10/2023", views: 13, href: undefined },
  { id: 7, img: "https://al-khandak.com/storage/posts/November2022/Fvjy6bZeB0si3zNORQTS.jpg", title: "تقدير موقف: العلاقات الروسية - الإسرائيلية (2)", date: "17/11/2022", views: 12, href: undefined },
  { id: 8, img: "https://al-khandak.com/storage/posts/November2022/D82PqbJh6feg0fdQCNqH.jpg", title: "تقدير موقف: العلاقات الروسية - الإسرائيلية (1)", date: "15/11/2022", views: 12, href: undefined },
  { id: 9, img: "https://al-khandak.com/storage/posts/August2022/gSWLeWLsXJa1m5XRyoNI.jpg", title: "جنوب لبنان: ستالينجراد", date: "26/08/2022", views: 12, href: undefined },
  { id: 10, img: "https://al-khandak.com/storage/posts/August2022/N6ZASTwoKxeUzR0xITgA.jpg", title: 'كاريش 1: "العباسية 2"؟', date: "03/08/2022", views: 12, href: undefined },
  { id: 11, img: "https://al-khandak.com/storage/posts/July2022/A3OxkombL5TyuraDX0UW.jpg", title: "تقرير: استراتيجية الغاز الإسرائيلية", date: "04/07/2022", views: 12, href: undefined },
  { id: 12, img: "https://al-khandak.com/storage/posts/July2022/9BBGvLbbGbYevqbrHxce.jpg", title: '"إسرائيل" والغاز: لعنة قايين', date: "03/07/2022", views: 12, href: undefined },
  { id: 13, img: "https://al-khandak.com/storage/posts/June2022/rAO6x5jQB4caxYl4lG8Z.jpg", title: 'النخبة الجديدة في "إسرائيل" – الجزء الثاني', date: "26/06/2022", views: 12, href: undefined },
  { id: 14, img: "https://al-khandak.com/storage/posts/June2022/HPsg1CiuyxXm5GUE0Hni.jpg", title: 'في تفكيك استراتيجية "حلف الأطراف"', date: "21/06/2022", views: 12, href: undefined },
  { id: 15, img: "https://al-khandak.com/storage/posts/June2022/NZOHO9lkDFTI6xJoZ7Y6.jpg", title: 'النخبة الجديدة في "إسرائيل" - الجزء الأول', date: "21/06/2022", views: 12, href: undefined },
];

const totalPages = 7;
const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
const pagination = { currentPage: 1, totalPages };

export default function IsraeliOccupationGrid() {
  const { t, ready, i18n } = useTranslation("common");
  if (!ready) return null;

  // Only the title is translated
  const pageTitle = t("cat.israelis", {
    defaultValue: i18n.language?.startsWith("en") ? "Israeli Occupation" : "اسرائيليات",
  });

  return (
    <div className="container mx-auto px-4 pb-[70px]">
      <h1 className="text-black ms-5 mb-4 text-3xl font-bold pb-[14px] pt-[50px] ltr:text-left rtl:text-right">
        {pageTitle}
      </h1>

      <div className="grid gap-2 grid-cols-1 lg:grid-cols-3">
        {israeliOccupationPosts.map(({ id, href, img, title, date, views }) => (
          <div key={id} className="col-span-1">
            <a href={href || "#"} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative">
                <img
                  src={img}
                  alt={title}
                  width="100%"
                  height="300"
                  className="w-full h-[300px] object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white rounded">
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <div className="flex justify-between text-sm mt-1 text-gray-300">
                    <p className="flex items-center gap-1">
                      <i className="fas fa-clock text-xs" />
                      <span>{date}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <i className="fas fa-newspaper text-xs" />
                      <span>{views}</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <ul className="flex items-center gap-2">
          <li>
            <span className="px-3 py-1 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed">‹</span>
          </li>
          {pages.map((page) => (
            <li key={page}>
              <a
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
          <li>
            <a className="px-3 py-1 bg-gray-800 text-white hover:bg-red-600 rounded-md">›</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
