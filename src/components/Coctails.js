import React from 'react';
import {connect } from 'react-redux';
import { createStore } from 'redux';


class Coctails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

    showCoctails(store){
      store.coctailBase.map((coctail,id) =>
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
    )}

  render(){
    return(
      <div className="coctailsPage">{this.showCoctails(this.props.coctailStore)}</div>

    )
  }
}


export default connect(
  state => ({
    coctailStore: state
  }),
  dispatch =>({})
)(Coctails);
