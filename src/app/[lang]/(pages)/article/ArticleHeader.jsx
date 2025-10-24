import React from "react";

const ArticleHeader = () => {
  return (
    <div
      className="relative w-full min-h-[400px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://al-khandak.com/storage/posts/old/1587485208_1928897977.jpeg')",
      }}
    >
      {/* Text Box */}
      <div className="absolute top-4 right-4 p-3 bg-[rgba(0,0,0,0.6)] aspect-square w-[90vw] max-w-[250px]">
        <p
          className="text-white text-sm md:text-base leading-relaxed"
          dir="rtl"
        >
          أنا أوّل معترف بانتهاء حلم القرن العشرين الشيوعي. وإنني كذلك أبعد ما
          يكون عن الاسطوانة الغبية العتيقة التي أصرّت على كون الشيوعية&nbsp;
          فكرة جيدة جرى إفسادها على أيدي مستبدين منحطين. كلا: هناك مشاكل موجودة
          بالرؤية الأصلية، وبالتالي فعلينا القيام بإعادة تقييم لماركس ذاته.
        </p>
      </div>

      {/* Author Section */}
      <a href="">
        <div
          className="absolute bottom-[10px] left-[10px] bg-black/55 rounded-[500px_150px_150px_500px] flex items-center gap-4 px-4 py-2 mb-[-50]"
        >
          <p className="text-white text-lg m-0">سلافوي جيجك</p>
          <div
            className="rounded-full w-[120px] h-[120px] bg-cover bg-center bg-no-repeat "
            style={{
              backgroundImage:
                "url('https://al-khandak.com/storage/authors/November2021/Ps86jEV9C92S0qXJ5zF7.png')",
            }}
          ></div>
        </div>
      </a>
    </div>
  );
};

export default ArticleHeader;
