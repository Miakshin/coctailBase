import React from 'react';
import {   Switch,  Route } from 'react-router-dom';

import Coctails from './Coctails';
import Coctail from './Coctail';

const CoctailRout = ()=>
(
  <Switch>
      <Route exact path='/coctails' component={Coctails}/>
      <Route path='/coctails/:id' component={Coctail}/>
  </Switch>
)

export default CoctailRout
