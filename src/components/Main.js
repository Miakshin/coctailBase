import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Coctails from './Coctails';
import AddCoctail from './AddCoctail';

const Main = (props) => (
  <main className="main">
      <Route exact path='/' component={Home}/>
      <Route path='/coctails' component={Coctails}/>
      <Route path='/addCoctail' component={AddCoctail}/>
  </main>
)

export default Main;
