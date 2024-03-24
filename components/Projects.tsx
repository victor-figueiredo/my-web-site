import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  const t = useTranslations('Projects')
  const [showingTitle, setShowingTitle] = React.useState(0)
  const myProjects = [
    {
      id: 1,
      name: 'Meu primeiro portfólio',
      image: '/assets/images/p1.png',
    },
    {
      id: 2,
      name: 'Chat com IA',
      image: '/assets/images/p2.png',
    },
  ]

  const showTitle = (projectId: number) => setShowingTitle(projectId)
  const hideTitle = () => setShowingTitle(0)

  return (
    <div
      id="projects"
      className="bg-[#02050a] pb-[1rem] pt-[4rem] md:pt-[8rem]"
    >
      <h1 className="heading">
        Pro<span className="text-[#5B7AC4]">{t('title')}</span>
      </h1>
      <div className="mx-auto grid w-[80%] grid-cols-1 gap-[2rem] pt-[2rem] md:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((project) => (
          <div
            data-aos="fade-up"
            key={project.id}
            onMouseEnter={() => showTitle(project.id)}
            onMouseLeave={hideTitle}
          >
            <div className="relative h-[200px] w-[100%] transform cursor-pointer transition-all duration-200 md:h-[300px]">
              {showingTitle === project.id && (
                <p
                  data-aos="fade-up"
                  className="w-[100%] text-center text-white"
                >
                  {project.name}
                </p>
              )}
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
