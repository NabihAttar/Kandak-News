import React from "react";

export default function CultureMediaSection() {
    const posts = [
        {
            title: "الذكاء الإصطناعي فلسفياً",
            date: "03/01/2025",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/January2025/ofZxDDzepNESn3eWrbSS.jpg",
            //   link: "https://al-khandak.com/posts/althkaa-alistnaay-flsfya",
        },
        {
            title: "ذاكرة لن تُمحى",
            date: "18/10/2024",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/October2024/yshTie0P8aCxlp3OwDOm.jpg",
            //   link: "https://al-khandak.com/posts/thakrh-ln-t-mha",
        },
        {
            title: "التدين السائل والروحانية الجديدة",
            date: "25/09/2024",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/September2024/UXndKueXDXQlZ9N2kw6I.jpg",
            //   link: "https://al-khandak.com/posts/altdyn-alsael-walrwhanyh-aljdydh",
        },
        {
            title: "الغرب.. عقدة الذنب والسلوك التعويضي",
            date: "22/04/2024",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/April2024/52r2bojQju6YLRYkkZ0A.jpg",
            //   link: "https://al-khandak.com/posts/alghrb-aqdh-althnb-walslwk-altawydhy",
        },
        {
            title: "ذاكرة الجماعة الفلسطينية: رواية مستمرّة",
            date: "17/04/2024",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/April2024/R8MUAlUgWQGQ7mXCFabs.jpg",
            //   link: "https://al-khandak.com/posts/thakrh-aljmaah-alflstynyh-rwayh-mstmr-h",
        },
        {
            title: "بيان إرهابي",
            date: "10/04/2024",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/April2024/9laPgScMeZAoDon2jinp.jpg",
            //   link: "https://al-khandak.com/posts/byan-irhaby",
        },
        {
            title: "حربنا على النازية المستمرة",
            date: "06/01/2024",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/January2024/8eER39myBiFLqRiO1lZH.jpg",
            //   link: "https://al-khandak.com/posts/hrbna-ala-alnazyh-almstmrh",
        },
        {
            title: "السابع من أكتوبر: الثابت الإقليمي والمتحول العالمي",
            date: "06/01/2024",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/January2024/HCDsNaFRiiYRGXTXKShx.jpg",
            //   link: "https://al-khandak.com/posts/alsaba-mn-aktwbr-althabt-aliqlymy-walmthwl-alaalmy",
        },
        {
            title: "حوار مع المفكر العربي الدكتور علي القادري",
            date: "10/12/2023",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/December2023/Dwy5J24gBJg0aCxsl7vd.jpg",
            //   link: "https://al-khandak.com/posts/hwar-ma-almfkr-alarby-aldktwr-aly-alqadry",
        },
        {
            title: "حوار مع محمد الضيف",
            date: "06/11/2023",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/November2023/tsoJTWjr7lntc9ZXlW1a.jpg",
            //   link: "https://al-khandak.com/posts/hwar-ma-mhmd-aldhyf",
        },
        {
            title:
                'إيلان بابيه: نموذج "غزة" في مواجهة استراتيجيّة "الحدث المنفصل"',
            date: "26/10/2023",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/October2023/E0UmSvc2vH6BwRKS5rv0.jpg",
            //   link: "https://al-khandak.com/posts/iylan-babyh-nmwthj-ghzh-fy-mwajhh-astratyjy-h-alhdth-almnfsl",
        },
        {
            title: "حرب الصّورة والإعلام: استعادة لإدوارد سعيد",
            date: "22/10/2023",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/October2023/f1EnY1mwBiwq1Y8BKC7r.jpg",
            //   link: "https://al-khandak.com/posts/hrb-als-wrh-walialam-astaadh-lidward-sayd",
        },
        {
            title: 'من ذاكرة سلمان أبو ستة: كيف اقتطعت "إسرائيل" نصف القطاع',
            date: "15/10/2023",
            views: 13,
            image:
                "https://al-khandak.com/storage/posts/October2023/raz5X3Ml2FuJd75gHJKC.png",
            //   link: "https://al-khandak.com/posts/mn-thakrh-slman-abw-sth-kyf-aqttat-israeyl-nsf-alqtaa",
        },
        {
            title: "عن كوارثنا الطبيعية والعقلية",
            date: "09/02/2023",
            views: 12,
            image:
                "https://al-khandak.com/storage/posts/February2023/kZiYlMXJfFBtHCAftJJB.jpg",
            //   link: "https://al-khandak.com/posts/an-kwarthna-altbyayh-walaqlyh",
        },
        {
            title: '"الندم".. أنين عشرية سورية',
            date: "06/02/2023",
            views: 12,
            image:
                "https://al-khandak.com/storage/posts/February2023/cT7bN0S5s7ZKr7vAf8Nb.jpg",
            //   link: "https://al-khandak.com/posts/alndm-anyn-ashryh-swryh",
        },
    ];

    // Example pagination data (hardcoded for demo)
    const currentPage = 1;
    const totalPages = 9;

    // Generate page numbers array
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="container mx-auto  px-4">
            <h1 className="text-black text-3xl font-bold mb-6">ثقافة وميديا</h1>

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

            {/* Pagination */}
            <nav className="flex justify-center mt-10" aria-label="Pagination">
                <ul className="inline-flex items-center -space-x-px rtl:flex-row-reverse rtl:-space-x-reverse">
                    <li
                        className={`page-item ${currentPage === 1 ? "pointer-events-none opacity-50" : ""
                            }`}
                        aria-disabled={currentPage === 1}
                        aria-label="pagination.previous"
                    >
                        <span className="page-link inline-flex items-center justify-center px-3 py-2 rounded-l-lg border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 cursor-pointer">
                            ‹
                        </span>
                    </li>

                    {pages.map((page) => (
                        <li
                            key={page}
                            className={`page-item ${page === currentPage
                                    ? "z-10 bg-indigo-600 text-white border-indigo-600"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                } border border-gray-300 cursor-pointer`}
                            aria-current={page === currentPage ? "page" : undefined}
                        >
                            <a
                                // href={`https://al-khandak.com/categories/culture-and-media?page=${page}`}
                                className="page-link px-3 py-2 block"
                            >
                                {page}
                            </a>
                        </li>
                    ))}

                    <li
                        className={`page-item ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""
                            }`}
                        aria-disabled={currentPage === totalPages}
                        aria-label="pagination.next"
                    >
                        <a
                            // href={`https://al-khandak.com/categories/culture-and-media?page=${currentPage + 1}`}
                            rel="next"
                            className="page-link inline-flex items-center justify-center px-3 py-2 rounded-r-lg border border-gray-300 bg-white text-gray-500 hover:bg-gray-100"
                            aria-label="pagination.next"
                        >
                            ›
                        </a>

                    </li>
                </ul>
            </nav>
        </div>
    );
}
