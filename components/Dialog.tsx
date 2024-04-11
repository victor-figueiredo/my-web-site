import { IProjectProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import ProjectSlide from './ProjectSlide'
import { LinkIcon } from '@heroicons/react/24/outline'
import { Links } from './ProjectLinks'
import { Tool } from './ProjectTools'
import { useTranslations } from 'next-intl'

type IDialogParams = {
  data: IProjectProps
  onClose: () => void
}

const ProjectDialog = ({ data, onClose }: IDialogParams) => {
  const t = useTranslations('Projects.Dialog')

  return (
    <div
      className={`${data?.name ? 'fixed' : 'hidden'} inset-0 z-[10001] flex items-center justify-center bg-black bg-opacity-50`}
      onClick={onClose}
    >
      <div
        className="max-w-[90vw] rounded-lg bg-white p-4 sm:max-w-[80vw] sm:p-8 2xl:max-w-[60vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-1xl mb-4 text-center font-bold sm:text-2xl">
          {data?.name}
        </h2>
        <div className="flex w-full flex-col 2xl:flex-row 2xl:justify-between">
          {data?.images && data.images.length > 1 ? (
            <ProjectSlide images={data?.images || []} />
          ) : (
            <Image
              src={data?.images[0]}
              alt={data?.name}
              width={500}
              height={500}
              className="m-0-auto h-[500] w-[500] object-cover"
            />
          )}
          <div className="w-full pl-2 2xl:w-[70%]">
            <p className="mb-2 text-[12px] text-gray-600 sm:text-[14px]">
              {data?.description}
            </p>
            <div>
              <Tool tools={data?.tools} />
            </div>
            <div className="mt-2 flex gap-2">
              <LinkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <Links links={data?.links} />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <button
            className="flex items-center space-x-2 border-[1px] border-solid border-[#5B7AC4] bg-gradient-to-r px-[1.5rem] py-[.5rem] text-[14px] font-bold uppercase text-[#5B7AC4] transition-all duration-200 hover:border-[1px] hover:border-solid hover:border-[#040404] hover:bg-transparent hover:text-[#040404] sm:text-[18px]"
            onClick={onClose}
          >
            {t('goBack')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDialog
