"use client";
import React, { useState } from "react";

const videos = [
  {
    id: "DP11ZlNPGRg",
    title: "الأزمة الاقتصادية العالمية وأزمة 2008 هل يعيد التاريخ نفسه ؟",
    date: "20/07/2021",
  },
  {
    id: "_iiXBbZ5FfM",
    title: "سليماني بعيونهم الجزء 1",
    date: "20/07/2021",
  },
  {
    id: "b-RMgVZiXkc",
    title: "سليماني بعيونهم - الجزء 2",
    date: "20/07/2021",
  },
  {
    id: "9Wx-9-ucnnw",
    title: "من المسؤول عما وصلت إليه الليرة اليوم؟",
    date: "20/07/2021",
  },
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(videos[0].id);

  return (
    <section className="w-full bg-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-white text-2xl font-bold mb-6">فيديو</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Video */}
          <div className="w-full lg:w-1/2">
            <iframe
              id="video_frame"
              width="100%"
              height="380"
              src={`https://www.youtube.com/embed/${activeVideo}`}
              title="YouTube video player"
              className="rounded"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Side Thumbnails */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className={`flex gap-4 p-3 cursor-pointer rounded-md transition duration-200 ${
                  activeVideo === video.id ? "bg-[#333]" : "hover:bg-[#2c2c2c]"
                }`}
                onClick={() => setActiveVideo(video.id)}
              >
                <div
                  className="w-24 h-20 bg-center bg-cover flex items-center justify-center"
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)`,
                  }}
                >
                  <i className="fas fa-play text-orange-500 text-2xl"></i>
                </div>
                <div className="flex-1 text-white text-sm">
                  <p className="font-semibold">{video.title}</p>
                  <p className="text-xs text-gray-400">{video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-8" >
          <a
            className="inline-block bg-[#111] text-white py-2 px-6 rounded hover:bg-gray-900 transition cursor-pointer"
          >
            مشاهدة المزيد
          </a>
        </div>
      </div>
    </section>
  );
}
