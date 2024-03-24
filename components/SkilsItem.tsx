import React from 'react'

interface Props {
  title: string
  year: string
  company: string
  description: string
  companyLink?: string
}

const SkilsItem = ({
  title,
  year,
  company,
  companyLink,
  description,
}: Props) => {
  const hasLink = !!companyLink

  return (
    <div className="max-w-40% mb-[4rem] md:mb-[8rem]">
      <span className="select-none border-[2px] border-[#5B7AC4] px-[2rem] py-[0.9rem] text-[18px] font-bold text-[#5B7AC4]">
        {year}
      </span>
      <h1 className="mt-[2rem] select-none text-[20px] font-semibold uppercase text-white sm:text-[25px] md:text-[30px]">
        {title}
      </h1>
      <h3
        onClick={() => {
          if (hasLink) window.open(companyLink)
          return
        }}
        className={`${
          hasLink && `cursor-pointer hover:underline`
        } mb-[1rem] text-[10px] font-semibold text-white sm:text-[15px] md:text-[20px]`}
      >
        {company}
      </h3>
      <p className="w-[80%] text-[17px] font-normal text-[#aaaaaa] opacity-80">
        {description}
      </p>
    </div>
  )
}

export default SkilsItem
