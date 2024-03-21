import { ArrowDownTrayIcon, CheckIcon } from "@heroicons/react/20/solid";
import { Github, Linkedin } from "lucide-react";
import React, { useState } from "react";

interface SocialsProps {
  socialMedia: string;
}

const ContactButton = ({ socialMedia } : SocialsProps) => {
  const typeSocialMedia = socialMedia === 'linkedin' ? <Linkedin /> : <Github />
  const linkSocialMedia = socialMedia === 'linkedin' ?
  'https://linkedin.com/in/vcfo' : 'https://github.com/victor-figueiredo'

  return (
    <a href={linkSocialMedia} target="_blank" download>
      <button
        className="flex items-center space-x-2 border-[1px] border-solid border-[#5B7AC4] bg-gradient-to-r px-[2rem] py-[1rem] text-[18px] font-bold uppercase text-[#5B7AC4] transition-all duration-200 hover:border-[1px] hover:border-solid hover:border-[#F7F6FB] hover:bg-transparent hover:text-[#F7F6FB]"
      >
          <p className="flex">
            {typeSocialMedia}
          </p>
      </button>
    </a>
  );
};

export default ContactButton;
