import React from 'react'
import SkilsItem from './SkilsItem'
import SkilsLanguage from './SkilLanguage'
import { useTranslations } from 'next-intl'

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
  const t = useTranslations('Skills')
  return (
    <div
      id="experiences"
      className="bg-[#09101a] pb-[5rem] pt-[4rem] md:pt-[8rem]"
    >
      <h1 className="heading">
        {t('title1')} <span className="text-[#5B7AC4]">{t('title2')}</span>
      </h1>
      <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-[2rem] pt-[4rem] md:grid-cols-1 md:pt-[8rem]">
        <div className="grid grid-cols-1 gap-[2vw] md:grid-cols-2">
          <SkilsItem
            title={t('occupation1')}
            year={t('duration1')}
            company={t('company1')}
            description={t('description1')}
          />
          <SkilsItem
            title={t('occupation2')}
            year={t('duration2')}
            company={t('company2')}
            companyLink="https://www.younner.com"
            description={t('description2')}
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
