import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import close from './img/close.svg';

import Navbar from './components/navbar';
import Punct1 from './components/punct1';
import Punct2 from './components/punct2';
import Punct3 from './components/punct3';
import Punct4 from './components/punct4';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-left">
          <div className="App-left-logo"></div>
          <Navbar />
        </div>
        <div className="App-center">
          <div className="App-center-top">
            <Navbar />
          </div>
          <div className="App-center-main">
            <div className="App-center-content">
            <h1>Заголовок страницы</h1>
              <Routes>
                <Route path='/punct1' element={<Punct1 />} />
                <Route path='/punct2' element={<Punct2 />} />
                <Route path='/punct3' element={<Punct3 />} />
                <Route path='/punct4' element={<Punct4 />} />
              </Routes>
            </div>
          </div>
        </div>
        <div className="App-right">
          <div className="App-right-close"><img src={close} alt="" /> <p>Выход</p></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
