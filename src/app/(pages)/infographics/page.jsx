import React from "react";

const infographics = [
  {
    url: "https://al-khandak.com/storage/infographics/July2022/ekEdAvXgCyh6uCgQyEWQ.jpg",
    title: "جعجع قاتل الرشيد",
  },
  {
    url: "https://al-khandak.com/storage/infographics/July2022/QazqAAdwY4bUbdzO0Tkl.jpg",
    title: "جعجع قاتل الرشيد",
  },
  {
    url: "https://al-khandak.com/storage/infographics/July2022/eJYrtgM26sPSRygzrRxm.jpg",
    title: "جعجع قاتل الرشيد",
  },
  {
    url: "https://al-khandak.com/storage/infographics/July2022/DdirJJuq1NmwNeCrEmd8.jpg",
    title: "جعجع قاتل الرشيد",
  },
  {
    url: "https://al-khandak.com/storage/infographics/December2021/LimQzRMvw4VHsgkQHtWU.jpg",
    title: "سياسة الإفقار في لبنان",
  },
  {
    url: "https://al-khandak.com/storage/infographics/December2021/tB0HBVM7hHwIYtsOOZWr.jpg",
    title: "سياسة الإفقار في لبنان",
  },
  {
    url: "https://al-khandak.com/storage/infographics/December2021/momqn1YmKh0B2X0f5r4t.jpg",
    title: "سياسة الإفقار في لبنان",
  },
  {
    url: "https://al-khandak.com/storage/infographics/December2021/7nXOoDRcYMBhDUNU0TnB.jpg",
    title: "سياسة الإفقار في لبنان",
  },
  {
    url: "https://al-khandak.com/storage/infographics/December2021/42QRmUFPmg8LMj9AZhux.jpg",
    title: "سياسة الإفقار في لبنان",
  },
  {
    url: "https://al-khandak.com/storage/infographics/December2021/Ye7XB2uaKZtVe5eAlXBx.jpg",
    title: "سياسة الإفقار في لبنان",
  },
];

export default function Infographics() {
  // 👇 define pages & pagination
  const totalPages = 7; // set whatever you need
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pagination = {
    currentPage: 1,
    totalPages,
    // baseUrl: "/infographics?page=",
  };

  return (
    <div className="container mx-auto px-4 pb-[70px]">
      <h1 className="text-black ms-5 mb-4 text-3xl font-bold pb-[14px] pt-[50px]">
        صور الغلاف
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
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
      <div className="flex justify-center mt-8" dir="rtl">
        <ul className="flex items-center gap-2">
          {/* Prev */}
          <li>
            <span className="px-3 py-1 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed">
              ‹
            </span>
          </li>

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