import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import React from 'react'

const Services = () => {
  const t = useTranslations('Services')
  return (
    <div
      id="services"
      className="bg-[#121212] pb-[5rem] pt-[4rem] md:pt-[8rem]"
    >
      <p className="heading">
        {t('title1')}
        <span className="text-[#5B7AC4]">{t('title2')}</span>
      </p>
      <div className="mx-auto mt-[4rem] grid w-[80%] grid-cols-1 items-center gap-[3rem] text-white md:grid-cols-2 lg:grid-cols-3">
        <div data-aos="fade-right">
          <div className="transform bg-red-700 p-[2rem] text-center font-semibold uppercase transition-all duration-300 hover:-rotate-6 hover:scale-110">
            <CodeBracketSquareIcon className="mx-auto h-[6rem] w-[6rem] text-[#d3fae8]" />
            <h1 className="mb-[1.5rem] mt-[1.5rem] text-[20px] md:text-[30px]">
              Front-End
            </h1>
            <p className="text-[15px] font-normal text-[#d3d2d2]">
              {t('frontend')}
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="transform bg-orange-700 p-[2rem] text-center font-semibold uppercase transition-all duration-300 hover:scale-110">
            <RocketLaunchIcon className="mx-auto h-[6rem] w-[6rem] text-[#d3fae8]" />
            <h1 className="mb-[1.5rem] mt-[1.5rem] text-[20px] md:text-[30px]">
              Back-End
            </h1>
            <p className="text-[15px] font-normal text-[#d3d2d2]">
              {t('backend')}
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className="transform bg-blue-700 p-[2rem] text-center font-semibold uppercase transition-all duration-300 hover:rotate-6 hover:scale-110">
            <CommandLineIcon className="mx-auto h-[6rem] w-[6rem] text-[#d3fae8]" />
            <h1 className="mb-[1.5rem] mt-[1.5rem] text-[20px] md:text-[30px]">
              Full-Stack
            </h1>
            <p className="text-[15px] font-normal text-[#d3d2d2]">
              {t('fullstack')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
