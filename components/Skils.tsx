import React from "react";
import SkilsItem from "./SkilsItem";
import SkilsLanguage from "./SkilLanguage";

const Skills = () => {
  return (
    <div
      id="experiences"
      className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]"
    >
      <h1 className="heading">
        Experiências & <span className="text-[#5B7AC4]">Habilidades</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-1 gap-[2rem] items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw]">
          <SkilsItem
            title="Desenvolvedor Frontend"
            year="09/2023 - 10/2023"
            company="como Freelancer"
            description="Implementei novas features e integrações em um site de banco com NextJS e Typescript, aprendi bastante neste projeto bem organizado e estruturado."
          />
          <SkilsItem
            title="Desenvolvedor Frontend"
            year="08/2021 - 10/2023"
            company="na empresa Younner"
            companyLink="https://www.younner.com"
            description="Desenvolvi sistemas para uma famosa cooperativa de
            crédito, sistema de fidelidade e aluguéis de veículo, sistema de prestadores de serviços, corretores de imóveis e cursos de exames médicos.
            Onde tive a satisfação de aprender e desenvolver diariamente diversas habilidades técnicas e comportamentais."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw]">
          <SkilsLanguage
            skill1="HTML5"
            skill2="css3"
            skill3="Javascript"
            level1="w-[80%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />

          <SkilsLanguage
            skill1="AngularJS"
            skill2="ReactJS"
            skill3="NextJS"
            level1="w-[50%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
