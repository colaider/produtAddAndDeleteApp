import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import List from "./comp/index"
import About from "./comp/about"
import Header from "./comp/headr"
import { useSelector } from 'react-redux';
function App() {
  
  return (
  <BrowserRouter>
      <div>
        <Header/>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/product" element={<About />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
