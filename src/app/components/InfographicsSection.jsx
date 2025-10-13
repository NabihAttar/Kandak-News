"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function InfographicsSection({ items = [] }) {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);
  const [dir, setDir] = useState("rtl");

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  // open/close
  const openLightbox = (item) => {
    setActive(item);
    setOpen(true);
  };
  const closeLightbox = useCallback(() => {
    setOpen(false);
    setActive(null);
  }, []);

  // after mount (prevents SSR hydration mismatch) + keep dir in sync
  useEffect(() => {
    setMounted(true);

    const compute = () => document?.documentElement?.getAttribute("dir") || "rtl";
    setDir(compute());
    const mo = new MutationObserver(() => setDir(compute()));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => mo.disconnect();
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeLightbox();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeLightbox]);

  if (!mounted || !items.length) return null;

  const headingAlign = dir === "rtl" ? "text-right" : "text-left";
  const closeBtnSide = dir === "rtl" ? "right-2" : "left-2";

  return (
    <section className="w-full bg-black py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className={`text-white text-3xl font-bold mb-6 ${headingAlign}`}>
          {t("infographicsSection.title")}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {items.map((it, i) => (
            <div key={i} className="w-full">
              <div
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(it)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openLightbox(it)}
                className="relative cursor-pointer overflow-hidden rounded outline-none"
                aria-label={t("infographicsSection.openAria", { title: it.title || "" })}
              >
                <img
                  src={it.image}
                  alt={it.title || ""}
                  className="w-full h-[380px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-4">
                  <div className="text-white font-semibold">{it.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/infographics"
            className="inline-block bg-red-600 text-white py-2 px-6 rounded hover:bg-red-900 transition"
          >
            {t("infographicsSection.viewMore")}
            
          </Link>
        </div>
      </div>

      {open && active && (
        <div
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.href || active.image}
              alt={active.title || ""}
              className="w-full h-auto rounded"
            />
            <button
              onClick={closeLightbox}
              aria-label={t("close")}
              className={`absolute top-2 ${closeBtnSide} bg-white/90 hover:bg-white rounded-full px-3 py-1 shadow`}
              type="button"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
