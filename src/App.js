import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/scss/global.scss';
import Header from './components/Header/Header';
import Alcohol from './components/pages/Alcohol/AlcoholePage'
import Home from './components/pages/Home/Home'
import NotFound from './components/pages/NotFound/NotFoundPage';
// import CardDetail from './pages/AlcoCard_Deatail';
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
