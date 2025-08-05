import React from "react";

export default function FilesSection() {
  const files = [
    {
      title: "عنوان",
    //   link: "https://al-khandak.com/folders/title",
      image: "https://al-khandak.com/storage",
    },
  ];

  return (
    <div className="container mx-auto  px-4">
      <h1 className="text-black ms-5 mb-4 text-3xl font-bold">ملفات</h1>

      <div className="grid gap-2 grid-cols-1 lg:grid-cols-3">
        {files.map((file, idx) => (
          <a
            key={idx}
            // href={file.link}
            className="block rounded-lg overflow-hidden shadow-lg relative group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={file.image}
              alt={file.title}
              className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-lg font-semibold">
              {file.title}
            </div>
          </a>
        ))}
      </div>

      <div className="col-span-full text-center mt-5"></div>
    </div>
  );
}
