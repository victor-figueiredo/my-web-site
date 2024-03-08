import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-[#5B7AC4] mb-[1rem]">
            Sobre mim
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] mb-[3rem] font-bold text-white">
            Aiming for <span className="text-[#5B7AC4]">purpose</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Desenvolvedor alcançando 3 anos de experiência profissional. Quero
              ser incrível no que faço e pra isso estou sempre apto a novos
              desafios. Gosto de aprender e compartilhar conhecimentos, costumo
              ver a vida como uma eterna escola, me permitindo reinventar sempre
              que necessário.
            </p>
          </div>
          <button
            className="px-[2rem] hover:bg-transparent hover:border-[#F7F6FB] hover:border-solid hover:border-[1px] transition-all duration-200 py-[1rem] text-[18px] 
            font-bold uppercase bg-[#152D53] border-[1px] border-solid border-[#152D53] text-[#F7F6FB] hover:text-[#F7F6FB] flex items-center space-x-2"
          >
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem]" />
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative"
        >
          <Image
            src="/images/about.jpeg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#152D53] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
