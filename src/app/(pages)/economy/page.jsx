import React from "react";

export default function EconomySection() {
  const posts = [
    { title: "أوقفوا طباعة ورقة الألف ليرة",
      // link: "https://al-khandak.com/posts/awqfwa-tbaah-wrqh-alalf-lyrh",
      img: "https://al-khandak.com/storage/posts/January2023/DOe0WO7rCWIgdRKwrixk.jpg",
      date: "27/01/2023", count: 12 },
    { title: "تقرير: عسكرة الغذاء وتلوينه",
      img: "https://al-khandak.com/storage/posts/December2022/wrK9WZwAjfCgAu9vn2I8.jpg",
      date: "06/12/2022", count: 12 },
    { title: "نحو رؤية جديدة لأزمات عالمنا اليوم",
      img: "https://al-khandak.com/storage/posts/August2022/DjnJAfspQzF3Icj6lelw.jpg",
      date: "10/08/2022", count: 12 },
  ];

  // ✅ define pages BEFORE using it
  const totalPages = 7;                                  // or compute it
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const pagination = {
    currentPage: 1,
    totalPages,
    // baseUrl: "/economy?page=",
  };

  return (
    <div className="container mx-auto px-4 pb-[70px]">
      <h1 className="text-black ms-5 mb-4 text-3xl font-bold pb-[14px] pt-[50px]">اقتصاد</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {posts.map((post, idx) => (
          <div key={idx} className="w-full">
            <a href={post.link ?? "#"} target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img src={post.img} alt={post.title} className="w-full h-[300px] object-cover rounded" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white rounded">
                  <p className="font-bold">{post.title}</p>
                  <div className="flex justify-between text-sm text-gray-300 mt-2">
                    <p><i className="fas fa-clock mr-1 text-xs"></i>{post.date}</p>
                    <p><i className="fas fa-newspaper mr-1 text-xs"></i>{post.count}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8" dir="rtl">
        <ul className="flex items-center gap-2">
          <li>
            <span className="px-3 py-1 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed">‹</span>
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
