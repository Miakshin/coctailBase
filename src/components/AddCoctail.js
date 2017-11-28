import React, { Component } from 'react';
import {connect } from 'react-redux';

import Line from './Line.js'


class AddCoctail extends Component{
  constructor(props) {
    super(props);
    this.state = { lineCounts: 2
    };
  }

  addMoreLine(){
    this.setState({lineCounts: this.state.lineCounts+=1});
  }

  sendForm(){
    let components = [];
    for(let i=0;i<this.state.lineCounts;i++){
      let currentCoctailComponent = "coctailComponent" + i;
      let currentCoctailComponentCount = "coctailComponentCount" + i;
      let currentCoctailComponentUnit = "coctailComponentUnit" + i;

      let coctailComponent = document.getElementById(currentCoctailComponent).value;
      let coctailComponentCount = document.getElementById(currentCoctailComponentCount).value;
      let coctailComponentUnit = document.getElementById(currentCoctailComponentUnit).value;

      let component = `${coctailComponent} ${coctailComponentCount}${coctailComponentUnit}`
      components.push(component);
      }

    let coctail = {
      name: document.getElementById('coctailName').value,
      recipe: document.getElementById('recipe').value,
      components: components
    }

    this.props.onAddCoctail(coctail);
  }

  render() {
      let lines=[];
      for( let i=0; i<this.state.lineCounts ;i++ ){
        lines.push(i)
      }
      const lineList = lines.map((id) =>
      <Line id={id} key={id}/>
      )
    return(
        <form className="addCoctailForm">
          <h1>Add a new coctail</h1>
          <label>Название:</label>
          <input type="text" name="name" placeholder="Введите название"
          id='coctailName'/>
          {lineList}
          <button className="AddLineBtn" onClick={()=>this.addMoreLine()}>Add a line</button>
          <br/>
          <label>Рецепт приготовления</label>
          <textarea id='recipe'></textarea>
          <br/>
          <input type="button" value="Add coctail" onClick={()=>this.sendForm()}/>
        </form>
      )
  }
}

export default connect(
  state => ({
    coctailStore: state.coctailBase
  }),
  dispatch =>({
    onAddCoctail: (coctail) =>{
      dispatch({ type: 'ADD_COCTAIL', payload: coctail})
    }
  })
)(AddCoctail);
