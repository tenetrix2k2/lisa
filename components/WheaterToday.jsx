import Image from "next/image";
import React from "react";
import { DotsIcon } from "./common/Icon";

const WheaterToday = () => {
  return (
    <div>
      <div className=" mt-[150px] lg:mt-[309px]  px-4">
        <div className="bg-[url(/img/bg2.png)] max-w-[1140px] bg-no-repeat bg-cover bg-center rounded-[32px] w-full mx-auto">
          <div className="border-[0.7px] rounded-[32px] border-[solid] border-[#818181] pt-[39px] pr-[63px] pb-[62px] pl-[44px] flex flex-col lg:flex-row justify-between items-center">
            <div className="order-2 lg:order-1 lg:pt-0 pt-[56px]">
              <DotsIcon />
              <h1 className="font-Karla lg:leading-normal leading-[108%] lg:max-w-[620px] w-full text-center lg:text-left text-white text-[53px] lg:text-[78px] font-[400] pt-[30px]">
                Hello Lisa, What’s The Weather Today?
              </h1>
            </div>
            <div className="order-1 lg:order-2 lg:pt-0 pt-[68px] ">
              <Image
                src="/img/badal.png"
                width={428}
                height={343}
                className="m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheaterToday;
