import React from 'react';
import ArrowRight from '../../assets/img/arrow-right.svg';
import CloudArrowUp from '../../assets/img/cloud-arrow-up.svg';
import card from '../../assets/img/card.png';

const Index = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      {/* pages heading*/}

      {/* progress bar*/}
      <div className="w-full h-auto py-[12px] min-h-[69px] px-4 bg-gray-200 flex items-center justify-center mb-20 ">
        <div className="w-full md:w-[730px] mx-auto flex items-center gap-[5px] justify-center ">
          <div className="w-8 h-8 border-[1px] border-solid border-green-600 bg-greenRGB rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-green-600 rotate-[-45deg]">
              1
            </p>
          </div>
          <div className="w-[clamp(15px,10vw,194px)] h-[1px] bg-gradient2" />
          <div className="w-8 h-8 border-[1px] border-solid border-gray-800  rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-gray-800 rotate-[-45deg]">
              2
            </p>
          </div>
          <div className="w-[clamp(15px,10vw,194px)] h-[1px] bg-gray-800" />
          <div className="w-8 h-8 border-[1px] border-solid border-gray-800  rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-gray-800 rotate-[-45deg]">
              3
            </p>
          </div>
          <div className="w-[clamp(15px,10vw,194px)] h-[1px] bg-gray-800" />
          <div className="w-8 h-8 border-[1px] border-solid border-gray-800  rotate-45 flex items-center justify-center">
            <p className="m-0 font-normal text-base text-gray-800 rotate-[-45deg]">
              4
            </p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="px-[20px] md:px-[clamp(10px,11vw,150px)] text-center">
        <h2 className="font-normal text-[30px] leading-[36px] md:text-[48px] md:leading-[48px] text-gray-800 mb-1 md:mb-2 ">
          Search
        </h2>
        <p className="font-normal text-sm text-gray-800 mb-10">
          Some explanation text
        </p>

        {/*  */}
        <div className="w-full sm:w-[366px] mx-auto mb-10 p-6 border-[1px] border-solid border-gray-900 ">
          <p className="font-medium text-lg mb-[10px] text-gray-600">SImilar</p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16px p-2 border-[1px] border-solid border-green-600 bg-greenRGB">
              <div className="w-12 h-12 bg-red-500" />
            </div>
            <div className="w-16 h-16px p-2 border-[1px] border-solid border-gray-500">
              <div className="w-12 h-12 bg-red-500" />
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[366px] mx-auto mb-10 p-6 border-[1px] border-solid border-gray-900 ">
          <p className="font-medium text-lg mb-[10px] text-gray-600">
            Complementary colors
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16px p-2 border-[1px] border-solid border-gray-500">
              <div className="w-12 h-12 bg-green-800" />
            </div>
            <div className="w-16 h-16px p-2 border-[1px] border-solid border-green-600 bg-greenRGB">
              <div className="w-12 h-12 bg-[#07A6EA]" />
            </div>
            <div className="w-16 h-16px p-2 border-[1px] border-solid border-green-600 bg-greenRGB">
              <div className="w-12 h-12 bg-[#E5BE22]" />
            </div>
          </div>
        </div>

        {/*  */}
        <button className="w-full  sm:w-[365px] h-auto mx-auto mt-10 mb-[76px] px-[18px] py-[11px] flex items-center justify-center font-semibold text-base text-white bg-green-600 ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Index;
