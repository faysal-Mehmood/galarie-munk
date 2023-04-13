import React from 'react';
import ArrowRight from '../../assets/img/arrow-right.svg';
import CloudArrowUp from '../../assets/img/cloud-arrow-up.svg';
import Close from '../../assets/img/x-mark.svg';
import Heart from '../../assets/img/heart.svg';
import CheckGreen from '../../assets/img/check-green.svg';

const Index = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      {/* pages heading*/}
      <div className="w-full px-[150px] mt-4 ">
        {/* pages names bar*/}
        <div className="flex items-center gap-[6px] mb-10">
          <p className="m-0 font-normal text-xs leading-[20px] text-gray-500">Galerie-Munk</p>
          <span>
            <img src={ArrowRight} alt="arrow" className="w-[14px] h-[14px]" />
          </span>
          <p className="m-0 font-normal text-xs leading-[20px] text-gray-700">Room classifier</p>
        </div>
        {/* pages name*/}
        <h1 className="font-normal text-[60px] leading-[60px] text-gray-800 m-0">PROFILER</h1>
        <div className="w-full h-[1px] bg-gradient1 my-2" />
        <h2 className="font-normal text-[48px] leading-[48px] text-gray-800 m-0">3. Art Swiper</h2>
      </div>
      {/* progress bar*/}
      <div className="w-full h-auto py-[12px] min-h-[69px] px-4 bg-gray-200 flex items-center justify-center my-10">
        <div className="w-[730px] mx-auto flex items-center gap-[5px] justify-center ">
          <div className="w-8 h-8 border-[1px] border-solid border-green-600 bg-greenRGB rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-green-600 rotate-[-45deg]">1</p>
          </div>
          <div className="w-[194px] h-[1px] bg-gradient2" />
          <div className="w-8 h-8 border-[1px] border-solid border-gray-800  rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-gray-800 rotate-[-45deg]">2</p>
          </div>
          <div className="w-[194px] h-[1px] bg-gray-800" />
          <div className="w-8 h-8 border-[1px] border-solid border-gray-800  rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-gray-800 rotate-[-45deg]">3</p>
          </div>
          <div className="w-[194px] h-[1px] bg-gray-800" />
          <div className="w-8 h-8 border-[1px] border-solid border-gray-800  rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-gray-800 rotate-[-45deg]">4</p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="px-[150px] text-center">
        <h2 className="font-normal text-[40px] leading-[40px] text-gray-800 mb-2 ">Upload room</h2>
        <p className="font-normal text-sm text-gray-800 mb-10 w-[560px] mx-auto">
          Explanation text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis
          ut dui nec porta.
        </p>

        {/*  */}
        <div className="w-[366px] h-[366px] mx-auto flex items-center justify-center border-[1px] border-solid border-gray-600 bg-[#171717] ">
          <div className="flex flex-col items-center gap-2 cursor-pointer">
            <img src={CloudArrowUp} alt="CloudArrowUp" className="w-auto h-auto " />
            <p className="font-semibold text-base text-white">Select image</p>
          </div>
        </div>
      </div>

      {/*  */}

      <button className="w-[365px] h-auto mx-auto mt-10 mb-[76px] px-[18px] py-[11px] flex items-center justify-center font-semibold text-base text-gray-500 bg-gray-700 ">
        Classify
      </button>
    </div>
  );
};

export default Index;
