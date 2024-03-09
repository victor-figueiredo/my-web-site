import { ArrowDownTrayIcon, CheckIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      // setIsDownloading('Please wait');
      setTimeout(() => {
        setIsDownloading(false);
      }, 2000); // Volta para o estado inicial após 2 segundos
    }, 2000); // Altera para "Please wait" após 2 segundos
  };

  return (
    <a href="/cv/Victor-Figueiredo-Curriculo.pdf" download>
      <button
        className="px-[2rem] hover:bg-transparent hover:border-[#F7F6FB] hover:border-solid hover:border-[1px] transition-all duration-200 py-[1rem] text-[18px] 
font-bold uppercase bg-[#152D53] border-[1px] border-solid border-[#152D53] text-[#F7F6FB] hover:text-[#F7F6FB] flex items-center space-x-2"
        onClick={handleDownload}
      >
        {isDownloading ? (
          <p className="flex">
            Downloading...
            <CheckIcon className="w-[1.6rem] h-[1.7rem] ml-[8px]" />
          </p>
        ) : (
          <p className="flex">
            Download CV
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] ml-[8px]" />
          </p>
        )}
      </button>
    </a>
  );
};

export default DownloadButton;
