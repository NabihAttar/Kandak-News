import React from "react";
import PostsList from "./AuthorCard";
import SocialIcons from "./SocialIcons";
import ArticleContent from "./ArticleContent";
import ArticleHeader from "./ArticleHeader";
import AuthorProfileCard from "./AuthorProfileCard";

const ArticlePage = () => {
  return (
    <div className="col-12 post-content pb-5 bg-white border-l-0 lg:border-l-2 lg:border-gray-300">
      {/* Header with background image */}
      <ArticleHeader  dir="rtl"/>

      <div className="container mx-auto mt-12 px-4">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Main content area */}
          <div className="w-full lg:w-2/3 min-w-0 pl-0 lg:pl-8 lg:border-l lg:border-gray-600">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4 text-black mr-0 lg:mr-6 text-start">
                مع جيجك: لماذا لا أزال شيوعيّاً
              </h1>
            </div>

            <div className="mb-8">
              <SocialIcons />
            </div>

            {/* Article content */}
            <ArticleContent dir="rtl"/>

            {/* If you want the author profile at the end */}
            {/* <div className="mt-10">
              <AuthorProfileCard />
            </div> */}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 pl-0 lg:pl-6">
            <PostsList />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
