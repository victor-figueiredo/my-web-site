import { XMarkIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import React from "react";
import { Link } from "react-scroll";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const t = useTranslations('Nav')
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
 
  return (
    <div
      className={`fixed ${navAnimation} bottom-0 left-0 right-0 top-0 z-[1000000] transform bg-[rgba(9,16,26,0.5)] backdrop-blur-md transition-all duration-300`}
    >
      <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center">
        <Link to="home" smooth={true} duration={500} onClick={closeNav}>
          <div className="nav-link-mobile">{t('home')}</div>
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={closeNav}>
          <div className="nav-link-mobile">{t('about')}</div>
        </Link>
        <Link to="services" smooth={true} duration={500} onClick={closeNav}>
          <div className="nav-link-mobile">{t('services')}</div>
        </Link>
        <Link to="experiences" smooth={true} duration={500} onClick={closeNav}>
          <div className="nav-link-mobile">{t('experiences')}</div>
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeNav}>
          <div className="nav-link-mobile">{t('projects')}</div>
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeNav}>
          <div className="nav-link-mobile">{t('contact')}</div>
        </Link>
      </div>
      <div
        className="absolute right-[2rem] top-[2rem] z-[10000000] h-[2rem] w-[2rem] cursor-pointer text-[#5B7AC4]"
        onClick={closeNav}
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
