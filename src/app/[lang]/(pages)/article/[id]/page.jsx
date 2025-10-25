"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PostsList from "../AuthorCard";
import SocialIcons from "../SocialIcons";
import ArticleContent from "../ArticleContent";
import ArticleHeader from "../ArticleHeader";
import AuthorProfileCard from "../AuthorProfileCard";
import { getArticle } from "@/core/repo";

const ArticlePage = () => {
  const params = useParams();
  const [articleData, setArticleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (params?.id) {
          const data = await getArticle(params.id);
          console.log("Article data:", data);
          setArticleData(data);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [params?.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!articleData) {
    return <div>Article not found</div>;
  }
  console.log("Article data:", articleData.data);
  return (
    <div className="col-12 post-content pb-5 bg-white border-l-0 lg:border-l-2 lg:border-gray-300">
      <ArticleHeader
        coverImage={`http://46.62.165.97:1337${articleData.data.cover?.url}`}
        description={articleData.data.description}
        authorName={articleData.data.author?.name}
        authorImage={articleData.data.author?.image?.url}
        authorLink={articleData.data.author?.link}
        dir="rtl"
      />

      <div className="container mx-auto mt-12 px-4">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <div className="w-full lg:w-2/3 min-w-0 pl-0 lg:pl-8 lg:border-l lg:border-gray-600">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-4 text-black mr-0 lg:mr-6 text-start">
                {articleData.data.title}
              </h1>
            </div>

            <div className="mb-8">
              <SocialIcons />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none" dir="rtl">
              <div
                dangerouslySetInnerHTML={{ __html: articleData.data.content }}
                className="article-content text-black"
              />
            </div>

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
