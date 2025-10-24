"use client";

import { useState } from "react";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";

export default function HeroHighlightsWrapper({ bannerData }) {
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);

  // Pass the selected index and setter to both components
  return (
    <>
      <HeroSection
        bannerData={bannerData}
        selectedArticleIndex={selectedArticleIndex}
        onArticleSelect={setSelectedArticleIndex}
      />
      <HighlightsSection
        bannerData={bannerData}
        selectedArticleIndex={selectedArticleIndex}
        onArticleSelect={setSelectedArticleIndex}
      />
    </>
  );
}
