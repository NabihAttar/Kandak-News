export default function HeroSection() {
  return (
    <div className="carousel-item">
      <div
        className="w-full relative bg-cover bg-center min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://al-khandak.com/storage/posts/March2025/Oi8mhhMp1FSWiw5Gp1AR.jpg')",
        }}
      >
        {/* Overlay box */}
        <div className="absolute bottom-5 right-5 bg-black bg-opacity-30 p-4  max-w-sm"
         style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <p className="text-white text-sm mb-2">
            أججت فضيحة اغتصاب أسير فلسطيني نهاية شهر يوليو/تموز العام الماضي مجتمع "اسرائيل" بعد اعتقال الجنود المتهمين بجريمة الاغتصاب والتعذيب
          </p>
          <a
            className="text-white underline hover:text-gray-200 text-sm"
          >
            قراءة المزيد
          </a>
        </div>
      </div>
    </div>
  );
}
