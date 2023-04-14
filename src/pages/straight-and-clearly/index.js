import React from 'react';
import ArrowRight from '../../assets/img/arrow-right.svg';

const Index = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-[20px] md:px-[clamp(10px,11vw,150px)]">
      {/* pages heading*/}
      <div className="w-full  mt-4 ">
        {/* pages names bar*/}
        <div className="hidden md:flex items-center gap-[6px] mb-10 ">
          <p className="m-0 font-normal text-xs leading-[20px] text-gray-500">
            Galerie-Munk
          </p>
          <span>
            <img src={ArrowRight} alt="arrow" className="w-[14px] h-[14px]" />
          </span>
          <p className="m-0 font-normal text-xs leading-[20px] text-gray-700">
            Profiler
          </p>
        </div>
        {/* pages name*/}
        <h1 className="font-normal text-[60px] leading-[60px] hidden md:block text-gray-800 m-0 ">
          PROFILER
        </h1>
        <div className="w-full h-[1px] bg-gradient1 my-2 hidden md:block" />
        <h2 className="font-normal text-[30px] leading-[36px] md:text-[48px] md:leading-[48px] text-center md:text-left text-gray-800 mb-2 md:mb-6">
          Find art just for you
        </h2>

        <p className="font-normal text-xs leading-[20px] text-gray-700 mb-10 text-center md:text-left">
          This questionnaire will help us to determine art pieces most suitable
          for you
        </p>
      </div>
      {/* progress bar*/}
      <div className="w-fit flex  flex-col gap-[5px] justify-center ">
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] border-[1px] border-solid border-green-600 bg-greenRGB rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-green-600 rotate-[-45deg]">
              1
            </p>
          </div>
          <div className="">
            <p className="font-normal text-sm text-gray-800 mb-1">
              We start with
            </p>
            <p className="font-semibold text-lg border-green-600 m-0">
              Preference Questionary
            </p>
          </div>
        </div>
        <div className="w-[1px] h-[42px] bg-gradient4 ml-5 " />
        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] border-[1px] border-solid border-gray-800  rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-gray-800 rotate-[-45deg]">
              2
            </p>
          </div>
          <div className="">
            <p className="font-semibold text-lg border-green-600 m-0">
              Negative Filter
            </p>
          </div>
        </div>
        <div className="w-[1px] h-[42px] bg-gray-800  ml-5" />

        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] border-[1px] border-solid border-gray-800  rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-gray-800 rotate-[-45deg]">
              3
            </p>
          </div>
          <div className="">
            <p className="font-semibold text-lg border-green-600 m-0">
              Art Swiper
            </p>
          </div>
        </div>
        <div className="w-[1px] h-[42px] bg-gray-800  ml-5" />

        <div className="flex items-center gap-4">
          <div className="w-[42px] h-[42px] border-[1px] border-solid border-gray-800  rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-gray-800 rotate-[-45deg]">
              4
            </p>
          </div>
          <div className="">
            <p className="font-semibold text-lg border-green-600 m-0">Final</p>
          </div>
        </div>
      </div>

      {/*  */}

      <button className="w-full sm:w-[365px] h-auto mt-10 mb-[76px] px-[18px] py-[11px] flex items-center justify-center font-semibold text-base text-white bg-green-600 ">
        Start Questionnaire
      </button>
    </div>
  );
};

export default Index;
