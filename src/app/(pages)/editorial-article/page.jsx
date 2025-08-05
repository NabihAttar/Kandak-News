// src/components/EditorialArticleGrid.jsx
import Link from "next/link";

const editorialItems = [
  {
    title: "انهيار نظام أو ونهاية حقبة؟",
    date: "11/01/2025",
    views: "13",
    image: "https://al-khandak.com/storage/posts/January2025/QLhuqlsuGOGWsz6FMoNX.jpeg",
    url: "/editorial-article/1",
  },
  {
    title: "في مديح السابع من تشرين",
    date: "08/10/2024",
    views: "13",
    image: "https://al-khandak.com/storage/posts/October2024/bR1tdQy2kvyeL24Vn2rE.png",
    url: "/editorial-article/2",
  },
  {
    title: "لابيد – غانتس: الصرخة الأخيرة",
    date: "10/11/2022",
    views: "12",
    image: "https://al-khandak.com/storage/posts/November2022/MR2jj7116cJPG5W1us6Y.jpg",
    url: "/editorial-article/3",
  },
  {
    title: "انتخابات 1972 –2022: نصف قرن من التيه",
    date: "19/05/2022",
    views: "12",
    image: "https://al-khandak.com/storage/posts/May2022/wfJcw0sdLa7EqfHPv4yv.jpg",
    url: "/editorial-article/4",
  },
  {
    title: "أفغانستان: نهاية اللعبة الكبرى مجدداً",
    date: "17/11/2021",
    views: "12",
    image: "https://al-khandak.com/storage/posts/old/1630634844_1126671023.png",
    url: "/editorial-article/5",
  },
];

export default function EditorialArticleGrid() {
  return (
    <div className="container mx-auto  px-4 bg-white">
      <h1 className="text-black ms-5 mb-4 text-2xl font-bold">افتتاحية</h1>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        {editorialItems.map((item, idx) => (
          <div key={item.url || idx} className="col-span-1">
            <Link href={item.url || "#"} className="block group">
              <div className="relative overflow-hidden rounded shadow-sm bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-4">
                  <div className="text-black font-semibold text-lg leading-tight">
                    {item.title}
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h6l2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full text-center mt-5">{/* optional more button */}</div>
    </div>
  );
}
