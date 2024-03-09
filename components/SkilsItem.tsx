import React from "react";

interface Props {
  title: string;
  year: string;
  company: string;
  description: string;
  companyLink?: string;
}

const SkilsItem = ({
  title,
  year,
  company,
  companyLink,
  description,
}: Props) => {
  const hasLink = !!companyLink;

  return (
    <div className="mb-[4rem] md:mb-[8rem] max-w-40%">
      <span className="px-[2rem] text-[#5B7AC4] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#5B7AC4]">
        {year}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      <h3
        onClick={() => {
          if (hasLink) window.open(companyLink);
          return;
        }}
        className={`${
          hasLink && `cursor-pointer hover:underline`
        } mb-[1rem] font-semibold text-[10px] sm:text-[15px] md:text-[20px] text-white`}
      >
        {company}
      </h3>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
        {description}
      </p>
    </div>
  );
};

export default SkilsItem;
