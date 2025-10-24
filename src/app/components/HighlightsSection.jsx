"use client";
import { useState } from "react";

export default function HighlightsSection({
  bannerData,
  selectedArticleIndex,
  onArticleSelect,
}) {
  // Use real data from bannerData or fallback to hardcoded data
  const articles = bannerData?.articles || [
    {
      id: 0,
      title: "تقاطعات الاستعمار المعرفي: الاغتصاب واستحقاق المستوطن",
      cover: {
        url: "https://al-khandak.com/storage/posts/March2025/Oi8mhhMp1FSWiw5Gp1AR.jpg",
      },
    },
    {
      id: 1,
      title: `"إسرائيل" وسوريا... والماء ثالثهما`,
      cover: {
        url: "https://al-khandak.com/storage/posts/March2025/fU5oIDYo19Gixu41pKLn.jpg",
      },
    },
    {
      id: 2,
      title: "من وحدة الساحات إلى ميثاق الثغور",
      cover: {
        url: "https://al-khandak.com/storage/posts/April2025/ZJnMSz2v83yVIA9lGDRB.jpg",
      },
    },
  ];

  return (
    <div className="flex flex-col md:flex-row border border-gray-400 bg-white">
      {articles.map((article, index) => (
        <button
          key={article.id || index}
          onClick={() => onArticleSelect(index)}
          className={`w-full md:w-1/3 p-4 transition-colors ${
            selectedArticleIndex === index ? "bg-gray-200" : "bg-white"
          } ${index !== articles.length - 1 ? "border-l border-gray-400" : ""}`}
        >
          <div className="flex items-center gap-4">
            <div
              className="min-h-[80px] w-24 bg-center bg-cover"
              style={{
                backgroundImage: `url(${article.cover?.url ? `http://46.62.165.97:1337${article.cover.url}` : article.cover?.url || "https://al-khandak.com/storage/posts/March2025/Oi8mhhMp1FSWiw5Gp1AR.jpg"})`,
              }}
            ></div>
            <p className="text-black text-sm text-right">{article.title}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
