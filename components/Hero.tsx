import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-scroll";
import DownloadButton from "./DownloadButton";

const Hero = () => {
  return (
    <div
      id="home"
      className="mt-[10vh] h-[100vh] bg-[#040404] bg-cover bg-center"
    >
      <Particle />
      <div className="mx-auto grid h-[100%] w-[80%] grid-cols-1 items-center gap-[3rem] lg:grid-cols-2">
        <div>
          <h1 className="text-[35px] font-bold text-[#F7F6FB] md:text-[50px]">
            HI, I&apos;M <span>VICTOR</span>
          </h1>
          <TextEffect />
          <Link to="about" smooth={true} duration={500}>
            <p
              data-aos="zoom-out-right"
              className="mt-[1.5rem] cursor-pointer text-[18px] text-[#F7F6FB] opacity-30 hover:opacity-80"
            >
              Contribuindo com projetos de grande escala e responsabilidade.{" "}
              <span className="text-[#5B7AC4] opacity-100 hover:underline">
                Ler mais
              </span>
            </p>
          </Link>
          <div className="mt-[2rem] flex-col items-center space-y-6 sm:flex sm:flex-row sm:space-x-6 sm:space-y-0">
            <DownloadButton />
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
  );
};

export default Hero;
