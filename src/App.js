import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Search from './pages/search';
import ProfilerQuestionaire from './pages/profiler-questionaire';
import NegativeFilters from './pages/negative-filters';
import ArtSwiper from './pages/art-swiper';
import StraightAndClearly from './pages/straight-and-clearly';
import RoomClassifier from './pages/room-classifier';
import VideoProfiel from './pages/videoprofiler';
import ProfielBox from './pages/profileBOx/index';
import { Link } from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <>
      <div className="bg-green-600 w-full flex">
        <div className="p-[10px]">
          <Link to="/">PROFILER</Link>
        </div>
        <div className="p-[10px]">
          <Link to="/profiler-questionaire">profiler-questionaire</Link>
        </div>
        <div className="p-[10px]">
          <Link to="/negative-filters">negative-filters</Link>
        </div>
        <div className="p-[10px]">
          <Link to="/art-swiper">art-swiper</Link>
        </div>
        <div className="p-[10px]">
          <Link to="/room-classifier">room-classifier</Link>
        </div>
        <div className="p-[10px]">
          <Link to="/search">PROFILER</Link>
        </div>
        <div className="p-[10px]">
          <Link to="/VideoProfiel">VideoProfiel</Link>
        </div>
        <div className="p-[10px]">
          <Link to="/Profilebox">Profilebox</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<StraightAndClearly />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profiler-questionaire" element={<ProfilerQuestionaire />} />
        <Route path="/negative-filters" element={<NegativeFilters />} />
        <Route path="/art-swiper" element={<ArtSwiper />} />
        <Route path="/VideoProfiel" element={<VideoProfiel />}></Route>
        <Route path="/room-classifier" element={<RoomClassifier />} />
        <Route path="/Profilebox" element={<ProfielBox />} />
      </Routes>
    </>
  );
};
export default App;
