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
  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-black ms-5 mb-4 text-2xl font-semibold">صور الغلاف</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {infographics.map(({ url, title }, i) => (
          <a
            href={url}
            key={i}
            className="relative group block overflow-hidden"
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

      <div className="col-span-full text-center mt-5">
        <nav aria-label="Pagination">
          <ul className="inline-flex -space-x-px rounded-md shadow-sm">
            <li className="page-item disabled" aria-disabled="true" aria-label="pagination.previous">
              <span className="page-link cursor-not-allowed inline-flex items-center justify-center rounded-l-md border border-gray-700 bg-gray-700 px-3 py-2 text-white" aria-hidden="true">
                ‹
              </span>
            </li>
            <li aria-current="page">
              <span className="page-link relative z-10 inline-flex items-center border border-khandaq-orange bg-khandaq-orange px-4 py-2 text-white">
                1
              </span>
            </li>
            <li>
              <a
                // href="https://al-khandak.com/infographics?page=2"
                className="page-link relative inline-flex items-center border border-gray-700 bg-transparent px-4 py-2 text-white hover:bg-gray-700"
              >
                2
              </a>
            </li>
            <li>
              <a
                // href="https://al-khandak.com/infographics?page=2"
                rel="next"
                aria-label="pagination.next"
                className="page-link relative inline-flex items-center rounded-r-md border border-gray-700 bg-transparent px-3 py-2 text-white hover:bg-gray-700"
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
