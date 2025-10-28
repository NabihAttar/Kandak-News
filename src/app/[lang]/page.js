import IntegratedHeroSection from "../components/IntegratedHeroSection";
import LocalNewsSection from "../components/LocalNewsSection";
import InfographicsSection from "../components/InfographicsSection";
import VideoSection from "../components/VideoSection";
import LatestIssueButton from "../components/LatestIssueButton";
import { getHomepage } from "../../core/repo";

// Category mapping for URL-friendly IDs (using English category names)
const categoryMapping = {
  mhlyat: "mhlyat",
  "international-affairs": "international-affairs",
  opinion: "opinion",
  "israeli-occupation": "israeli-occupation",
  "culture-and-media": "culture-media",
  philosophy: "philosophy",
  africa: "africa",
  sports: "sports",
  economy: "economy",
  "editorial-article": "editorial",
};

// Static data for sections (keeping infographics as they don't have API data yet)

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
  const africaAndSportData = homepageData?.data?.africaAndSport;
  // Debug logging

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
        url: `/${lang}/article/${post.documentId}`,
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
  const africaPostsFromAPI = transformPostData(africaAndSportData?.africas);
  const sportsPostsFromAPI = transformPostData(africaAndSportData?.sports);

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
        leftHref={`/${lang}/article-category/${categoryMapping["mhlyat"]}`}
        leftPosts={localPostsFromAPI}
        rightTitleKey="sections.international"
        rightHref={`/${lang}/article-category/${categoryMapping["international-affairs"]}`}
        rightPosts={internationalPostsFromAPI}
      />

      <VideoSection items={videosFromAPI} />

      <LocalNewsSection
        leftTitleKey="sections.opinion"
        leftHref={`/${lang}/article-category/${categoryMapping["opinion"]}`}
        leftPosts={opinionPostsFromAPI}
        rightTitleKey="sections.israelis"
        rightHref={`/${lang}/article-category/${categoryMapping["israeli-occupation"]}`}
        rightPosts={israelisPostsFromAPI}
      />

      <InfographicsSection items={infographicItems} />

      <LocalNewsSection
        leftTitleKey="sections.cultureMedia"
        leftHref={`/${lang}/article-category/${categoryMapping["culture-and-media"]}`}
        leftPosts={culturePostsFromAPI}
        rightTitleKey="sections.philosophy"
        rightHref={`/${lang}/article-category/${categoryMapping["philosophy"]}`}
        rightPosts={philosophyPostsFromAPI}
      />

      <InfographicsSection items={infographicItems} />

      <LocalNewsSection
        leftTitleKey="sections.africa"
        leftHref={`/${lang}/article-category/${categoryMapping["africa"]}`}
        leftPosts={africaPostsFromAPI}
        rightTitleKey="sections.sports"
        rightHref={`/${lang}/article-category/${categoryMapping["sports"]}`}
        rightPosts={sportsPostsFromAPI}
      />
    </main>
  );
}
