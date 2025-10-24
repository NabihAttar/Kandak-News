// src/app/page.js
"use client";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import LatestIssueButton from "./components/LatestIssueButton";
import LocalNewsSection from "./components/LocalNewsSection";
import VideoSection from "./components/VideoSection";
import InfographicsSection from "./components/InfographicsSection";
import EditorialArticleGrid from "./(pages)/editorial-article/page";
import { getArticles, getHomepage, clearCache } from "../core/repo.js";
import i18n from "i18next";

const localPosts = [
  {
    title: "النازحون ودولتنا السارحة",
    date: "07/10/2024",
    views: "13",
    image:
      "https://al-khandak.com/storage/posts/October2024/XuLuTOnQtWA1Bdv2JmwV.jpg",
    // url: "",
  },
  {
    title: "توتال وأهل السلطة: الخديعة الكبرى",
    date: "09/07/2022",
    views: "12",
    image:
      "https://al-khandak.com/storage/posts/July2022/alBOjC3pVUlwUyu5azYB.jpg",
    // url: "",
  },
  {
    title: "قطاع الاتصالات: الموت المدولر",
    date: "03/07/2022",
    views: "12",
    image:
      "https://al-khandak.com/storage/posts/July2022/pSVLdQD78BTMihKbpDCQ.jpg",
    // url: "",
  },
];

const internationalPosts = [
  {
    title: '"إسرائيل" وسوريا... والماء ثالثهما',
    date: "29/03/2025",
    views: "13",
    image:
      "https://al-khandak.com/storage/posts/March2025/fU5oIDYo19Gixu41pKLn.jpg",
    // url: "",
  },
  {
    title: "ثورة لا يمكن التنبؤ بمآلاتها",
    date: "26/12/2024",
    views: "13",
    image:
      "https://al-khandak.com/storage/posts/December2024/VVjPuyZDk2HmFkEaMfGW.jpg",
    // url: "",
  },
  {
    title: "عَلَم جديد، مشاكل قديمة",
    date: "20/12/2024",
    views: "13",
    image:
      "https://al-khandak.com/storage/posts/December2024/8toBbq28FcGaLeuiGN7u.jpg",
    // url: "",
  },
];

const infographicItems = [
  {
    title: "سياسة الإفقار في لبنان",
    image:
      "https://al-khandak.com/storage/infographics/December2021/AGwhl2yOpIzZOhA3qeCJ.jpg",
    // href: "",
  },
  {
    title: "سياسة الإفقار في لبنان",
    image:
      "https://al-khandak.com/storage/infographics/December2021/4BoFHmALwHqx0xdMjxDa.jpg",
    // href: "",
  },
];
export default function Home() {
  const [bannerData, setBannerData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Function to manually refresh data (clears cache and refetches)
  const refreshData = async () => {
    clearCache();
    setIsLoading(true);
    try {
      const articles = await getHomepage();
      if (articles?.data?.banner) {
        setBannerData(articles.data.banner);
      }
    } catch (error) {
      console.error("Error refreshing data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchArticles = async (locale = null) => {
      try {
        setIsLoading(true);
        const articles = await getHomepage(locale);
        console.log("Articles response:", articles);

        // Extract banner data from the response
        if (articles?.data?.banner) {
          setBannerData(articles.data.banner);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Initial fetch
    fetchArticles();

    // Listen for language changes
    const handleLanguageChange = (lng) => {
      console.log("Language changed to:", lng);
      // Clear cache for the old locale to ensure fresh data
      clearCache();
      fetchArticles(lng);
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup listener on unmount
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  // Loading component
  if (isLoading) {
    return (
      <main className="bg-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <HeroSection bannerData={bannerData} />
      {/* <LatestIssueButton /> */}

      <LocalNewsSection
        leftTitleKey="sections.locals"
        leftHref="/mhlyat"
        leftPosts={localPosts}
        rightTitleKey="sections.international"
        rightHref="/international-affairs"
        rightPosts={internationalPosts}
      />

      <VideoSection />

      <LocalNewsSection
        leftTitleKey="sections.opinion"
        leftHref="/opinion"
        leftPosts={localPosts}
        rightTitleKey="sections.israelis"
        rightHref="/israeli-occupation"
        rightPosts={internationalPosts}
      />
      <InfographicsSection items={infographicItems} />

      <LocalNewsSection
        leftTitleKey="sections.cultureMedia"
        leftHref="/culture-and-media"
        leftPosts={localPosts}
        rightTitleKey="sections.philosophy"
        rightHref="/philosophy"
        rightPosts={internationalPosts}
      />

      <InfographicsSection items={infographicItems} />

      <LocalNewsSection
        leftTitleKey="sections.africa"
        leftHref="/africa"
        leftPosts={localPosts}
        rightTitleKey="sections.sports"
        rightHref="/sports"
        rightPosts={internationalPosts}
      />
    </main>
  );
}
