import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { Link } from "react-scroll";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <Link to="home" smooth={true} duration={500} onClick={closeNav}>
          <div className="nav-link-mobile">Home</div>
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={closeNav}>
          <div className="nav-link-mobile">Sobre</div>
        </Link>
        <Link to="services" smooth={true} duration={500} onClick={closeNav}>
          <div className="nav-link-mobile">Serviços</div>
        </Link>
        <Link to="experiences" smooth={true} duration={500} onClick={closeNav}>
          <div className="nav-link-mobile">Experiências</div>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <div className="nav-link-mobile">Projetos</div>
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeNav}>
          <div className="nav-link-mobile">Contact</div>
        </Link>
      </div>
      <div
        className="absolute z-[10000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#5B7AC4]"
        onClick={closeNav}
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
