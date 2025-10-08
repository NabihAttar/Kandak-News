import React from "react";
import PostsList from "./AuthorCard";
import SocialIcons from "./SocialIcons";
import ArticleContent from "./ArticleContent";
import ArticleHeader from "./ArticleHeader";
import AuthorProfileCard from "./AuthorProfileCard";

const ArticlePage = () => {
  return (
    <div className="col-12 post-content pb-5 border-l-2 border-gray-300 pb-[70px]">
      {/* Header with background image */}
      <ArticleHeader />

      <div className="container mx-auto mt-12 px-4">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Main content area */}
  <div className="w-2/3 min-w-0 border-l border-gray-600 pl-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4 text-black mr-6" dir="rtl">
                مع جيجك: لماذا لا أزال شيوعيّاً
              </h1>
            </div>

            <div className="mb-8">
              <SocialIcons />
            </div>

            {/* Article content */}
            <ArticleContent />

            {/* Author Profile Card at the bottom of main content */}

          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 pl-6">
            <PostsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
