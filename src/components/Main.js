import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Coctails from './Coctails';
import AddCoctail from './AddCoctail';
import Coctail from './Coctail';
import CoctailRout from './CoctailRout';

const Main = (props) => (
  <main>
      <Route exact path='/' component={Home}/>
      <Route path='/coctails' component={CoctailRout}/>
      <Route path='/addCoctail' component={AddCoctail}/>
  </main>
)

export default Main;
