import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'
import DownloadButton from './DownloadButton'

const About = () => {
  return (
    <div id="about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="mx-auto grid w-[80%] grid-cols-1 items-center gap-[3rem] md:grid-cols-2">
        <div>
          <h1 className="mb-[1rem] text-[20px] font-bold uppercase text-[#5B7AC4]">
            Sobre mim
          </h1>
          <h2 className="mb-[3rem] text-[25px] font-bold leading-[2rem] text-white md:text-[35px] md:leading-[3rem] lg:text-[45px]">
            Aiming for <span className="text-[#5B7AC4]">purpose</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="hidden h-[5px] w-[100px] rounded-sm bg-slate-400 md:block"></span>
            <p className="w-[80%] text-[19px] text-slate-300">
              Possuo 3 anos de experiência profissional. Quero ser incrível no
              que faço e pra isso estou sempre apto a novos desafios. Gosto de
              aprender e compartilhar conhecimentos, costumo ver a vida como uma
              eterna escola, me permitindo reinventar sempre que necessário.
            </p>
          </div>
          <DownloadButton />
        </div>
        <div
          data-aos="fade-left"
          className="relative mx-auto mt-[2rem] h-[300px] w-[300px] md:mx-0 lg:mx-auto lg:mt-0 lg:h-[500px] lg:w-[500px]"
        >
          <Image
            src="/assets/images/me.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] h-[100%] w-[100%] object-contain"
          />
          <div className="absolute right-[-2rem] top-[-2rem] z-[10] h-[100%] w-[100%] bg-[#152D53]"></div>
        </div>
      </div>
    </div>
  )
}

export default About
