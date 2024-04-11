import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import ProjectDialog from './Dialog'
import { IProjectProps } from '@/types'
import MyProjects from '@/data/projects.json'

const Projects = () => {
  const t = useTranslations('Projects')
  const [showingTitle, setShowingTitle] = React.useState(0)
  const [projectSelected, setProjectSelected] =
    React.useState<IProjectProps | null>(null)
  //   null
  // )

  const showTitle = (projectId: number) => setShowingTitle(projectId)
  const hideTitle = () => setShowingTitle(0)
  const showProject = (project: IProjectProps | null) =>
    setProjectSelected(project)
  const onClose = () => setProjectSelected(null)

  return (
    <div
      id="projects"
      className="bg-[#02050a] pb-[1rem] pt-[4rem] md:pt-[8rem]"
    >
      <h1 className="heading">
        Pro<span className="text-[#5B7AC4]">{t('title')}</span>
      </h1>
      <div className="mx-auto grid w-[80%] grid-cols-1 gap-[2rem] pt-[2rem] md:grid-cols-2 lg:grid-cols-3">
        {MyProjects.map((project) => (
          <div
            data-aos="fade-up"
            key={project.id}
            onClick={() => showProject(project)}
            onMouseEnter={() => showTitle(project.id)}
            onMouseLeave={hideTitle}
          >
            <div className="relative h-[200px] w-[100%] transform cursor-pointer transition-all duration-200 md:h-[300px]">
              {showingTitle === project.id && (
                <p
                  data-aos="fade-up"
                  className="hidden w-[100%] text-center text-white md:block"
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
      {projectSelected && (
        <ProjectDialog data={projectSelected} onClose={onClose} />
      )}
    </div>
  )
}

export default Projects
