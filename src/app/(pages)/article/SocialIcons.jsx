// src/components/SocialIcons.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faXTwitter,          // ⟵ use X instead of Twitter
  faTelegram,
  faFacebookMessenger,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const SocialIcons = ({ title = "", url }) => {
  const [currentUrl, setCurrentUrl] = useState(url || "");

  useEffect(() => {
    if (!url && typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [url]);

  const encodedUrl = useMemo(
    () => encodeURIComponent(currentUrl || ""),
    [currentUrl]
  );
  const encodedText = useMemo(
    () => (title ? encodeURIComponent(title) : ""),
    [title]
  );

  const isMobile = useMemo(
    () =>
      typeof navigator !== "undefined" &&
      /Android|iPhone|iPad|iPod|IEMobile|Opera Mini/i.test(navigator.userAgent),
    []
  );

  const fbAppId = process.env.NEXT_PUBLIC_FB_APP_ID;

  const links = useMemo(() => {
    const txtPlusUrl = encodedText ? `${encodedText}%20${encodedUrl}` : encodedUrl;

    return {
      whatsapp: `https://wa.me/?text=${txtPlusUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}${
        encodedText ? `&text=${encodedText}` : ""
      }`,
      telegram: `https://t.me/share/url?url=${encodedUrl}${
        encodedText ? `&text=${encodedText}` : ""
      }`,
      messenger: isMobile
        ? `fb-messenger://share/?link=${encodedUrl}`
        : fbAppId
        ? `https://www.facebook.com/dialog/send?app_id=${fbAppId}&link=${encodedUrl}&redirect_uri=${encodedUrl}`
        : `fb-messenger://share/?link=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    };
  }, [encodedUrl, encodedText, isMobile, fbAppId]);

  if (!currentUrl) return null;

  const itemClass = "cursor-pointer transition-transform hover:scale-110";

  return (
    <div className="flex space-x-4 mr-6">
      <a href={links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" title="Share on Facebook">
        <FontAwesomeIcon icon={faFacebookF} size="lg" className={`text-blue-600 ${itemClass}`} />
      </a>

      <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" title="Share on WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} size="lg" className={`text-green-500 ${itemClass}`} />
      </a>

      <a href={links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on X" title="Share on X">
        <FontAwesomeIcon icon={faXTwitter} size="lg" className={`text-black ${itemClass}`} />
      </a>

      <a href={links.telegram} target="_blank" rel="noopener noreferrer" aria-label="Share on Telegram" title="Share on Telegram">
        <FontAwesomeIcon icon={faTelegram} size="lg" className={`text-blue-500 ${itemClass}`} />
      </a>

      <a href={links.messenger} target="_blank" rel="noopener noreferrer" aria-label="Share on Messenger" title="Share on Messenger">
        <FontAwesomeIcon icon={faFacebookMessenger} size="lg" className={`text-blue-600 ${itemClass}`} />
      </a>

      <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" title="Share on LinkedIn">
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" className={`text-blue-700 ${itemClass}`} />
      </a>
    </div>
  );
};

export default SocialIcons;
