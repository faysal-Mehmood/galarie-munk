import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Search from './pages/search';
import ProfilerQuestionaire from './pages/profiler-questionaire';
import NegativeFilters from './pages/negative-filters';
import ArtSwiper from './pages/art-swiper';
import StraightAndClearly from './pages/straight-and-clearly';
import RoomClassifier from './pages/room-classifier';
import RoomClassifier2 from './pages/room-classifier2';
import RoomClassifierSearch from './pages/room-classifier-search';
import SingleRecommendationView from './pages/single-recommendation-view';
import VideoProfiel from './pages/videoprofiler';
import ProfielBox from './pages/profileBOx/index';
import { Link } from 'react-router-dom';
import './App.css';
const App = () => {
  return (
    <>
      <div className="bg-green-600 w-full flex flex-wrap">
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
          <Link to="/room-classifier2">room-classifier2</Link>
        </div>
        <div className="p-[10px]">
          <Link to="/room-classifier-search">room-classifier-search</Link>
        </div>
        <div className="p-[10px]">
          <Link to="/single-recommendation-view">
            single-recommendation-view
          </Link>
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
        <Route
          path="/profiler-questionaire"
          element={<ProfilerQuestionaire />}
        />
        <Route path="/negative-filters" element={<NegativeFilters />} />
        <Route path="/art-swiper" element={<ArtSwiper />} />
        <Route path="/VideoProfiel" element={<VideoProfiel />}></Route>
        <Route path="/room-classifier" element={<RoomClassifier />} />
        <Route path="/room-classifier2" element={<RoomClassifier2 />} />
        <Route
          path="/single-recommendation-view"
          element={<SingleRecommendationView />}
        />
        <Route
          path="/room-classifier-search"
          element={<RoomClassifierSearch />}
        />
        <Route path="/Profilebox" element={<ProfielBox />} />
      </Routes>
    </>
  );
};
export default App;
