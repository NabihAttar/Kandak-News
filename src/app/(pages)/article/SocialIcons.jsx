// src/components/SocialIcons.jsx
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faWhatsapp,
  faTwitter,
  faTelegram,
  faFacebookMessenger,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const SocialIcons = () => {
  return (
    <div className="flex space-x-4 mr-6">
      <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-blue-600 cursor-pointer" />
      <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-green-500 cursor-pointer" />
      <FontAwesomeIcon icon={faTwitter} size="lg" className="text-sky-400 cursor-pointer" />
      <FontAwesomeIcon icon={faTelegram} size="lg" className="text-blue-500 cursor-pointer" />
      <FontAwesomeIcon icon={faFacebookMessenger} size="lg" className="text-blue-600 cursor-pointer" />
      <FontAwesomeIcon icon={faLinkedinIn} size="lg" className="text-blue-700 cursor-pointer" />
    </div>
  );
};

export default SocialIcons;
