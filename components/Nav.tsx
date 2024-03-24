import { Bars3Icon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import React from 'react'
import { Link } from 'react-scroll'
import CustomToggle from './CustomToogle'

interface Props {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {
  const t = useTranslations('Nav')

  return (
    <div className="border-b-#141c27]-1 fixed top-0 z-[10000] h-[12vh] w-[100%] bg-[rgba(4,4,4,0.5)] shadow-md backdrop-blur-md">
      <div className="flex h-[100%] w-[100%] items-center justify-between px-[10vw]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] font-bold text-[#F7F6FB] transition-all duration-500 ease-in-out">
          VF<span className="font-bold text-[#5B7AC4]">/&gt;</span>
        </h1>
        <Link to="home" smooth={true} duration={500}>
          <div className="nav-link">{t('home')}</div>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <div className="nav-link">{t('about')}</div>
        </Link>
        <Link to="services" smooth={true} duration={500}>
          <div className="nav-link">{t('services')}</div>
        </Link>
        <Link to="experiences" smooth={true} duration={500}>
          <div className="nav-link">{t('experiences')}</div>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <div className="nav-link">{t('projects')}</div>
        </Link>
        {/* <Link to="blog" smooth={true} duration={500}>
          <div className="nav-link">Blog</div>
        </Link> */}
        <Link to="contact" smooth={true} duration={500}>
          <div className="nav-link">{t('contact')}</div>
        </Link>
        <CustomToggle />
        <div onClick={openNav}>
          <Bars3Icon className="h-[2rem] w-[2rem] cursor-pointer text-[#5B7AC4] lg:hidden" />
        </div>
      </div>
    </div>
  )
}

export default Nav
