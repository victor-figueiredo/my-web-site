import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import React from 'react'
import ContactButton from './SocialsButton'

const Footer = () => {
  const t = useTranslations('Footer')

  return (
    <div className="w-[100vw] bg-[#02050a] pb-[4rem] pt-[8rem]">
      <div className="w-[100%] border-y-[1px] border-gray-400 ">
        <div className="mx-auto w-[80%] py-[2rem] sm:py-[6rem]">
          <div
            id="contact"
            className="flex w-[100%] flex-col items-center justify-center sm:flex-row sm:justify-between"
          >
            <div>
              <p className="w-[90%] text-[17px] text-white opacity-60">
                Recife, Pernambuco - Brasil
              </p>
              <p className="w-[90%] text-[17px] text-white opacity-60">
                +55 (81) 99508-0052
              </p>
              <p className="w-[90%] text-[17px] text-white opacity-60">
                victorfigueiredodev@gmail.com
              </p>
            </div>
            <div className="mt-5 flex space-x-6">
              <ContactButton socialMedia="linkedin" />
              <ContactButton socialMedia="github" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[2rem] grid w-[100%] grid-cols-1 items-center justify-between text-center md:grid-cols-2 lg:grid-cols-3">
        <div className="mb-[2rem] w-[100vw] text-[16px] text-white opacity-20 md:mb-0">
          {t('rights')}Victor Figueiredo © 2024
        </div>
        {/* <div className="flex items-center space-x-10">
          <p className="text-[16px] text-white opacity-20">
            Terms & conditions
          </p>
          <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
          <p className="text-[16px] text-white opacity-20">Sitemap</p>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
