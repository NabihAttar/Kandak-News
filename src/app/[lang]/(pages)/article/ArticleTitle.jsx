import React from "react";

const ArticleTitle = ({ title }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-4 text-black mr-0 lg:mr-6 text-start">
        {title}
      </h1>
    </div>
  );
};

export default ArticleTitle;
