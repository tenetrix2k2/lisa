import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-[url('/img/ltos.png')] lg:bg-[url('/img/bgimg.png')] bg-no-repeat bg-cover">
        <div class="max-w-[1440px] w-full px-3 xl:px-0   flex flex-col  justify-center items-center  h-[850px] mx-auto ">
          <div className="w-full max-w-[289px] mx-auto sm:max-w-[687px] flex flex-col items-center">
            <h1 className="text-white pl-9  text-center Anurati text-[101px] lg:text-[242px] h-[110px] lg:h-[275px] font-normal tracking-[17px] lg:tracking-[46px] uppercase ">
              lisa
            </h1>
            <h2
              className="text-white  text-[8px] text-center  lg:text-[18px] Yaro font-normal leading-[64px] uppercase  tracking-[9px] lg:tracking-[23px] 
            "
            >
              powered by bittensor
            </h2>
          </div>

          <p
            className=" mt-[148px] hero_para_color  font-poppins text-[22px] lg:text-[30.8px] text-center capitalize max-w-[326px] lg:max-w-[957px] mx-auto sm:mt-[34px]  w-full leading-[33px] lg:leading-[60px]
             "
          >
            enjoy the highest level of privacy among all intelligent assistants.
          </p>
          <p
            className=" hero_para_color mt-[11px]  font-poppins text-[22px] lg:text-[30.8px] text-center capitalize max-w-[326px] lg:max-w-[702px] mx-auto  w-full leading-[33px] lg:leading-[60px]
             "
          >
            {" "}
            accomplish your task, Do It effortlessly using only your voice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
