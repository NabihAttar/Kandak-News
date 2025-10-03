import React from "react";

export default function AuthorCard() {
  return (
    <div className="container mt-5">
      <div className="col-12 px-3 md:px-5 py-5 border border-secondary bg-gray-100 relative mt-[120px]">
        <div className="post-author-image container-fluid">
          <div className="row flex items-end">
            {/* Author Image */}
            <a
              href=""
              className="no-underline flex"
              style={{ width: "fit-content" }}
            >
              <div
                className="post-author-image-card rounded-full"
                style={{
                  backgroundImage:
                    "url('https://al-khandak.com/storage/authors/November2021/Ps86jEV9C92S0qXJ5zF7.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "120px",
                  height: "120px",
                }}
              ></div>
            </a>

            {/* Author Name */}
            <a
              href=""
              className="no-underline flex text-black"
              style={{ width: "fit-content" }}
            >
              <p className="text-xl m-0">سلافوي جيجك</p>
            </a>
          </div>
        </div>

        {/* Author Description */}
        <p className="m-0 mt-4 text-black">مفكر سلوفيني</p>
      </div>
    </div>
  );
}
