import Image from 'next/image'
import React from 'react'

type Skill = {
  name: string
  imageUrl: string
}

interface Props {
  skill: Skill
}

const SkilsLanguage = ({ skill }: Props) => {
  return (
    <div>
      <div className="hover:shadow-inner-bottom relative mb-[3rem] h-[130px] w-[100px] animate-shine cursor-pointer items-center bg-opacity-5 opacity-30 grayscale filter transition-colors duration-200 hover:bg-[linear-gradient(110deg,#09101a,45%,#1e2631,55%,#09101a)] hover:bg-[length:200%_100%] hover:opacity-100 hover:grayscale-0">
        <Image
          className="mx-0-auto px-2 py-3"
          src={skill.imageUrl}
          alt={skill.name}
          width={100}
          height={80}
        />
        <p className="absolute bottom-0 w-[100%] select-none text-center text-[10px] font-bold uppercase text-white">
          {skill.name}
        </p>
      </div>
    </div>
  )
}

export default SkilsLanguage
