"use client";
import React from "react";
import { CalendarDays, Newspaper, ChevronLeft } from "lucide-react";

export default function LocalNewsSection({
  leftTitle,
  leftHref,
  leftPosts = [],
  rightTitle,
  rightHref,
  rightPosts = [],
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-1/2 md:pe-6 border-gray-300 md:border-e">
          <h4 className="text-orange-600 mb-4 ms-5 font-bold text-lg">
            <a
              href={leftHref}
              className="text-black hover:text-orange-700 flex items-center gap-2 cursor-pointer"
            >
              {leftTitle}
              <ChevronLeft size={18} />
            </a>
          </h4>

          {leftPosts.map((post, idx) => (
            <div key={idx} className="p-4">
              <a href={post.url} className="no-underline text-black hover:opacity-80">
                <div className="flex gap-4">
                  <div
                    className="w-1/3 min-h-[130px] bg-center bg-cover"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <div className="flex flex-col justify-end flex-1">
                    <p className="text-sm font-medium">{post.title}</p>
                    <div className="flex text-gray-600 text-xs gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <CalendarDays size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Newspaper size={14} />
                        {post.views}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 md:ps-6 mt-10 md:mt-0">
          <h4 className="text-orange-600 mb-4 ms-5 font-bold text-lg">
            <a
              href={rightHref}
              className="text-black hover:text-orange-700 flex items-center gap-2 cursor-pointer"
            >
              {rightTitle}
              <ChevronLeft size={18} />
            </a>
          </h4>

          {rightPosts.map((post, idx) => (
            <div key={idx} className="p-4">
              <a href={post.url} className="no-underline text-black hover:opacity-80">
                <div className="flex gap-4">
                  <div
                    className="w-1/3 min-h-[130px] bg-center bg-cover"
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <div className="flex flex-col justify-end flex-1">
                    <p className="text-sm font-medium">{post.title}</p>
                    <div className="flex text-gray-600 text-xs gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <CalendarDays size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Newspaper size={14} />
                        {post.views}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
