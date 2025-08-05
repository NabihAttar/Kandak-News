import React from "react";

const israeliOccupationPosts = [
  {
    id: 1,
    // href: "https://al-khandak.com/posts/khth-aljnralat-llhrb-ala-ghzh",
    img: "https://al-khandak.com/storage/posts/October2024/ro5ZSGk2UMPx1VErdEJC.jpg",
    title: "خطة الجنرالات للحرب على غزة",
    date: "11/10/2024",
    views: 13,
  },
  {
    id: 2,
    // href: "https://al-khandak.com/posts/hwl-aldfaa-alsarwkhy-alisraeyly",
    img: "https://al-khandak.com/storage/posts/April2024/iuixj8ZdMyIAWCEtQIuk.jpeg",
    title: "حول الدفاع الصاروخي الإسرائيلي",
    date: "17/04/2024",
    views: 13,
  },
  {
    id: 3,
    // href: "https://al-khandak.com/posts/sawd-aldynyh-alsyasyh-fy-israeyl-1",
    img: "https://al-khandak.com/storage/posts/old/1621343628_458338697.jpeg",
    title: 'صعود الدينية السياسية في "إسرائيل" (1)',
    date: "31/10/2023",
    views: 13,
  },
  {
    id: 4,
    // href: "https://al-khandak.com/posts/sawd-aldynyh-alsyasyh-fy-israeyl-2",
    img: "https://al-khandak.com/storage/posts/old/1621535411_867011758.jpeg",
    title: 'صعود الدينية السياسية في "إسرائيل" (2)',
    date: "31/10/2023",
    views: 13,
  },
  {
    id: 5,
    // href: "https://al-khandak.com/posts/qraah-fy-alhrwb-alisraeylyh-ala-ghzh",
    img: "https://al-khandak.com/storage/posts/October2023/vegSz6PWAl0NPdt1R6e3.jpeg",
    title: "قراءة في الحروب الإسرائيلية على غزة",
    date: "26/10/2023",
    views: 13,
  },
  {
    id: 6,
    // href: "https://al-khandak.com/posts/byn-hsaryn",
    img: "https://al-khandak.com/storage/posts/October2023/PgVkpeS0fwAED1VekLeY.jpg",
    title: "بين حصارين",
    date: "19/10/2023",
    views: 13,
  },
  {
    id: 7,
    // href: "https://al-khandak.com/posts/tqdyr-mwqf-alalaqat-alrwsyh-alisraeylyh-2",
    img: "https://al-khandak.com/storage/posts/November2022/Fvjy6bZeB0si3zNORQTS.jpg",
    title: "تقدير موقف: العلاقات الروسية - الإسرائيلية (2)",
    date: "17/11/2022",
    views: 12,
  },
  {
    id: 8,
    // href: "https://al-khandak.com/posts/tqdyr-mwqf-alalaqat-alrwsyh-alisraeylyh-1",
    img: "https://al-khandak.com/storage/posts/November2022/D82PqbJh6feg0fdQCNqH.jpg",
    title: "تقدير موقف: العلاقات الروسية - الإسرائيلية (1)",
    date: "15/11/2022",
    views: 12,
  },
  {
    id: 9,
    // href: "https://al-khandak.com/posts/jnwb-lbnan-stalynjrad",
    img: "https://al-khandak.com/storage/posts/August2022/gSWLeWLsXJa1m5XRyoNI.jpg",
    title: "جنوب لبنان: ستالينجراد",
    date: "26/08/2022",
    views: 12,
  },
  {
    id: 10,
    // href: "https://al-khandak.com/posts/karysh-1-alabasyh-2",
    img: "https://al-khandak.com/storage/posts/August2022/N6ZASTwoKxeUzR0xITgA.jpg",
    title: 'كاريش 1: "العباسية 2"؟',
    date: "03/08/2022",
    views: 12,
  },
  {
    id: 11,
    // href: "https://al-khandak.com/posts/tqryr-astratyjyh-alghaz-alisraeylyh",
    img: "https://al-khandak.com/storage/posts/July2022/A3OxkombL5TyuraDX0UW.jpg",
    title: "تقرير: استراتيجية الغاز الإسرائيلية",
    date: "04/07/2022",
    views: 12,
  },
  {
    id: 12,
    // href: "https://al-khandak.com/posts/israeyl-walghaz-lanh-qayyn",
    img: "https://al-khandak.com/storage/posts/July2022/9BBGvLbbGbYevqbrHxce.jpg",
    title: '"إسرائيل" والغاز: لعنة قايين',
    date: "03/07/2022",
    views: 12,
  },
  {
    id: 13,
    // href: "https://al-khandak.com/posts/alnkhbh-aljdydh-fy-israeyl-aljza-althany",
    img: "https://al-khandak.com/storage/posts/June2022/rAO6x5jQB4caxYl4lG8Z.jpg",
    title: 'النخبة الجديدة في "إسرائيل" – الجزء الثاني',
    date: "26/06/2022",
    views: 12,
  },
  {
    id: 14,
    // href: "https://al-khandak.com/posts/fy-tfkyk-astratyjyh-hlf-alatraf",
    img: "https://al-khandak.com/storage/posts/June2022/HPsg1CiuyxXm5GUE0Hni.jpg",
    title: 'في تفكيك استراتيجية "حلف الأطراف"',
    date: "21/06/2022",
    views: 12,
  },
  {
    id: 15,
    // href: "https://al-khandak.com/posts/alnkhbh-aljdydh-fy-israeyl-aljza-alawl",
    img: "https://al-khandak.com/storage/posts/June2022/NZOHO9lkDFTI6xJoZ7Y6.jpg",
    title: 'النخبة الجديدة في "إسرائيل" - الجزء الأول',
    date: "21/06/2022",
    views: 12,
  },
];

