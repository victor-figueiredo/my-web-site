import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
    >
      <p className="heading">
        Meus <span className="text-[#5B7AC4]">Serviços</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Front-End
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              É a função que eu mais domino hoje, atuando profissionalmente há
              quase 3 anos, já trabalhei com Angular mas domino mais o ReactJS e
              NextJS, frameworks do JavaScript.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]">
            <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Back-End
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Conhecimentos em NodeJS, Express, MySQL, estou me desenvolvendo a
              cada dia, tenho muita curiosidade sobre este mundo de regras de
              negócio e armazenamento de dados.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Full-Stack
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
              Apesar de ter mais propriedade atuando como front-end e querer me
              desenvolver mais e mais, eu estudo e me preparo para atuar como um
              desenvolvedor full-stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
