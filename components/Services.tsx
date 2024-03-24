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
              Foi o meu primeiro contato com o desenvolvimento, aos 14 anos, porém não tive a oportunidade de me aprofundar, retomei meus estudos em 2020 iniciando de vez a minha carreira.
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
              Sempre tive curiosidade sobre este mundo de regras de
              negócios e armazenamento de dados, hoje atuo como back-end, com NodeJS, ExpressJS, MySQL, MongoDB, Sequelize, MVC.
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
              É uma imensa satisfação poder atuar como fullstack, inicie minha carreira como front-end, quase 3 anos de experiência e em seguida entrei pro mundo do back-end.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
