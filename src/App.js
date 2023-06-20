import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/scss/global.scss';
import Header from './components/Header/Header';
import Alcohol from './components/pages/Alcohol/AlcoholePage'
import Home from './components/pages/Home/Home'
import NotFound from './components/pages/NotFound/NotFoundPage';
import CardDetail from './components/pages/AlcoCardDeatail/AlcoCardDeatail';
import Ingridients from './components/pages/Ingridients/IngridientsPage';
import Cocktails from './components/pages/Cocktails/CockatilsPage';

function App() {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/alcohol' element={<Alcohol />} />
          <Route path='/alcohol/:id' element={<CardDetail />} />
          <Route path='/ingridients' element={<Ingridients />} />
          <Route path='/cocktails' element={<Cocktails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
