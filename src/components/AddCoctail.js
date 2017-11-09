import React, { Component } from 'react';
import { createStore } from 'redux';

import coctailBase from '../reducers/coctailBase';
import Line from './Line.js'

const store = createStore(coctailBase);

class AddCoctail extends Component{

  addMoreLine(){
    let btn = document.querySelector(".AddLineBtn");
  }
  render() {
    return(
        <form className="addCoctailForm">
          <Line/>
          <Line/>
          <Line/>
          <button className="AddLineBtn" onClick={this.addMoreLine}>Add a line</button>
          <br/>
          <label>Рецепт приготовления</label>
          <textarea></textarea>
          <br/>
          <input type="submit"/>
        </form>
      )
  }
}


export default AddCoctail;
