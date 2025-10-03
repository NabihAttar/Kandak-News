import React from "react";

export default function Africa() {
  const posts = [
    {
    //   link: "https://al-khandak.com/posts/sankara-alnby-almsl-h-aljza-alawl",
      img: "https://al-khandak.com/storage/posts/November2022/fche4zVOOT00AVoIDLTP.jpg",
      title: "سانكارا: النبي المسلّح (الجزء الأول)",
      date: "02/11/2022",
      count: 12,
    },
    {
    //   link: "https://al-khandak.com/posts/السباق-الليبي-رهانات-النفوذ-والصراع-على-الطاقة",
      img: "https://al-khandak.com/storage/posts/old/1587304917_894055654.jpeg",
      title: "السباق الليبي: رهانات النفوذ والصراع على الطاقة",
      date: "13/11/2021",
      count: 1,
    },
    {
    //   link: "https://al-khandak.com/posts/الأدب-الأفريقي-الحديث-بين-نموذجين-شوقي-وسيزير",
      img: "https://al-khandak.com/storage/posts/old/1587308114_260391555.jpeg",
      title: "الأدب الأفريقي الحديث بين نموذجين: شوقي وسيزير",
      date: "13/11/2021",
      count: 1,
    },
    // Add more posts here...
  ];

  return (
    <div className="container mx-auto  px-4">
      <h1 className="text-black mb-6 ms-5 text-3xl font-bold">افريقيا</h1>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <div key={index} className="relative">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-[300px] object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <p className="font-semibold">{post.title}</p>
                <div className="flex justify-between text-sm text-gray-300 mt-1">
                  <p>
                    <i className="fas fa-clock mr-1"></i>
                    {post.date}
                  </p>
                  <p>
                    <i className="fas fa-newspaper mr-1"></i>
                    {post.count}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav>
          <ul className="flex items-center space-x-2">
            <li className="text-gray-500 cursor-not-allowed">‹</li>
            <li className="px-3 py-1 bg-blue-600 text-white rounded">1</li>
            <li>
              <a
                // href="https://al-khandak.com/categories/africa?page=2"
                className="px-3 py-1 border rounded hover:bg-gray-200"
              >
                2
              </a>
            </li>
            <li>
              <a
                // href="https://al-khandak.com/categories/africa?page=2"
                className="px-3 py-1 border rounded hover:bg-gray-200"
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
