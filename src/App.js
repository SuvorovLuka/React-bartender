import React from 'react';
import './assets/scss/global.scss';
import Header from './components/Header/index';
import Alcohol from './pages/Alcohol';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import CardDetail from './pages/AlcoCard_Deatail';
import Ingridients from './pages/Ingridients';
import Cocktails from './pages/Coctails';

function App() {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/alcohol' element={<Alcohol />}></Route>
          <Route path='/ingridients' element={<Ingridients />}></Route>
          <Route path='/cocktails' element={<Cocktails />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
