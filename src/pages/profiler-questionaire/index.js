import React from 'react';
import ArrowRight from '../../assets/img/arrow-right.svg';
import CardImg from '../../assets/img/card.png';
import Check from '../../assets/img/check.svg';

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
          <p className="m-0 font-normal text-xs leading-[20px] text-gray-700">Profiler</p>
        </div>
        {/* pages name*/}
        <h1 className="font-normal text-[60px] leading-[60px] text-gray-800 m-0">PROFILER</h1>
        <div className="w-full h-[1px] bg-gradient1 my-2" />
        <h2 className="font-normal text-[48px] leading-[48px] text-gray-800 m-0">
          1.Preferences Questionaire
        </h2>
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

      {/* pictures */}

      <div className="px-[150px] text-center">
        <h2 className="font-normal text-[40px] leading-[40px] text-gray-800 mb-2 ">
          Click on the pictures that you like the best
        </h2>
        <p className="font-normal text-sm text-gray-800 mb-10">
          We’ll use them to suggest items chosen for you
        </p>
        {/* pictures cards */}
        <div className="flex items-center gap-x-5 gap-y-4 flex-wrap">
          {/* cards */}
          <div className="w-[212px] h-[173px] relative overflow-hidden">
            <img src={CardImg} alt="card img" className="w-[212px] h-[173px] object-contain" />
            <div className="w-full h-full bg-gradient3 absolute top-0 left-0 z-[1]">
              <div className="w-full h-full flex items-center justify-center">
                <img src={Check} alt="Check" className="w-auto h-auto" />
              </div>
            </div>
          </div>
          <div className="w-[212px] h-[173px] relative overflow-hidden">
            <img src={CardImg} alt="card img" className="w-[212px] h-[173px] object-contain" />
          </div>
          <div className="w-[212px] h-[173px] relative overflow-hidden">
            <img src={CardImg} alt="card img" className="w-[212px] h-[173px] object-contain" />
          </div>
          <div className="w-[212px] h-[173px] relative overflow-hidden">
            <img src={CardImg} alt="card img" className="w-[212px] h-[173px] object-contain" />
          </div>

          <div className="w-[212px] h-[173px] relative overflow-hidden">
            <img src={CardImg} alt="card img" className="w-[212px] h-[173px] object-contain" />
          </div>
          <div className="w-[212px] h-[173px] relative overflow-hidden">
            <img src={CardImg} alt="card img" className="w-[212px] h-[173px] object-contain" />
          </div>
          <div className="w-[212px] h-[173px] relative overflow-hidden">
            <img src={CardImg} alt="card img" className="w-[212px] h-[173px] object-contain" />
          </div>
          <div className="w-[212px] h-[173px] relative overflow-hidden">
            <img src={CardImg} alt="card img" className="w-[212px] h-[173px] object-contain" />
          </div>

          <div className="w-[212px] h-[173px] relative overflow-hidden">
            <img src={CardImg} alt="card img" className="w-[212px] h-[173px] object-contain" />
          </div>
        </div>
      </div>
      {/* pictures  button */}

      <button className="w-[365px] h-auto mx-auto mt-10 mb-[76px] px-[18px] py-[11px] flex items-center justify-center font-semibold text-base text-white bg-green-600 ">
        Weiter
      </button>
    </div>
  );
};

export default Index;
