// "use client";

// import { useEffect } from "react";
// import i18n from "i18next";

// const langToDir = (lng) => (lng === "ar" ? "rtl" : "ltr");

// export default function ClientLangSync() {
//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem("lang") || "ar";

//       // apply to <html>
//       document.documentElement.setAttribute("lang", stored);
//       document.documentElement.setAttribute("dir", langToDir(stored));

//       // write cookie so SSR picks it up next request
//       document.cookie = `lang=${stored}; path=/; max-age=${60 * 60 * 24 * 365}`;

//       // ensure i18n is on the same lang
//       if (i18n.language !== stored) {
//         i18n.changeLanguage(stored).catch(() => {});
//       }
//     } catch {}
//   }, []);

//   return null;
// }

"use client";
import { useEffect } from "react";
import i18n from "i18next";

const langToDir = (lng) => (lng === "ar" ? "rtl" : "ltr");

export default function ClientLangSync() {
  useEffect(() => {
    const current = i18n.language || "ar";
    document.documentElement.setAttribute("lang", current);
    document.documentElement.setAttribute("dir", langToDir(current));
    document.cookie = `lang=${current}; path=/; max-age=${60 * 60 * 24 * 365}`;

    const onChange = (lng) => {
      document.documentElement.setAttribute("lang", lng);
      document.documentElement.setAttribute("dir", langToDir(lng));
      document.cookie = `lang=${lng}; path=/; max-age=${60 * 60 * 24 * 365}`;
    };
    i18n.on("languageChanged", onChange);
    return () => i18n.off("languageChanged", onChange);
  }, []);
  return null;
}
