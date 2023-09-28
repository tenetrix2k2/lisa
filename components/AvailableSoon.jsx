import React from "react";
import Image from "next/image";
import { AppleIcon, PlaystorIcon, RoundIcon } from "./common/Icon";

const AvailableSoon = () => {
  return (
    <>
      <div className=" bg-[url('/img/available-bg-img.png')]   pt-[113px] lg:pt-[309px] pb-6 sm:pb-[52px]  ">
        <p className="text-[38px] text-white font-[400] font-Karla text-center h-[57px]">
          Available Soon On
        </p>
        <div className="flex  w-full   items-center justify-center mt-[53px] md:mt-[65px] gap-[58px] sm:gap-[38px]   ">
          <div className="border-[1px] border-trollygray sm:w-[118px] w-[76px] h-[76px] sm:h-[118px] lg:w-[150px] lg:h-[150px] flex justify-center items-center rounded-[16px] sm:rounded-[32px] bg-opacity-30 bg-[linear-gradient(100deg,rgba(255,255,255,0.10)_0.94%,rgba(103,103,103,0.05)_98.47%)]">
            <AppleIcon />
          </div>
          <div className="border-[1px] border-trollygray sm:w-[118px] w-[76px] h-[76px] sm:h-[118px] lg:w-[150px] lg:h-[150px] flex justify-center items-center rounded-[16px] sm:rounded-[32px] bg-opacity-30 bg-[linear-gradient(100deg,rgba(255,255,255,0.10)_0.94%,rgba(103,103,103,0.05)_98.47%)]">
            <PlaystorIcon />
          </div>
        </div>
        <div className="flex items-center  justify-end w-full relative mt-[63px] md:mt-[125px] ">
          <div className=" h-[0.3px] bg-white    w-full opacity-[.2] "></div>
          <div className=" pe-[5px] md:pe-[86px]  absolute  ">
            <RoundIcon />
          </div>
        </div>
        <p className=" md:text-[28px] text-[14px] font-[400] sm:mt-[59px] mt-[20px] font-Karla text-white text-center opacity-[.5] ">
          Community Project Built On Bittensor
        </p>
      </div>
    </>
  );
};

export default AvailableSoon;
