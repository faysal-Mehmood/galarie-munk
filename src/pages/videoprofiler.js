import React from "react";
import Play from "../assets/images/play.svg";
export default function profiler() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] m-auto pt-10 pb-20 px-6">
        <h1 className=" text-6xl leading-[60px] font-semibold text-gray-800">PROFILER</h1>
        <div className="h-[1px] max-w-[1200px] bg-gradient-to-r from-green-600 mb-2"></div>
        <h3 className=" text-5xl leading-[48px] font-semibold text-gray-800 mb-6">Find art just for you</h3>
        <p className="font-normal text-sm leading-5  text-gray-800 mb-10">This questionnaire will help us to determine art pieces most suitable for you</p>
        <div className=" relative max-w-[560px] h-[622px] bg-gradient-to-r from-[black]  mb-4">
          <video className="w-full h-full" autoPlay muted playsInline loop>
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <img src={Play} className="absolute left-2/4 right-2/4 bottom-2/4 " alt="logo" />
        </div>
        <button className="w-[560px] text-white bg-green-600 text-base leading-6 font-semibold m-0  py-[11px] px-3">Weiter</button>
      </div>
    </div>
  );
}
