import React from 'react';
import ArrowRight from '../../assets/img/arrow-right.svg';
import CardImg from '../../assets/img/card.png';
import Close from '../../assets/img/x-mark.svg';
import Heart from '../../assets/img/heart.svg';
import CheckGreen from '../../assets/img/check-green.svg';

const Index = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      {/* pages heading*/}
      <div className="w-full px-[20px] md:px-[clamp(10px,11vw,150px)] m-0 md:mt-4">
        {/* pages names bar*/}
        <div className="hidden md:flex items-center gap-[6px] mb-10">
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
        <h1 className="font-normal text-[60px] leading-[60px] text-gray-800 m-0 hidden md:block">
          PROFILER
        </h1>
        <div className="w-full h-[1px] bg-gradient1 my-2 hidden md:block" />
        <h2 className="font-normal text-[48px] leading-[48px] text-gray-800 m-0 hidden md:block">
          3. Art Swiper
        </h2>
      </div>
      {/* progress bar*/}
      <div className="w-full h-auto py-[12px] min-h-[69px] px-4 bg-gray-200 flex items-center justify-center mb-8 md:my-10">
        <div className="w-full md:w-[730px] mx-auto flex items-center gap-[5px] justify-center ">
          <div className="w-8 h-8 border-[1px] border-solid border-green-600 bg-greenRGB rotate-45 flex items-center justify-center">
            <img
              src={CheckGreen}
              alt="CheckGreen"
              className="rotate-[-45deg] w-auto h-auto"
            />
          </div>
          <div className="w-[clamp(15px,10vw,194px)] h-[1px] bg-gradient2" />
          <div className="w-8 h-8 border-[1px] border-solid border-green-600 bg-greenRGB rotate-45 flex items-center justify-center">
            <img
              src={CheckGreen}
              alt="CheckGreen"
              className="rotate-[-45deg] w-auto h-auto"
            />
          </div>
          <div className="w-[clamp(15px,10vw,194px)] h-[1px] bg-gradient2" />
          <div className="w-8 h-8 border-[1px] border-solid border-green-600 bg-greenRGB rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-green-600 rotate-[-45deg]">
              3
            </p>
          </div>
          <div className="w-[clamp(15px,10vw,194px)] h-[1px] bg-green-600" />
          <div className="w-8 h-8 border-[1px] border-solid border-gray-800  rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-gray-800 rotate-[-45deg]">
              4
            </p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="px-[20px] md:px-[clamp(10px,11vw,150px)] text-center">
        <h2 className="font-normal text-[30px] leading-[36px] md:text-[48px] md:leading-[48px] text-gray-800 mb-1 md:mb-2">
          Click right if you like the item, or left if you <br /> don’t
        </h2>
        <p className="font-normal text-sm text-gray-800 mb-10">
          We’ll use them to suggest items chosen for you
        </p>
        <p className="font-normal text-sm text-gray-800 mb-[15px] hidden md:block">
          1/20
        </p>
        {/*  */}
        <div className="w-full md:w-[754px] h-auto md:h-[562px] mx-auto flex items-center gap-5">
          <div className="w-[77px] h-full hidden md:flex items-center justify-center border-[1px] border-solid border-gray-800">
            <img src={Close} alt="Close" className="w-auto h-auto" />
          </div>

          <div className="w-full md:w-[560px] flex-shrink md:flex-shrink-0 h-full">
            <img
              src={CardImg}
              alt="card"
              className="object-cover w-full  md:w-[560px] h-full"
            />
          </div>

          <div className="w-[77px] h-full hidden md:flex items-center justify-center border-[1px] border-solid border-gray-800">
            <img src={Heart} alt="Heart" className="w-auto h-auto" />
          </div>
        </div>

        {/*  */}
        <div className="w-full md:w-[560px] text-left mx-auto mt-[28px]">
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold text-base text-gray-800 m-0">
              Mädchen mit Katze
            </p>
            <p className="font-normal text-base text-gray-800 m-0">A123456</p>
          </div>
          <p className="font-normal text-sm text-gray-800 m-0">
            Haenraets Willem
          </p>
        </div>
        <div className="flex md:hidden items-center justify-between gap-2 mt-[31px]">
          <div className="w-[64px] h-[64px]   flex items-center justify-center border-[1px] border-solid border-gray-800">
            <img src={Close} alt="Close" className="w-auto h-auto" />
          </div>

          <p className="font-normal text-sm text-gray-800 m-0 ">1/20</p>

          <div className="w-[64px] h-[64px]  flex items-center justify-center border-[1px] border-solid border-gray-800">
            <img src={Heart} alt="Heart" className="w-auto h-auto" />
          </div>
        </div>

        {/*  */}

        <button className="w-full sm:w-[365px] h-auto mx-auto mt-10 mb-[76px] px-[18px] py-[11px] flex items-center justify-center font-semibold text-base text-white bg-green-600 ">
          Weiter
        </button>
      </div>
    </div>
  );
};

export default Index;
