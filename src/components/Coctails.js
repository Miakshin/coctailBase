import React from 'react';
import { createStore } from 'redux';

import coctailBase from '../reducers/coctailBase';

const store = createStore(coctailBase);


class Coctails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {store: store.getState()
    };
  }
  render(){
    const showCoctails = this.state.store.map((coctail,id) =>
    <article key={id}>
      <img src={coctail.img}/>
      <p>Название: {coctail.name}</p>
      <p>Компоненты: {
        coctail.components.map((item,id)=>
      <li key={id}>{item}</li>
    )
      }</p>
      <p>Рецепт приготовления: {coctail.recipe}</p>
    </article>
  )

    return(
      <div>{showCoctails}</div>
    )
  }
}

export default Coctails;
