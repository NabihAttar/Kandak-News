import Link from "next/link";

const Pagination = ({ currentPage, totalPages, categoryId, lang }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getPageUrl = (page) => {
    return `/${lang}/article-category/${categoryId}?page=${page}`;
  };

  return (
    <div className="flex justify-center mt-8">
      <ul className="flex items-center gap-2">
        {/* Previous Button */}
        <li>
          {currentPage > 1 ? (
            <Link
              href={getPageUrl(currentPage - 1)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-800 text-white hover:bg-red-600"
              aria-label="Previous page"
            >
              <svg
                className="w-4 h-4 rtl:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>
          ) : (
            <button
              className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed"
              disabled
              aria-label="Previous page"
            >
              <svg
                className="w-4 h-4 rtl:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
        </li>

        {/* Page Numbers */}
        {pages.map((page) => (
          <li key={page}>
            <Link
              href={getPageUrl(page)}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-md leading-none ${
                page === currentPage
                  ? "bg-red-500 text-white"
                  : "bg-gray-800 text-white hover:bg-red-600"
              }`}
            >
              {page}
            </Link>
          </li>
        ))}

        {/* Next Button */}
        <li>
          {currentPage < totalPages ? (
            <Link
              href={getPageUrl(currentPage + 1)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-800 text-white hover:bg-red-600"
              aria-label="Next page"
            >
              <svg
                className="w-4 h-4 rtl:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          ) : (
            <button
              className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed"
              disabled
              aria-label="Next page"
            >
              <svg
                className="w-4 h-4 rtl:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
