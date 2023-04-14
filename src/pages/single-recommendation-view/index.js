import React from 'react';
import CardImg from '../../assets/img/card.png';
import Close from '../../assets/img/x-mark.svg';
import Heart from '../../assets/img/heart.svg';
import Arrow from '../../assets/img/arrow-lr.svg';

const Index = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="px-[20px] md:px-[clamp(10px,11vw,150px)] text-center">
        <h2 className="font-normal text-[30px] leading-[36px] md:text-[48px] md:leading-[48px] text-gray-800 mb-10">
          Single Recommendation View
        </h2>

        <p className="font-normal text-sm text-gray-800 mb-[15px] hidden md:block">
          1/20
        </p>
        {/*  */}
        <div className="w-full md:w-[754px] h-auto md:h-[562px] mx-auto flex items-center gap-5">
          <div className="w-[64px] h-[64px]  flex-shrink-0 rotate-180 flex items-center justify-center border-[1px] border-solid border-gray-800 bg-gray-700">
            <img src={Arrow} alt="Close" className="w-auto h-auto" />
          </div>

          <div className="w-full md:w-[560px] h-[281px] flex-shrink md:flex-shrink-0 ">
            <img
              src={CardImg}
              alt="card"
              className="object-cover w-full  md:w-[560px] h-[281px]"
            />
          </div>

          <div className="w-[64px] h-[64px]  flex-shrink-0 flex items-center justify-center border-[1px] border-solid border-gray-800 bg-gray-700">
            <img src={Arrow} alt="Close" className="w-auto h-auto " />
          </div>
        </div>

        {/*  */}

        <div className="w-full md:w-[560px] text-left mx-auto mt-4">
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
          <div className="w-[64px] h-[64px]  flex-shrink-0 rotate-180 flex items-center justify-center border-[1px] border-solid border-gray-800 bg-gray-700">
            <img src={Arrow} alt="Close" className="w-auto h-auto" />
          </div>

          <p className="font-normal text-sm text-gray-800 m-0 ">1/20</p>

          <div className="w-[64px] h-[64px]  flex-shrink-0 flex items-center justify-center border-[1px] border-solid border-gray-800 bg-gray-700">
            <img src={Arrow} alt="Close" className="w-auto h-auto " />
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
