import IntegratedHeroSection from "../components/IntegratedHeroSection";
import LocalNewsSection from "../components/LocalNewsSection";
import InfographicsSection from "../components/InfographicsSection";
import VideoSection from "../components/VideoSection";
import LatestIssueButton from "../components/LatestIssueButton";
import { getHomepage } from "../../core/repo";

// Static data for sections
const localPosts = [
  {
    title: "النازحون ودولتنا السارحة",
    date: "07/10/2024",
    views: "13",
    image:
      "https://al-khandak.com/storage/posts/October2024/XuLuTOnQtWA1Bdv2JmwV.jpg",
  },
  {
    title: "توتال وأهل السلطة: الخديعة الكبرى",
    date: "09/07/2022",
    views: "12",
    image:
      "https://al-khandak.com/storage/posts/July2022/alBOjC3pVUlwUyu5azYB.jpg",
  },
  {
    title: "قطاع الاتصالات: الموت المدولر",
    date: "03/07/2022",
    views: "12",
    image:
      "https://al-khandak.com/storage/posts/July2022/pSVLdQD78BTMihKbpDCQ.jpg",
  },
];

const internationalPosts = [
  {
    title: '"إسرائيل" وسوريا... والماء ثالثهما',
    date: "29/03/2025",
    views: "13",
    image:
      "https://al-khandak.com/storage/posts/March2025/fU5oIDYo19Gixu41pKLn.jpg",
  },
  {
    title: "ثورة لا يمكن التنبؤ بمآلاتها",
    date: "26/12/2024",
    views: "13",
    image:
      "https://al-khandak.com/storage/posts/December2024/VVjPuyZDk2HmFkEaMfGW.jpg",
  },
  {
    title: "عَلَم جديد، مشاكل قديمة",
    date: "20/12/2024",
    views: "13",
    image:
      "https://al-khandak.com/storage/posts/December2024/8toBbq28FcGaLeuiGN7u.jpg",
  },
];

const infographicItems = [
  {
    title: "سياسة الإفقار في لبنان",
    image:
      "https://al-khandak.com/storage/infographics/December2021/AGwhl2yOpIzZOhA3qeCJ.jpg",
  },
  {
    title: "سياسة الإفقار في لبنان",
    image:
      "https://al-khandak.com/storage/infographics/December2021/4BoFHmALwHqx0xdMjxDa.jpg",
  },
];

export default async function Home({ params }) {
  const { lang } = params;

  // Fetch homepage data with the current language
  const homepageData = await getHomepage(lang);
  const bannerData = homepageData?.data?.banner;

  // Debug logging
  console.log("Homepage data:", homepageData);
  console.log("Banner data:", bannerData);
  console.log("Banner articles:", bannerData?.articles);

  return (
    <main className="bg-white">
      <IntegratedHeroSection bannerData={bannerData} />
      {/* <LatestIssueButton /> */}

      <LocalNewsSection
        leftTitleKey="sections.locals"
        leftHref={`/${lang}/mhlyat`}
        leftPosts={localPosts}
        rightTitleKey="sections.international"
        rightHref={`/${lang}/international-affairs`}
        rightPosts={internationalPosts}
      />

      <VideoSection />

      <LocalNewsSection
        leftTitleKey="sections.opinion"
        leftHref={`/${lang}/opinion`}
        leftPosts={localPosts}
        rightTitleKey="sections.israelis"
        rightHref={`/${lang}/israeli-occupation`}
        rightPosts={internationalPosts}
      />

      <InfographicsSection items={infographicItems} />

      <LocalNewsSection
        leftTitleKey="sections.cultureMedia"
        leftHref={`/${lang}/culture-and-media`}
        leftPosts={localPosts}
        rightTitleKey="sections.philosophy"
        rightHref={`/${lang}/philosophy`}
        rightPosts={internationalPosts}
      />

      <InfographicsSection items={infographicItems} />

      <LocalNewsSection
        leftTitleKey="sections.africa"
        leftHref={`/${lang}/africa`}
        leftPosts={localPosts}
        rightTitleKey="sections.sports"
        rightHref={`/${lang}/sports`}
        rightPosts={internationalPosts}
      />
    </main>
  );
}
