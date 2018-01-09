import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Home/Home';
import CoctailRout from '../Coctails/CoctailRout';
import AddCoctail from '../AddCoctail/AddCoctail';

const Main = (props) => (
  <main>
      <Route exact path='/' component={Home}/>
      <Route path='/coctails' component={CoctailRout}/>
      <Route path='/addCoctail' component={AddCoctail}/>
  </main>
)

export default Main;
