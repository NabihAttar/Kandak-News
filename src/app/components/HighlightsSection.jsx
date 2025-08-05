"use client";
import { useState } from "react";

export default function HighlightsSection() {
  const [activeId, setActiveId] = useState(null);

  const highlights = [
    {
      id: 0,
      title: "تقاطعات الاستعمار المعرفي: الاغتصاب واستحقاق المستوطن",
      image: "https://al-khandak.com/storage/posts/March2025/Oi8mhhMp1FSWiw5Gp1AR.jpg",
    },
    {
      id: 1,
      title: `"إسرائيل" وسوريا... والماء ثالثهما`,
      image: "https://al-khandak.com/storage/posts/March2025/fU5oIDYo19Gixu41pKLn.jpg",
    },
    {
      id: 2,
      title: "من وحدة الساحات إلى ميثاق الثغور",
      image: "https://al-khandak.com/storage/posts/April2025/ZJnMSz2v83yVIA9lGDRB.jpg",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row border border-gray-400 bg-white">
      {highlights.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveId(item.id)}
          className={`w-full md:w-1/3 p-4 transition-colors ${
            activeId === item.id ? "bg-gray-200" : "bg-white"
          } ${item.id !== 2 ? "border-l border-gray-400" : ""}`}
        >
          <div className="flex items-center gap-4">
            <div
              className="min-h-[80px] w-24 bg-center bg-cover "
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <p className="text-black text-sm text-right">{item.title}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
