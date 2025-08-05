import React from "react";

export default function LocalNews() {
  const posts = [
    {
      title: "النازحون ودولتنا السارحة",
      img: "https://al-khandak.com/storage/posts/October2024/XuLuTOnQtWA1Bdv2JmwV.jpg",
      date: "07/10/2024",
      count: 13,
    //   link: "https://al-khandak.com/posts/alnazhwn-wdwltna-alsarhh",
    },
    {
      title: "توتال وأهل السلطة: الخديعة الكبرى",
      img: "https://al-khandak.com/storage/posts/July2022/alBOjC3pVUlwUyu5azYB.jpg",
      date: "09/07/2022",
      count: 12,
    //   link: "https://al-khandak.com/posts/twtal-wahl-alslth-alkhdyah-alkbra",
    },
    {
      title: "قطاع الاتصالات: الموت المدولر",
      img: "https://al-khandak.com/storage/posts/July2022/pSVLdQD78BTMihKbpDCQ.jpg",
      date: "03/07/2022",
      count: 12,
    //   link: "https://al-khandak.com/posts/qtaa-alatsalat-almwt-almdwlr",
    },
    // Add more posts here following the same structure
  ];

  const pagination = {
    currentPage: 1,
    totalPages: 7,
    // baseUrl: "https://al-khandak.com/categories/mhlyat?page=",
  };

  return (
    <div className="container mx-auto  px-4">
      <h1 className="text-black ms-5 mb-4">محليات</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="w-full">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <div className="relative w-full">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-3">
                  <h3 className="font-bold">{post.title}</h3>
                  <div className="flex justify-between text-sm text-gray-300 mt-1">
                    <p className="flex items-center gap-1">
                      <i className="fas fa-clock text-xs"></i> {post.date}
                    </p>
                    <p className="flex items-center gap-1">
                      <i className="fas fa-newspaper text-xs"></i> {post.count}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center mt-8">
        <nav>
          <ul className="flex items-center space-x-1">
            <li>
              <span className="px-3 py-1 bg-gray-700 text-white rounded cursor-not-allowed">
                ‹
              </span>
            </li>
            {Array.from({ length: pagination.totalPages }, (_, i) => (
              <li key={i}>
                {i + 1 === pagination.currentPage ? (
                  <span className="px-3 py-1 bg-blue-600 text-white rounded">
                    {i + 1}
                  </span>
                ) : (
                  <a
                    // href={`${pagination.baseUrl}${i + 1}`}
                    className="px-3 py-1 bg-gray-200 text-black rounded hover:bg-blue-500 hover:text-white"
                  >
                    {i + 1}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                // href={`${pagination.baseUrl}${pagination.currentPage + 1}`}
                className="px-3 py-1 bg-gray-200 text-black rounded hover:bg-blue-500 hover:text-white"
              >
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
