import React from 'react';
import Searchlogo from '../assets/images/search.svg';
const Search = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="max-w-[1200px] m-auto pt-10 pb-20 px-6 mb-2">
          <h1 className=" text-6xl leading-[60px] font-semibold text-gray-800">DETAILED SEARCH</h1>
          <div className="h-[1px] max-w-[1200px] bg-gradient-to-r from-green-600 mb-10"></div>
          <p className="font-normal text-xs leading-[14.63px] text-gray-800 mb-6">*Click on the option ones to add a filter, twice to exclude it from the search</p>
          <div className="flex items-center flex-wrap gap-6 mb-6">
            <h3 className="text-gray-800 text-base leading-6 font-semibold m-0">Enable the recommender</h3>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-green-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="">
            <h3 className="text-gray-800 text-base leading-6 font-semibold mt-0 mx-0 mb-2">Typ</h3>
            <div className="flex items-center gap-2 mb-6">
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Kunstdrucke</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Gemälde</p>
            </div>
          </div>

          <div className="">
            <h3 className="text-gray-800 text-base leading-6 font-semibold mt-0 mx-0 mb-2">Format</h3>
            <div className="flex items-center gap-2 mb-6">
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white hover:bg-green-600 px-3 border border-gray-800">
                <div className="flex items-center gap-[6px]">
                  <div className=" bg-green-600 w-[20px] h-[12px]"></div>
                  Hochformat
                </div>
              </p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white hover:bg-green-600 px-3 border border-gray-800">
                <div className="flex items-center gap-[6px]">
                  <div className=" bg-green-600 w-[11px] h-[21px]"></div>
                  Querformat
                </div>
              </p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white hover:bg-green-600 px-3 border border-gray-800">
                <div className="flex items-center gap-[6px]">
                  <div className=" bg-green-600 w-[19px] h-[19px]"></div>
                  Quadratisch
                </div>
              </p>
            </div>
          </div>

          <div className="">
            <h3 className="text-gray-800 text-base leading-6 font-semibold mt-0 mx-0 mb-2">Themen</h3>
            <div className="relative max-w-[560px]">
              <input
                className=" w-[560px] h-[36px] py-2 px-3 bg-gray-800 opacity-[0.4] border border-gray-800 mb-2 font-medium text-sm leading-5 text-white"
                placeholder="Start typing"
              />
              <img src={Searchlogo} className="absolute right-[12px] top-[10px]" alt="logo" />
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
            </div>
            <h3 className="text-green-600 text-xs leading-4 font-semibold mt-0 mx-0 mb-7">Mehr anzeigen</h3>
          </div>

          <div className="">
            <h3 className="text-gray-800 text-base leading-6 font-semibold mt-0 mx-0 mb-2">Kunststil</h3>
            <div className="relative max-w-[560px]">
              <input
                className=" w-[560px] h-[36px] py-2 px-3 bg-gray-800 opacity-[0.4] border border-gray-800 mb-2 font-medium text-sm leading-5 text-white"
                placeholder="Start typing"
              />
              <img src={Searchlogo} className="absolute right-[12px] top-[10px]" alt="logo" />
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
            </div>
            <h3 className="text-green-600 text-xs leading-4 font-semibold mt-0 mx-0 mb-7">Mehr anzeigen</h3>
          </div>

          <div className="">
            <h3 className="text-gray-800 text-base leading-6 font-semibold mt-0 mx-0 mb-2">Künstler</h3>
            <div className="relative max-w-[560px]">
              <input
                className=" w-[560px] h-[36px] py-2 px-3 bg-gray-800 opacity-[0.4] border border-gray-800 mb-2 font-medium text-sm leading-5 text-white"
                placeholder="Start typing"
              />
              <img src={Searchlogo} className="absolute right-[12px] top-[10px]" alt="logo" />
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
            </div>
            <h3 className="text-green-600 text-xs leading-4 font-semibold mt-0 mx-0 mb-7">Mehr anzeigen</h3>
          </div>

          <div className="">
            <h3 className="text-gray-800 text-base leading-6 font-semibold mt-0 mx-0 mb-2">Publisher</h3>
            <div className="relative max-w-[560px]">
              <input
                className=" w-[560px] h-[36px] py-2 px-3 bg-gray-800 opacity-[0.4] border border-gray-800 mb-2 font-medium text-sm leading-5 text-white"
                placeholder="Start typing"
              />
              <img src={Searchlogo} className="absolute right-[12px] top-[10px]" alt="logo" />
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
            </div>
            <h3 className="text-green-600 text-xs leading-4 font-semibold mt-0 mx-0 mb-7">Mehr anzeigen</h3>
          </div>

          <div className="">
            <h3 className="text-gray-800 text-base leading-6 font-semibold mt-0 mx-0 mb-2">Farben</h3>
            <div className="flex items-center flex-wrap gap-2 mb-7">
              <p className="font-normal text-xs leading-[14.63px] text-white m-0 py-[10px] bg-gray-600 px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-[#FFE6B3] px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-white m-0 py-[10px] bg-[#3366FF] px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-white m-0 py-[10px] bg-[#804000] px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Abstrakt</p>
              <p className="font-normal text-xs leading-[14.63px] text-gray-800 m-0 py-[10px] bg-white px-3 border border-gray-800">Afrikanisch</p>
            </div>
          </div>

          <div className="">
            <h3 className="text-gray-800 text-base leading-6 font-semibold mt-0 mx-0 mb-2">Keyword search</h3>
            <div className="flex items-center flex-wrap gap-2 mb-6">
              <div className="relative max-w-[426px]">
                <input
                  className=" w-[426px] h-[36px] py-2 px-3 bg-gray-800 opacity-[0.4] border border-gray-800 font-medium text-sm leading-5 text-white"
                  placeholder="Start typing"
                />
                <img src={Searchlogo} className="absolute right-[12px] top-[10px]" alt="logo" />
              </div>
              <button className=" font-medium text-sm leading-5 py-2 px-4 border border-green-600">Add keyword</button>
            </div>
          </div>

          <div className="range-slides-container max-w-[560px]">
            <div className="">
              <h3 className="text-gray-800 text-base leading-6 font-semibold mt-0 mx-0 mb-2">Breite</h3>
              <div className="flex items-center flex-wrap gap-2 mt-2 mb-6 justify-between">
                <p className="w-[94px] font-normal text-xs leading-5 text-gray-800 m-0 p-2 bg-white border border-gray-800">Abstrakt</p>
                <p className="w-[107px] font-normal text-xs leading-5 text-gray-800 m-0 p-2 bg-white border border-gray-800">Afrikanisch</p>
              </div>
            </div>

            <div className="">
              <h3 className="text-gray-800 text-base leading-6 font-semibold mt-0 mx-0 mb-2">Höhe</h3>
              <div className="flex items-center flex-wrap gap-2 mt-2 mb-6 justify-between">
                <p className="w-[94px] font-normal text-xs leading-5 text-gray-800 m-0 p-2 bg-white border border-gray-800">Abstrakt</p>
                <p className="w-[107px] font-normal text-xs leading-5 text-gray-800 m-0 p-2 bg-white border border-gray-800">Afrikanisch</p>
              </div>
            </div>

            <div className="">
              <h3 className="text-gray-800 text-base leading-6 font-semibold mt-0 mx-0 mb-2">Preis</h3>
              <div className="flex items-center flex-wrap gap-2 mt-2 mb-6 justify-between">
                <p className="w-[94px] font-normal text-xs leading-5 text-gray-800 m-0 p-2 bg-white border border-gray-800">Abstrakt</p>
                <p className="w-[107px] font-normal text-xs leading-5 text-gray-800 m-0 p-2 bg-white border border-gray-800">Afrikanisch</p>
              </div>
            </div>

            <button className="w-[463px] text-white bg-green-600 text-base leading-6 font-semibold m-0  py-[11px] px-3">Start search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
