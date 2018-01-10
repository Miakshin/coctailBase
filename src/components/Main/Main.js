import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home/Home';
import CoctailRout from '../Coctails/CoctailRout';
import AddCoctail from '../AddCoctail/AddCoctail';

import './Main.css';

const Main = (props) => (
  <main className="main">
      <Route exact path='/' component={Home}/>
      <Route path='/coctails' component={CoctailRout}/>
      <Route path='/addCoctail' component={AddCoctail}/>
  </main>
)

export default Main;
