import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Search from './pages/search';
import ProfilerQuestionaire from './pages/profiler-questionaire';
import NegativeFilters from './pages/negative-filters';
import ArtSwiper from './pages/art-swiper';
import StraightAndClearly from './pages/straight-and-clearly';
import RoomClassifier from './pages/room-classifier';

import './App.css';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/profiler-questionaire" element={<ProfilerQuestionaire />} />
      <Route path="/negative-filters" element={<NegativeFilters />} />
      <Route path="/art-swiper" element={<ArtSwiper />} />
      <Route path="/straight-and-clearly" element={<StraightAndClearly />} />
      <Route path="/room-classifier" element={<RoomClassifier />} />
    </Routes>
  );
};
export default App;
