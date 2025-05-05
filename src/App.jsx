import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import Middle from './pages/Middle.jsx';
import Contain from './pages/Contain.jsx';
import Host1 from './singlepg/Host1.jsx'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Home />
            <Middle />
            <Contain />
          </>
        } />
        <Route path='/host/1' element={<Host1 />} />
      </Routes>
    </>
  );
}

export default App;
