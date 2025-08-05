import React from "react";

export default function PhilosophySection() {
  const posts = [
    {
      title: "طوفان جارف للأيديولوجيا الإسرائيلية",
      date: "26/10/2023",
      views: 13,
      image:
        "https://al-khandak.com/storage/posts/October2023/aTRSExJQw0eOAmf9OvTJ.jpg",
    //   link: "https://al-khandak.com/posts/twfan-jarf-llaydywlwjya-alisraeylyh",
    },
    {
      title: `'إعادة ضبط كبيرة'" نعم، ولتَكن حقيقية (2)"`,
      date: "17/11/2021",
      views: 12,
      image:
        "https://al-khandak.com/storage/posts/December2021/ydg3N5iAD5O6Rxh7nv2d.jpg",
    //   link: `https://al-khandak.com/posts/إعادة-ضبط-كبيرة&quot;-نعم،-ولتَكن-حقيقية-2-&quot;`,
    },
    {
      title: "مع جيجك: لماذا لا أزال شيوعيّاً",
      date: "13/11/2021",
      views: 1,
      image:
        "https://al-khandak.com/storage/posts/old/1587485208_1928897977.jpeg",
    //   link: "https://al-khandak.com/posts/مع-جيجك-لماذا-لا-أزال-شيوعيّاً",
    },
    {
      title: "موقع الديالكتيك والاغتراب عند ماركس",
      date: "13/11/2021",
      views: 8,
      image:
        "https://al-khandak.com/storage/posts/old/1610733252_1992518850.jpeg",
    //   link: "https://al-khandak.com/posts/موقع-الديالكتيك-والاغتراب-عند-ماركس",
    },
    {
      title: `'الملك يقفُ عارياً'"؛ أيّ مستقبل لأوروبا؟"`,
      date: "13/11/2021",
      views: 2,
      image:
        "https://al-khandak.com/storage/posts/old/1591033329_554978220.jpeg",
    //   link: `https://al-khandak.com/posts/الملك-يقفُ-عارياً&quot;؛-أيّ-مستقبل-لأوروبا؟&quot;`,
    },
    {
      title: `'إعادة ضبط كبيرة'" نعم، ولتَكن حقيقية (1)"`,
      date: "13/11/2021",
      views: 9,
      image:
        "https://al-khandak.com/storage/posts/old/1615483501_64475813.jpeg",
    //   link: `https://al-khandak.com/posts/إعادة-ضبط-كبيرة&quot;-نعم،-ولتَكن-حقيقية-1-&quot;`,
    },
    {
      title: "لا حياد في قضايا العدالة",
      date: "13/11/2021",
      views: 4,
      image:
        "https://al-khandak.com/storage/posts/old/1597088882_728975258.jpeg",
    //   link: "https://al-khandak.com/posts/لا-حياد-في-قضايا-العدالة",
    },
    {
      title: "الأوجه الأربعة للتصوّف في العصر الحديث",
      date: "13/11/2021",
      views: 11,
      image:
        "https://al-khandak.com/storage/posts/old/1625417150_11779369.jpeg",
    //   link: "https://al-khandak.com/posts/الأوجه-الأربعة-للتصوّف-في-العصر-الحديث",
    },
    {
      title: "الحقبة الريغانية وسياسة الترحيل الصناعي",
      date: "13/11/2021",
      views: 5,
      image:
        "https://al-khandak.com/storage/posts/old/1599920708_2141382091.jpeg",
    //   link: "https://al-khandak.com/posts/الحقبة-الريغانية-وسياسة-الترحيل-الصناعي",
    },
    {
      title: "العنف كضرورة رأسمالية",
      date: "13/11/2021",
      views: 6,
      image:
        "https://al-khandak.com/storage/posts/old/1604065556_1087953091.jpeg",
    //   link: "https://al-khandak.com/posts/العنف-كضرورة-رأسمالية",
    },
    {
      title: "العنف كضرورة رأسمالية (2)",
      date: "13/11/2021",
      views: 7,
      image:
        "https://al-khandak.com/storage/posts/old/1607034564_419840362.jpeg",
    //   link: "https://al-khandak.com/posts/العنف-كضرورة-رأسمالية-2",
    },
  ];

  return (
    <div className="container mx-auto  px-4">
      <h1 className="text-black text-3xl font-bold mb-6">فلسفة</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href={post.link}
            className="block group rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                <div className="flex items-center text-gray-300 text-sm space-x-4 rtl:space-x-reverse">
                  <p className="flex items-center gap-1">
                    <i className="fas fa-clock text-xs"></i>
                    {post.date}
                  </p>
                  <p className="flex items-center gap-1">
                    <i className="fas fa-newspaper text-xs"></i>
                    {post.views}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
