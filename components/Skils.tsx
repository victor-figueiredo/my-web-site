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
        Education & <span className="text-[#5B7AC4]">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-1 gap-[2rem] items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2vw]">
          <SkilsItem
            title="Desenvolvedor Frontend"
            year="09/2023 - 10/2023"
            description="Implementando novas features em um site de banco."
          />
          <SkilsItem
            title="Desenvolvedor Frontend"
            year="08/2021 - 10/2023"
            description="Desenvolvi sistemas para uma famosa cooperativa de
            crédito, sistema de fidelidade e aluguéis de veículo. Implementei novas features para um sistema de
            prestadores de serviços e outro sistema de corretores de
            imóveis. Implementei novas features em um sistema de cursos de
            exames médicos."
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
