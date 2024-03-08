import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-[100vh] bg-[#040404] bg-cover bg-center mt-[10vh]"
    >
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-[#F7F6FB] font-bold">
            HI, I'M <span>VICTOR</span>
          </h1>
          <TextEffect />
          <Link to="about" smooth={true} duration={500}>
            <p className="mt-[1.5rem] text-[18px] text-[#F7F6FB] cursor-pointer opacity-30 hover:opacity-80">
              Sou Desenvolvedor Frontend, e me orgulho de dizer isso, já
              desenvolvi e contribui em projetos de grande escala e
              responsabilidade...{" "}
              <span className="text-[#5B7AC4] opacity-100 hover:underline">
                Ler mais
              </span>
            </p>
          </Link>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button
              className="px-[2rem] hover:bg-transparent hover:border-[#F7F6FB] hover:border-solid hover:border-[1px] transition-all duration-200 py-[1rem] text-[18px] 
            font-bold uppercase bg-[#152D53] border-[1px] border-solid border-[#152D53] text-[#F7F6FB] flex items-center space-x-2"
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem]" />
            </button>
            {/* <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#152D53]" />
              <p className="text-[20px] font-semibold text-white">
                Watch The Video
              </p>
            </button> */}
          </div>
        </div>
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          // data-aos="zoom-in"
          className="w-[500px] hidden relative lg:flex items-center rounded-full h-[500px]"
        >
          <Image
            src="/images/u1.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
