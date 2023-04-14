import React from 'react';

export default function profil() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1200px] m-auto pt-10 pb-20 px-6">
        <h1 className=" text-6xl leading-[60px] font-semibold text-gray-800">MEINE PROFIL</h1>
        <div className="h-[1px] max-w-[1200px] bg-gradient-to-r from-green-600 mb-8"></div>
        <div className="flex items-center gap-10 flex-wrap">
          <div className="max-w-[550px] bg-white p-6 border border-gray-600 ">
            <h2 className="font-normal text-3xl leading-9 pb-4 ">Meine Einkaufswagen</h2>
          </div>
          <div className="max-w-[550px] bg-white p-6">
            <h2 className="font-normal text-3xl leading-9 pb-4">Room uploads and cLassifications</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
