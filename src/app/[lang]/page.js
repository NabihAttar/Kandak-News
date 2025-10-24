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
  const localAndInternationalData =
    homepageData?.data?.localandinternationalaffairs;
  const videoData = homepageData?.data?.video;
  const opinionData = homepageData?.data?.opinion;
  const cultureAndPhilosophyData = homepageData?.data?.cultureAndPhilosophy;
  // Debug logging
  console.log("Homepage data:", homepageData.data.opinion);

  // Transform API data to match component expectations
  const transformPostData = (posts) => {
    return (
      posts?.map((post) => ({
        title: post.title,
        date:
          post.datePublished ||
          new Date(post.publishedAt).toLocaleDateString("en-GB"),
        views: "0", // API doesn't provide view count
        image: `http://46.62.165.97:1337${post.cover?.url}` || "",
        url: `/${lang}/article/${post.slug}`,
      })) || []
    );
  };

  const localPostsFromAPI = transformPostData(localAndInternationalData?.local);
  const internationalPostsFromAPI = transformPostData(
    localAndInternationalData?.internations
  );
  const opinionPostsFromAPI = transformPostData(opinionData?.opinions);
  const israelisPostsFromAPI = transformPostData(opinionData?.israelis);
  const culturePostsFromAPI = transformPostData(
    cultureAndPhilosophyData?.cultures
  );
  const philosophyPostsFromAPI = transformPostData(
    cultureAndPhilosophyData?.philosophies
  );

  // Transform video data to match component expectations
  const transformVideoData = (videos) => {
    return (
      videos?.map((video) => ({
        id: video.videolink,
        title_ar: video.title,
        date: video.date,
      })) || []
    );
  };

  const videosFromAPI = transformVideoData(videoData);

  return (
    <main className="bg-white">
      <IntegratedHeroSection bannerData={bannerData} />
      {/* <LatestIssueButton /> */}

      <LocalNewsSection
        leftTitleKey="sections.locals"
        leftHref={`/${lang}/mhlyat`}
        leftPosts={localPostsFromAPI}
        rightTitleKey="sections.international"
        rightHref={`/${lang}/international-affairs`}
        rightPosts={internationalPostsFromAPI}
      />

      <VideoSection items={videosFromAPI} />

      <LocalNewsSection
        leftTitleKey="sections.opinion"
        leftHref={`/${lang}/opinion`}
        leftPosts={opinionPostsFromAPI}
        rightTitleKey="sections.israelis"
        rightHref={`/${lang}/israeli-occupation`}
        rightPosts={israelisPostsFromAPI}
      />

      <InfographicsSection items={infographicItems} />

      <LocalNewsSection
        leftTitleKey="sections.cultureMedia"
        leftHref={`/${lang}/culture-and-media`}
        leftPosts={culturePostsFromAPI}
        rightTitleKey="sections.philosophy"
        rightHref={`/${lang}/philosophy`}
        rightPosts={philosophyPostsFromAPI}
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
