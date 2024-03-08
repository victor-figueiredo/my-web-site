import { Bars3Icon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] border-b-#141c27]-1 shadow-md bg-[#040404]">
      <div className="flex items-center justify-between w-[100%] px-[10vw] h-[100%]">
        <h1 className="transition-all duration-500 ease-in-out flex-[0.6] cursor-pointer text-[25px] text-[#F7F6FB] font-bold">
          V<span className="text-[#5B7AC4]">F</span>
        </h1>
        <Link to="home" smooth={true} duration={500}>
          <div className="nav-link">Home</div>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <div className="nav-link">Sobre</div>
        </Link>
        <Link to="services" smooth={true} duration={500}>
          <div className="nav-link">Serviços</div>
        </Link>
        <Link to="experiences" smooth={true} duration={500}>
          <div className="nav-link">Experiências</div>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <div className="nav-link">Projetos</div>
        </Link>
        {/* <Link to="blog" smooth={true} duration={500}>
          <div className="nav-link">Blog</div>
        </Link> */}
        <Link to="contact" smooth={true} duration={500}>
          <div className="nav-link">Contato</div>
        </Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
