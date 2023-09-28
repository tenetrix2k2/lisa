import Image from "next/image";
import React from "react";
import { DotsIcon } from "./common/Icon";

const HelloLisa = () => {
  return (
    <div className="px-3 xl:px-0 mt-[150px] lg:mt-[309px]">
      <div className="max-w-[1140px] w-full bg-[url('/img/hello-bg-img-desktop.png')] sm:bg-[url('/img/hello-bg-img.png')] bg-cover bg-center bg-no-repeat rounded-[32px] lg:h-[479px]      mx-auto ">
        <div className="mx-auto rounded-[32px] px-8 sm:px-0 h-full border py-20  md:py-10 lg:py-0 border-[#818181] bg-[linear-gradient(100deg,rgba(255,255,255,0.10)0.94%,rgba(103,103,103,0.05)98.47%)] flex gap-[53px] md:flex-row flex-col items-center ">
          <div className="m-auto lg:m-0 max-w-[519px] w-full">
            <Image
              className=" bg-center bg-cover w-full "
              src="/img/img1.png"
              width={519}
              height={365}
            />
          </div>

          <div className="flex justify-center md:justify-start max-w-[600px]  relative w-full lg:m-0 m-auto">
            <span className="absolute -top-4 md:top-[-25px]  left-0 md:-left-[70px]">
              <DotsIcon />
            </span>
            <div className="">
              <h2 className=" max-w-[398px] px-1 sm:px-0 sm:max-w-[543px] mx-auto md:mx-0 w-full md:pr-2 text-white text-[53px] lg:text-[60px] xl:text-[86px] md:text-start text-center font-Karla  leading-[66px] xl:leading-[102px]     ">
                Hello Lisa, I Am John. How Are You?
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloLisa;
