import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Coctails from './Coctails';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/coctails' component={Coctails}/>
    </Switch>
  </main>
)

export default Main;
