"use client";
import React, { useState, useEffect, useCallback } from "react";

export default function InfographicsSection({ items = [] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openLightbox = (item) => {
    setActive(item);
    setOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setOpen(false);
    setActive(null);
  }, []);

  // close on escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeLightbox]);

  if (!items.length) return null; // nothing to show

  return (
    <section className="w-full bg-gray-300 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-white text-3xl font-bold mb-6">إنفوغرافيك</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {items.map((it, i) => (
            <div key={i} className="w-full">
              <div
                onClick={() => openLightbox(it)}
                className="relative cursor-pointer overflow-hidden rounded"
                aria-label={`عرض الإنفوغرافيك: ${it.title}`}
              >
                <img
                  src={it.image}
                  alt={it.title}
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
          <a
            className="inline-block bg-[#1f2937] text-white py-2 px-6 rounded hover:bg-gray-700 transition cursor-pointer"
          >
            مشاهدة المزيد
          </a>
        </div>
      </div>

      {open && active && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.href}
              alt={active.title}
              className="w-full h-auto rounded"
            />
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
            >
              ✕
            </button>
            <div className="mt-2 text-center text-white font-medium">
              {active.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
