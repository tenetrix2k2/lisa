import Image from "next/image";
import React from "react";

const OnTheGo = () => {
  return (
    <div>
      <div className=" mt-[150px] lg:mt-[309px]  p-[10px]">
        <div className="max-w-[1090px] w-full bg-[#020209] mx-auto flex   lg:flex-row flex-col-reverse justify-between ">
          <div className="max-w-[596px] w-full mt-[85px] lg:mt-0 lg:m-0 m-auto">
            <div className=" sm:text-[128px] text-[84px] Anurati font-[400] text-[white] text-center leading-[127%] mx-[10px] lg:text-left ">
              On The Go
            </div>
            <div className="max-w-[310px] sm:max-w-[484px] w-full sm:text-[30px] text-[19px] font-[600] text-[#A8A6A6] font-poppins sm:mt-[18px] text-center mt-[29px] m-auto lg:mx-0 lg:text-left   capitalize ">
              Do it all effortlessly, stay connected to bittensor network and
              get quick answers to your questions.
            </div>
          </div>
          <div className="max-w-[479px] w-full lg:m-0 mx-auto  ">
            <Image
              className="bg-center bg-cover"
              src="/img/phone.png"
              width={479}
              height={616}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnTheGo;
