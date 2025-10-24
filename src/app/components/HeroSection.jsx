"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function HeroSection({ bannerData }) {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);
  const [dir, setDir] = useState("rtl");
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);

  useEffect(() => {
    setMounted(true);

    const compute = () =>
      document?.documentElement?.getAttribute("dir") || "rtl";
    setDir(compute());

    const mo = new MutationObserver(() => setDir(compute()));
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    return () => mo.disconnect();
  }, []);

  if (!mounted) return null;

  const sideClass = dir === "rtl" ? "right-5" : "left-5";

  // Get the selected article from banner data
  const articles = bannerData?.articles || [];
  const featuredArticle = articles[selectedArticleIndex];
  const backgroundImage = featuredArticle?.cover?.url
    ? `http://46.62.165.97:1337${featuredArticle.cover.url}`
    : "https://al-khandak.com/storage/posts/March2025/Oi8mhhMp1FSWiw5Gp1AR.jpg";

  return (
    <div>
      {/* Hero Section */}
      <div className="carousel-item">
        <div
          className="w-full relative bg-cover bg-center min-h-[400px]"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}
        >
          {/* Overlay box (flips with dir) */}
          <div
            className={`absolute bottom-5 ${sideClass} bg-black/60 p-4 max-w-sm`}
          >
            {featuredArticle ? (
              <>
                <h2 className="text-white text-lg font-bold mb-2">
                  {featuredArticle.title}
                </h2>
                <p className="text-white text-sm mb-2">
                  {featuredArticle.description}
                </p>
                <Link
                  href={`/article/${featuredArticle.slug}`}
                  className="text-white underline hover:text-gray-200 text-sm"
                >
                  {t("hero.readMore")}
                </Link>
              </>
            ) : (
              <>
                <p className="text-white text-sm mb-2">
                  {t(
                    "أججت فضيحة اغتصاب أسير فلسطيني نهاية شهر يوليو/تموز العام الماضي مجتمع  بعد اعتقال الجنود المتهمين بجريمة الاغتصاب والتعذيب"
                  )}
                </p>
                <Link
                  href="/article"
                  className="text-white underline hover:text-gray-200 text-sm"
                >
                  {t("hero.readMore")}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Article Selection List */}
      {articles.length > 0 && (
        <div className="flex flex-col md:flex-row border border-gray-400 bg-white">
          {articles.map((article, index) => (
            <button
              key={article.id}
              onClick={() => setSelectedArticleIndex(index)}
              className={`w-full md:w-1/3 p-4 transition-colors ${
                selectedArticleIndex === index ? "bg-gray-200" : "bg-white"
              } ${index !== articles.length - 1 ? "border-l border-gray-400" : ""}`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="min-h-[80px] w-24 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${article.cover?.url ? `http://46.62.165.97:1337${article.cover.url}` : "https://al-khandak.com/storage/posts/March2025/Oi8mhhMp1FSWiw5Gp1AR.jpg"})`,
                  }}
                ></div>
                <p className="text-black text-sm text-right">{article.title}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
