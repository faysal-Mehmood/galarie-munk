import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Search from './pages/search';
import './App.css';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
    </Routes>
  );
};
export default App;
