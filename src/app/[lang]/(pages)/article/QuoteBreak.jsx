import React from "react";

const QuoteBreak = ({ text }) => {
  return (
    <div className="relative my-10 px-8 py-6 bg-white rounded-lg">

      <div className="absolute top-0 right-0 p-2 text-red-600 text-8xl select-none leading-none">
        ❝
      </div>

      <div className="absolute bottom-0 left-0 p-2 text-red-600 text-8xl select-none leading-none">
        ❞
      </div>

      <p className="font-extrabold text-center text-4xl px-12">{text}</p>
    </div>
  );
};

export default QuoteBreak;
