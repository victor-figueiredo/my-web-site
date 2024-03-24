import React from 'react'
import SkilsItem from './SkilsItem'
import SkilsLanguage from './SkilLanguage'

const mySkills = [
  {
    name: 'HTML5',
    imageUrl: '/assets/images/skills/html.png',
  },
  {
    name: 'CSS',
    imageUrl: '/assets/images/skills/css.png',
  },
  {
    name: 'JavaScript',
    imageUrl: '/assets/images/skills/js.png',
  },
  {
    name: 'Typescript',
    imageUrl: '/assets/images/skills/ts.png',
  },
  {
    name: 'Angular',
    imageUrl: '/assets/images/skills/angular.png',
  },
  {
    name: 'ReactJS',
    imageUrl: '/assets/images/skills/reactjs.png',
  },
  {
    name: 'NextJS',
    imageUrl: '/assets/images/skills/nextjs.png',
  },
  {
    name: 'Redux',
    imageUrl: '/assets/images/skills/redux.png',
  },
  {
    name: 'Styled-Components',
    imageUrl: '/assets/images/skills/styled-components.png',
  },
  {
    name: 'Tailwind CSS',
    imageUrl: '/assets/images/skills/tailwind.png',
  },
  {
    name: 'NodeJS',
    imageUrl: '/assets/images/skills/node.png',
  },
  {
    name: 'ExpressJS',
    imageUrl: '/assets/images/skills/Expressjs.png',
  },
  {
    name: 'MongoDB',
    imageUrl: '/assets/images/skills/mongodb.png',
  },
  {
    name: 'MySQL',
    imageUrl: '/assets/images/skills/mysql.png',
  },
  {
    name: 'Sequelize',
    imageUrl: '/assets/images/skills/sequelize.png',
  },
  {
    name: 'Socket.io',
    imageUrl: '/assets/images/skills/socketio.png',
  },
]

const Skills = () => {
  return (
    <div
      id="experiences"
      className="bg-[#09101a] pb-[5rem] pt-[4rem] md:pt-[8rem]"
    >
      <h1 className="heading">
        Experiências & <span className="text-[#5B7AC4]">Habilidades</span>
      </h1>
      <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-[2rem] pt-[4rem] md:grid-cols-1 md:pt-[8rem]">
        <div className="grid grid-cols-1 gap-[2vw] md:grid-cols-2">
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
            description="Desenvolvi projetos e soluções para uma grande empresa de cooperativa de crédito, cursos, site para prestadores de serviços, corretores de imóveis, sistema de fidelidade, locação de veículos, sistema com live, chat com websockets, mapas, e entre outros, onde pude ter a satisfação de superar desafios e evoluir como profissional e também como pessoa."
          />
        </div>
        <div className="flex flex-wrap justify-center gap-[2vw]">
          {mySkills.map((skill, index) => (
            <SkilsLanguage key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
