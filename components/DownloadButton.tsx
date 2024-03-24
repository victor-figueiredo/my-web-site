import { ArrowDownTrayIcon, CheckIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'

const DownloadButton = () => {
  const t = useTranslations('DownloadBtn')

  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    setTimeout(() => {
      setTimeout(() => {
        setIsDownloading(false)
      }, 2000)
    }, 2000)
  }

  return (
    <a href="/cv/Victor-Figueiredo-Curriculo.pdf" download>
      <button
        className="flex items-center space-x-2 border-[1px] border-solid border-[#152D53] bg-gradient-to-r from-[#7299f3] via-[#5B7AC4] 
        to-[#152D53] px-[2rem] py-[1rem] text-[18px] font-bold uppercase text-[#F7F6FB] transition-all duration-200 hover:border-[1px] hover:border-solid hover:border-[#F7F6FB] hover:bg-transparent hover:text-[#F7F6FB]"
        onClick={handleDownload}
      >
        {isDownloading ? (
          <p className="flex">
            {t('downloading')}
            <CheckIcon className="ml-[8px] h-[1.7rem] w-[1.6rem]" />
          </p>
        ) : (
          <p className="flex">
            {t('download-btn')}
            <ArrowDownTrayIcon className="ml-[8px] h-[1.7rem] w-[1.6rem]" />
          </p>
        )}
      </button>
    </a>
  )
}

export default DownloadButton
