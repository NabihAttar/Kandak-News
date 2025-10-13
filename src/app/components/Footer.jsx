"use client";

import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");

  const categories = [
    [t("cat.editorial"), "editorial-article"],
    [t("cat.israelis"), "israeli-occupation"],
    [t("cat.international"), "international-affairs"],
    [t("cat.africa"), "africa"],
    [t("cat.locals"), "mhlyat"],
    [t("cat.opinion"), "opinion"],
    [t("cat.economy"), "economy"],
    [t("cat.philosophy"), "philosophy"],
    [t("cat.cultureMedia"), "culture-and-media"],
    [t("cat.sports"), "sports"],
    [t("cat.folders"), "folders"],
    [t("cat.videos"), "videos"],
    [t("cat.infographics"), "infographics"],
    [t("cat.privacy"), "privacy-policy"],
    [t("cat.contact"), "contact-us"],
  ];

  return (
    <div className="w-full bg-gray-100 mt-4">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Subscription Box */}
          <div className="bg-gray-300 text-black p-6 md:w-1/4 w-full text-center">
            <p className="mb-4">{t("newsletter.title")}</p>

            <input
              type="email"
              name="subscribe-email"
              placeholder={t("newsletter.emailPlaceholder")}
              className="w-full px-3 py-2 rounded text-black bg-white"
            />

            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mt-4 flex items-center gap-2 mx-auto cursor-pointer"
              type="button"
            >
              <PaperAirplaneIcon className="w-5 h-5 -rotate-45 group-hover:translate-x-1 transition-transform" />
              {t("newsletter.subscribe")}
            </button>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-center text-start mt-10">
            {[
              categories.slice(0, 3),
              categories.slice(3, 6),
              categories.slice(6, 9),
              categories.slice(9, 10),
              categories.slice(10, 13),
              categories.slice(13, 16),
            ].map((group, i) => (
              <ul key={i} className="list-none space-y-2 text-sm text-center md:text-start">
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
