// src/app/page.js
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import LatestIssueButton from "./components/LatestIssueButton";
import LocalNewsSection from "./components/LocalNewsSection";
import VideoSection from "./components/VideoSection";
import InfographicsSection from "./components/InfographicsSection";
import EditorialArticleGrid from './(pages)/editorial-article/page';

const localPosts = [
  {
    title: "النازحون ودولتنا السارحة",
    date: "07/10/2024",
    views: "13",
    image: "https://al-khandak.com/storage/posts/October2024/XuLuTOnQtWA1Bdv2JmwV.jpg",
    // url: "",
  },
  {
    title: "توتال وأهل السلطة: الخديعة الكبرى",
    date: "09/07/2022",
    views: "12",
    image: "https://al-khandak.com/storage/posts/July2022/alBOjC3pVUlwUyu5azYB.jpg",
    // url: "",
  },
  {
    title: "قطاع الاتصالات: الموت المدولر",
    date: "03/07/2022",
    views: "12",
    image: "https://al-khandak.com/storage/posts/July2022/pSVLdQD78BTMihKbpDCQ.jpg",
    // url: "",
  },
];

const internationalPosts = [
  {
    title: '"إسرائيل" وسوريا... والماء ثالثهما',
    date: "29/03/2025",
    views: "13",
    image: "https://al-khandak.com/storage/posts/March2025/fU5oIDYo19Gixu41pKLn.jpg",
    // url: "",
  },
  {
    title: "ثورة لا يمكن التنبؤ بمآلاتها",
    date: "26/12/2024",
    views: "13",
    image: "https://al-khandak.com/storage/posts/December2024/VVjPuyZDk2HmFkEaMfGW.jpg",
    // url: "",
  },
  {
    title: "عَلَم جديد، مشاكل قديمة",
    date: "20/12/2024",
    views: "13",
    image: "https://al-khandak.com/storage/posts/December2024/8toBbq28FcGaLeuiGN7u.jpg",
    // url: "",
  },
];

const infographicItems = [
  {
    title: "سياسة الإفقار في لبنان",
    image: "https://al-khandak.com/storage/infographics/December2021/AGwhl2yOpIzZOhA3qeCJ.jpg",
    // href: "",
  },
  {
    title: "سياسة الإفقار في لبنان",
    image: "https://al-khandak.com/storage/infographics/December2021/4BoFHmALwHqx0xdMjxDa.jpg",
    // href: "",
  },
];
export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <HighlightsSection />
      {/* <LatestIssueButton /> */}

      <LocalNewsSection
        leftTitleKey="sections.locals"
        leftHref="/categories/mhlyat"
        leftPosts={localPosts}
        rightTitleKey="sections.international"
        rightHref="/categories/international-affairs"
        rightPosts={internationalPosts}
      />

      <VideoSection />

      <LocalNewsSection
        leftTitleKey="sections.opinion"
        leftHref="/categories/economy"
        leftPosts={localPosts}
        rightTitleKey="sections.israelis"
        rightHref="/categories/culture-and-media"
        rightPosts={internationalPosts}
      />
      <InfographicsSection items={infographicItems} />

      <LocalNewsSection
        leftTitleKey="sections.cultureMedia"
        leftHref="/categories/economy"
        leftPosts={localPosts}
        rightTitleKey="sections.philosophy"
        rightHref="/categories/culture-and-media"
        rightPosts={internationalPosts}
      />

      <InfographicsSection items={infographicItems} />

      <LocalNewsSection
        leftTitleKey="sections.africa"
        leftHref="/categories/economy"
        leftPosts={localPosts}
        rightTitleKey="sections.sports"
        rightHref="/categories/culture-and-media"
        rightPosts={internationalPosts}
      />


    </main>
  );

}
