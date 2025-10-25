"use client";
import React from "react";
import SocialIcons from "./SocialIcons";
import ArticleTitle from "./ArticleTitle";

const ArticleMainContent = ({ title, content }) => {
  return (
    <div className="w-full lg:w-2/3 min-w-0 pl-0 lg:pl-8 lg:border-l lg:border-gray-600">
      <ArticleTitle title={title} />

      <div className="mb-8">
        <SocialIcons />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none" dir="rtl">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="article-content text-black"
        />
      </div>
    </div>
  );
};

export default ArticleMainContent;
