import React from 'react';
import RoomImg from '../../assets/images/light-room-img.svg';
import Eyelogo from '../../assets/images/light_eye.svg';
import Trashogo from '../../assets/images/light_trash.svg';
import Add from '../../assets/images/light-plus.svg';
import DownArrow from '../../assets/images/light_down_arrow.svg';
import Card1 from '../../assets/images/card.svg';

export default function profil() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] m-auto pt-10 pb-20 px-6">
        <h1 className=" text-6xl leading-[60px] font-semibold text-gray-800">MEINE PROFIL</h1>
        <div className="h-[1px] max-w-[1200px] bg-gradient-to-r from-green-600 mb-8"></div>
        <div className="flex items-start gap-10 flex-wrap">
          {/* Left Box */}
          <div className="flex flex-col gap-10">
            <div className="w-full max-w-[550px] bg-white p-6 border border-gray-600 ">
              <h2 className="font-normal text-3xl leading-9 pb-4 m-0">Meine Einkaufswagen</h2>

              {/* content one */}
              <div className="flex items-start justify-between gap-2 mb-4 ">
                <div className="flex gap-2">
                  <p className="text-gray-800 font-normal text-sm leading-5 m-0">1 Stück</p>
                  <p className="text-gray-800 max-w-[350px] font-normal text-sm leading-5 m-0">373819: Monet, Claude - Nympheas Sunlight Effect II</p>
                </div>
                <p className="text-gray-800 font-medium text-sm leading-5 m-0">€ 168,77</p>
              </div>

              {/* content two */}
              <div className="flex items-start justify-between gap-2 mb-4 ">
                <div className="flex gap-2">
                  <p className="text-gray-800 font-normal text-sm leading-5 m-0">1 Stück</p>
                  <p className="text-gray-800 max-w-[350px] font-normal text-sm leading-5 m-0">287: Munk S. - Wall I</p>
                </div>
                <p className="text-gray-800 font-medium text-sm leading-5 m-0">€ 293,56</p>
              </div>

              {/* content three */}
              <div className="flex items-start justify-between gap-2 mb-4 ">
                <div className="flex gap-2">
                  <p className="text-gray-800 font-normal text-sm leading-5 m-0">2 Stück</p>
                  <p className="text-gray-800 max-w-[350px] font-normal text-sm leading-5 m-0">A398D: Alattar, Lina - Velvet Skies</p>
                </div>
                <p className="text-gray-800 font-medium text-sm leading-5 m-0">€ 293,56</p>
              </div>

              {/* content four */}
              <div className="flex items-start justify-between gap-3 mb-4 ">
                <p className="text-gray-800 font-normal text-sm leading-5 m-0">Gesamtpreis</p>
                <p className="text-gray-800 font-medium text-sm leading-5 m-0">€ 869,94</p>
              </div>

              <button className="w-full text-white bg-green-600 text-base leading-6 font-semibold m-0  py-[11px] px-3">Open Cart</button>
            </div>

            {/* Left bottom box */}
            <div className="w-full max-w-[550px] bg-white p-6 border border-gray-600 ">
              <h2 className="font-normal text-3xl leading-9 pb-4 m-0">Meine Pinnwand</h2>
              <p className="text-gray-300 font-normal text-sm leading-5 mb-4">8 Artikel</p>
              <div className="flex items-center gap-[1px] mb-[13px]">
                <img src={Card1} alt="logo" />
                <img src={Card1} alt="logo" />
                <img src={Add} alt="logo" />
              </div>
              <button className="w-full text-white bg-green-600 text-base leading-6 font-semibold m-0  py-[11px] px-3">Show Pinnward</button>
            </div>
          </div>

          {/* Right box */}
          <div className="flex flex-col gap-10">
            <div className="w-full max-w-[550px] bg-white p-6 border border-gray-600 ">
              <h2 className="font-normal text-3xl leading-9 pb-4 m-0">Room uploads and cLassifications</h2>

              <div className="max-w-[502px] flex items-center justify-between gap-2 mb-4 border border-gray-600 py-[7px] px-2 ">
                <div className="flex items-center gap-3">
                  <img src={RoomImg} alt="logo" />
                  <p className="text-gray-800 max-w-[350px] font-medium text-sm leading-5 m-0">Classification 1</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="border border-green-600 p-[11px]">
                    <img src={Eyelogo} alt="logo" />
                  </div>
                  <div className="border border-green-600 p-[11px]">
                    <img src={Trashogo} alt="logo" />
                  </div>
                </div>
              </div>

              <button className="w-full flex gap-2 justify-center text-gray-600 border border-green-600 text-base leading-6 font-semibold m-0  py-[11px] px-3">
                <img src={Add} alt="logo" />
                Open Cart
              </button>
            </div>

            {/* Right bottom box */}
            <div className="w-full max-w-[550px] bg-white p-4 border border-gray-600 ">
              <div className="flex justify-between items-center pb-4">
                <h2 className="font-normal text-3xl leading-9 m-0">Search queries</h2>
                <div className="flex items-center gap-[2px]">
                  <p className="text-gray-300 font-semibold text-xs leading-4 mb-0">Last week</p>
                  <img src={DownArrow} alt="logo" />
                </div>
              </div>
              <div className="flex items-center flex-wrap gap-3">
                <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[13px] bg-white px-3 border border-gray-800">Monet Claude</p>
                <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[13px] bg-white px-3 border border-gray-800">Impressionismus</p>
                <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[13px] bg-white px-3 border border-gray-800">Landschaft</p>
                <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[13px] bg-white px-3 border border-gray-800">Schlafzimmer</p>
                <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[13px] bg-white px-3 border border-gray-800">Pop art</p>
                <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[13px] bg-white px-3 border border-gray-800">Gelborange</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
