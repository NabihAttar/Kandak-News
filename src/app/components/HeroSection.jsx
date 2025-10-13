"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);
  const [dir, setDir] = useState("rtl");

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

  return (
    <div className="carousel-item">
      <div
        className="w-full relative bg-cover bg-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://al-khandak.com/storage/posts/March2025/Oi8mhhMp1FSWiw5Gp1AR.jpg')",
        }}
      >
        {/* Overlay box (flips with dir) */}
        <div
          className={`absolute bottom-5 ${sideClass} bg-black/60 p-4 max-w-sm`}
        >
          <p className="text-white text-sm mb-2">{t("أججت فضيحة اغتصاب أسير فلسطيني نهاية شهر يوليو/تموز العام الماضي مجتمع  بعد اعتقال الجنود المتهمين بجريمة الاغتصاب والتعذيب")}</p>
          <Link
            href="/article"
            className="text-white underline hover:text-gray-200 text-sm"
          >
            {t("hero.readMore")}
          </Link>
        </div>
      </div>
    </div>
  );
}
