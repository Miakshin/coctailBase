import React from 'react';
import {connect } from 'react-redux';
import { createStore } from 'redux';


class Coctails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    console.log(this.props.coctailStore)
    const showCoctails = this.props.coctailStore.map((coctail,id) =>
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
      <div className="coctailsPage">{showCoctails}</div>

    )
  }
}


export default connect(
  state => ({
    coctailStore: state.coctailBase
  }),
  dispatch =>({})
)(Coctails);
