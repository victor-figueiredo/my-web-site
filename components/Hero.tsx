import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-scroll'
import DownloadButton from './DownloadButton'
import ContactButton from './SocialsButton'
import { useTranslations } from 'next-intl'

const Hero = () => {
  const t = useTranslations('Hero')
  return (
    <div
      id="home"
      className="mt-[10vh] h-[100vh] bg-[#040404] bg-cover bg-center"
    >
      {/* <Particle /> */}
      <div className="mx-auto grid h-[100%] w-[80%] grid-cols-1 items-center gap-[3rem] lg:grid-cols-2">
        <div>
          <h1 className="text-[35px] font-bold text-[#F7F6FB] md:text-[50px]">
            {t('title')}
          </h1>
          <TextEffect />
          <Link to="about" smooth={true} duration={500}>
            <p
              data-aos="zoom-out-right"
              className="mt-[1.5rem] cursor-pointer text-[18px] text-[#F7F6FB] opacity-30 hover:opacity-80"
            >
              {t('subtitle')} <br />
              <span className="text-[#5B7AC4] opacity-100 hover:underline">
                {t('cta')}
              </span>
            </p>
          </Link>
          <div className="flex-cols mt-[2rem] items-center space-y-6 sm:flex sm:flex-row sm:space-x-6 sm:space-y-0">
            <DownloadButton />
            <div className="flex space-x-6">
              <ContactButton socialMedia="linkedin" />
              <ContactButton socialMedia="github" />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 1,
            type: 'spring',
            stiffness: 100,
          }}
          className="relative mx-auto hidden h-[500px] w-[500px] items-center rounded-full lg:flex"
        >
          <Image
            src="/assets/images/u1.jpg"
            alt="user"
            layout="fill"
            className="rounded-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
