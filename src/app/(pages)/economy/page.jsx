import React from "react";

export default function EconomySection() {
  const posts = [
    {
      title: "أوقفوا طباعة ورقة الألف ليرة",
    //   link: "https://al-khandak.com/posts/awqfwa-tbaah-wrqh-alalf-lyrh",
      img: "https://al-khandak.com/storage/posts/January2023/DOe0WO7rCWIgdRKwrixk.jpg",
      date: "27/01/2023",
      count: 12,
    },
    {
      title: "تقرير: عسكرة الغذاء وتلوينه",
    //   link: "https://al-khandak.com/posts/tqryr-askrh-alghthaa-wtlwynh",
      img: "https://al-khandak.com/storage/posts/December2022/wrK9WZwAjfCgAu9vn2I8.jpg",
      date: "06/12/2022",
      count: 12,
    },
    {
      title: "نحو رؤية جديدة لأزمات عالمنا اليوم",
    //   link: "https://al-khandak.com/posts/nhw-ruyh-jdydh-lazmat-aalmna-alywm",
      img: "https://al-khandak.com/storage/posts/August2022/DjnJAfspQzF3Icj6lelw.jpg",
      date: "10/08/2022",
      count: 12,
    },
    // ... Add the rest of your posts here
  ];

  return (
    <div className="container mx-auto ">
      <h1 className="text-black ms-5 mb-4 text-3xl font-bold">اقتصاد</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {posts.map((post, idx) => (
          <div key={idx} className="w-full">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <div className="relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3">
                  <p className="font-bold">{post.title}</p>
                  <div className="flex justify-between text-sm text-gray-300 mt-2">
                    <p>
                      <i className="fas fa-clock mr-1 text-xs"></i>
                      {post.date}
                    </p>
                    <p>
                      <i className="fas fa-newspaper mr-1 text-xs"></i>
                      {post.count}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="text-center mt-8">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <span className="px-3 py-2 text-gray-400 border rounded-l-lg border-gray-700">
              ‹
            </span>
          </li>
          <li>
            <span className="px-3 py-2 border border-gray-700 bg-blue-600 text-white">
              1
            </span>
          </li>
          <li>
            <a
            //   href="https://al-khandak.com/categories/economy?page=2"
              className="px-3 py-2 border border-gray-700 text-white hover:bg-gray-700"
            >
              2
            </a>
          </li>
          <li>
            <a
            //   href="https://al-khandak.com/categories/economy?page=3"
              className="px-3 py-2 border border-gray-700 text-white hover:bg-gray-700"
            >
              3
            </a>
          </li>
          <li>
            <a
            //   href="https://al-khandak.com/categories/economy?page=4"
              className="px-3 py-2 border border-gray-700 text-white hover:bg-gray-700"
            >
              4
            </a>
          </li>
          <li>
            <a
            //   href="https://al-khandak.com/categories/economy?page=2"
              className="px-3 py-2 border border-gray-700 rounded-r-lg text-white hover:bg-gray-700"
            >
              ›
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
