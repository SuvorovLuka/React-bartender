import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/scss/global.scss';
import Alcohol from './components/pages/Alcohol/AlcoholePage'
import Home from './components/pages/Home/Home'
import NotFound from './components/pages/NotFound/NotFoundPage';
import CardDetail from './components/pages/AlcoCardDeatail/AlcoCardDeatail';
import Ingridients from './components/pages/Ingridients/IngridientsPage';
import Cocktails from './components/pages/Cocktails/CockatilsPage';

import Layout from './components/Layout/Layout';

function App() {

  return (
    <div>

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='alcohol' element={<Alcohol />} />
          <Route path='alcohol/:id' element={<CardDetail />} />s
          <Route path='ingridients' element={<Ingridients />} />
          <Route path='cocktails' element={<Cocktails />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
