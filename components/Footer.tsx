import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80] mx-auto gap-[3rem]">
        <div id="contact" className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#152D53]">
            <MapIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Endereço
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              Recife, Pernambuco - Brasil
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#152D53]">
            <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Telefone
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              +5581995080052
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#152D53]">
            <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white]">
              Envie seu e-mail
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              victorfigueiredodev@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%] mt-[2rem] mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between">
        <div className="text-[16px] w-[100vw] mb-[2rem] md:mb-0 text-white opacity-20">
          Developed by Victor Figueiredo © 2024
        </div>
        {/* <div className="flex items-center space-x-10">
          <p className="text-[16px] text-white opacity-20">
            Terms & conditions
          </p>
          <p className="text-[16px] text-white opacity-20">Privacy Policy</p>
          <p className="text-[16px] text-white opacity-20">Sitemap</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
