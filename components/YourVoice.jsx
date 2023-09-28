import Image from "next/image";
import React from "react";
import { YourVoiceIcon1, YourVoiceIcon2, YourVoiceIcon3 } from "./common/Icon";

const YourVoice = () => {
  return (
    <div className="relative">
      <div className="lg:mt-[309px] mt-[150px]  items-center">
        <div className="  max-w-[1095px] px-3 xl:px-0 w-full justify-between  lg:flex-row flex-col  flex  mx-auto  items-center ">
          <Image
            className="max-w-[319px] w-full"
            src="/img/mic.png"
            width={319}
            height={340}
          />

          <div className="max-w-[327px] sm:max-w-[543px] lg:mt-0 mt-[79px] w-full">
            <p className="text-[42px]   text-center lg:text-start lg:text-[70px] font-Karla text-white font-medium leading-[129%] lg:leading-[127%] capitalize drop-shadow-[-1px_4px_3px_#5E0E65]">
              “Your Voice, Your Privacy; Where Innovation Meets Integrity.”
            </p>
          </div>
        </div>
      </div>
      <div className="absolute z-[-1] sm:hidden -left-2 top-10">
        <YourVoiceIcon1 />
      </div>
      <div className="absolute z-[-1] sm:hidden right-0 bottom-[215px]">
        <YourVoiceIcon2 />
      </div>
      <div className="absolute z-[-1] sm:hidden -left-1 bottom-10">
        <YourVoiceIcon3 />
      </div>
    </div>
  );
};

export default YourVoice;