function Pagination() {
  return (
    <nav className="mt-8 flex justify-center">
      <ul className="inline-flex items-center -space-x-px">
        <li className="page-item disabled" aria-disabled="true" aria-label="pagination.previous">
          <span className="page-link cursor-not-allowed px-3 py-2 rounded-l border border-gray-300 bg-gray-200 text-gray-500">
            ‹
          </span>
        </li>
        <li className="page-item active" aria-current="page">
          <span className="page-link px-3 py-2 border border-gray-300 bg-red-600 text-black">1</span>
        </li>
        <li className="page-item">
          <a
            // href="https://al-khandak.com/categories/israeli-occupation?page=2"
            className="page-link px-3 py-2 border border-gray-300 hover:bg-gray-100"
          >
            2
          </a>
        </li>
        <li className="page-item">
          <a
            // href="https://al-khandak.com/categories/israeli-occupation?page=3"
            className="page-link px-3 py-2 border border-gray-300 hover:bg-gray-100"
          >
            3
          </a>
        </li>
        <li className="page-item">
          <a
            // href="https://al-khandak.com/categories/israeli-occupation?page=4"
            className="page-link px-3 py-2 border border-gray-300 hover:bg-gray-100"
          >
            4
          </a>
        </li>
        <li className="page-item">
          <a
            // href="https://al-khandak.com/categories/israeli-occupation?page=5"
            className="page-link px-3 py-2 border border-gray-300 hover:bg-gray-100"
          >
            5
          </a>
        </li>
        <li className="page-item">
          <a
            // href="https://al-khandak.com/categories/israeli-occupation?page=2"
            rel="next"
            aria-label="pagination.next"
            className="page-link px-3 py-2 rounded-r border border-gray-300 hover:bg-gray-100"
          >
            ›
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default function IsraeliOccupationGrid() {
  return (
    <div className="container mx-auto  px-4">
      <h1 className="text-black ms-5 mb-4 text-3xl font-bold">اسرائيليات</h1>

      <div className="grid gap-2 grid-cols-1 lg:grid-cols-3">
        {israeliOccupationPosts.map(({ id, href, img, title, date, views }) => (
          <div key={id} className="col-span-1">
            <a href={href} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative">
                <img
                  src={img}
                  alt={title}
                  width="100%"
                  height="300"
                  className="w-full h-[300px] object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <div className="flex justify-between text-sm mt-1 text-gray-300">
                    <p className="flex items-center gap-1">
                      <i className="fas fa-clock text-xs"></i>
                      <span>{date}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <i className="fas fa-newspaper text-xs"></i>
                      <span>{views}</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* <Pagination count={10} disabled /> */}
      
      
    </div>
  );
}
         