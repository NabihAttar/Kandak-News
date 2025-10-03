import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Footer() {
  const categories = [
    ["افتتاحية", "editorial-article"],
    ["اسرائيليات", "israeli-occupation"],
    ["عربي ودولي", "international-affairs"],
    ["افريقيا", "africa"],
    ["محليات", "mhlyat"],
    ["رأي", "opinion"],
    ["اقتصاد", "economy"],
    ["فلسفة", "philosophy"],
    ["ثقافة وميديا", "culture-and-media"],
    ["رياضة", "sports"],
    ["ملفات", "folders"],
    ["فيديو", "videos"],
    ["صور الغلاف", "infographics"],
    ["من نحن", "about-us"],
    ["شروط الخصوصية", "privacy-policy"],
    ["تواصل معنا", "contact-us"],
  ];

  return (
    <div className="w-full mt-[-0px] bg-gray-100 mt-4">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Subscription Box */}
          <div className="bg-gray-300 text-black p-6 md:w-1/4 w-full text-center">
            <p className="mb-4">هل تريد الاشتراك في نشرتنا الإخبارية؟</p>
            <input
              type="text"
              name="subscribe-email"
              placeholder="البريد الإلكتروني"
              className="w-full px-3 py-2 rounded text-black bg-white"
            />

            <button className=" bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mt-4 flex items-center gap-2 mx-auto cursor-pointer" >
              <PaperAirplaneIcon className="w-5 h-5 rotate-320 group-hover:translate-x-1 transition-transform " />
              اشتراك
            </button>
          </div>

          {/* Links Grid */}
<div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center text-right mt-10">            {[
              categories.slice(0, 3),
              categories.slice(3, 6),
              categories.slice(6, 9),
              categories.slice(9, 10),
              categories.slice(10, 13),
              categories.slice(13, 16),
            ].map((group, i) => (
             <ul key={i} className="list-none space-y-2 text-sm text-center md:text-right">

                {group.map(([label, path]) => (
                  <li key={path}>
                    <Link
                      href={`/${path}`}
                      className="text-gray-800 hover:text-red-600 transition-colors duration-200 cursor-pointer font-bold"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
