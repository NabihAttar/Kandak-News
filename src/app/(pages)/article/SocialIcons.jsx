// src/components/SocialIcons.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faWhatsapp,
  faTwitter,          // if you have faXTwitter, you can swap it in
  faTelegram,
  faFacebookMessenger,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

/**
 * Props:
 *  - title?: string     (optional share text)
 *  - url?: string       (optional; if not provided, uses current page URL on the client)
 */
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

  // If you have a FB app id and want Messenger web dialog to work on desktop:
  // add NEXT_PUBLIC_FB_APP_ID to your .env and rebuild
  const fbAppId = process.env.NEXT_PUBLIC_FB_APP_ID;
console.log("fbAppId"+ encodedUrl)
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
      // Messenger: app deep link on mobile; web dialog on desktop if app id exists, else fallback to app scheme
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
console.log("links"+ links.linkedin)
  return (
    <div className="flex space-x-4 mr-6">
      <a
        href={links.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <FontAwesomeIcon icon={faFacebookF} size="lg" className={`text-blue-600 ${itemClass}`} />
      </a>

      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="lg" className={`text-green-500 ${itemClass}`} />
      </a>

      <a
        href={links.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X/Twitter"
        title="Share on X/Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} size="lg" className={`text-sky-400 ${itemClass}`} />
      </a>

      <a
        href={links.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Telegram"
        title="Share on Telegram"
      >
        <FontAwesomeIcon icon={faTelegram} size="lg" className={`text-blue-500 ${itemClass}`} />
      </a>

      <a
        href={links.messenger}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Messenger"
        title="Share on Messenger"
      >
        <FontAwesomeIcon icon={faFacebookMessenger} size="lg" className={`text-blue-600 ${itemClass}`} />
      </a>

      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" className={`text-blue-700 ${itemClass}`} />
      </a>
    </div>
  );
};

export default SocialIcons;
