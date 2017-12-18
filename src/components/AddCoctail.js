import React, { Component } from 'react';
import {connect } from 'react-redux';
import axios from 'axios';

import Line from './Line.js';
import { addCoctails } from '../apiActions'


class AddCoctail extends Component{

  componentDidMount() {
    console.log(this.props.postState)
  }

  addMoreLine(){
    this.props.onAddLine();
    this.setState({ lineCounts: this.props.lineState });

  }

  removeLastLine(){
    this.props.onRemoveLine();
    this.setState({ lineCounts: this.props.lineState });

  }

  removeLineValues(){
      document.getElementById("coctailName").value='';
      document.getElementById("recipe").value='';

    for(let i=0;i<this.props.lineState;i++){
      let currentCoctailComponent = "coctailComponent" + i;
      let currentCoctailComponentCount = "coctailComponentCount" + i;

      document.getElementById(currentCoctailComponent).value='';
      document.getElementById(currentCoctailComponentCount).value='';
    }
  }

  sendForm(){
    let components = [];
    for(let i=0;i<this.props.lineState;i++){
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
    this.props.addCoctails(coctail);
    this.removeLineValues()
    this.props.onResetLineState();
  }

  render() {
      const { passing, errors } = this.props.postState;
      let lines=[];
      for( let i=0; i<this.props.lineState ;i++ ){
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
          <input type="button" className="AddLineBtn"
          onClick={()=>this.addMoreLine()} value="Add a line" />
          <input type="button" className="AddLineBtn"
          onClick={()=>this.removeLastLine()} value="Remove line" />
          <br/>
          <label>Рецепт приготовления</label>
          <textarea id='recipe'></textarea>
          <br/>
          <input type="button"
          className ={ passing ? "inPassing": ""}
          value="Add coctail"
          onClick={()=>this.sendForm()}/>
        </form>
      )
  }
}

export default connect(
  state => ({
    store: state,
    coctailStore: state.coctailBase,
    lineState: state.lineReducer,
    postState: state.postState
  }),
  dispatch =>({
    addCoctails: (coctail)=>{
      dispatch({
          type: 'ADD_COCTAIL_REQUESTED'
      });

      axios({
        method: 'post',
        url: 'http://localhost:3001/coctails',
        data: coctail
      })
      .then(result => {
          dispatch({
              type: 'ADD_COCTAIL_OK'
          })
      })
      .catch(result => {
          dispatch({
              type: 'ADD_COCTAIL_FAIL',
              errors: result.statusText
          })
      })
    },
    onAddLine: () =>{
      dispatch({ type: 'ADD_LINE'})
    },
    onRemoveLine: () =>{
      dispatch({ type: 'REMOVE_LINE'})
    },
    onResetLineState: ()=>{
      dispatch({ type: 'RESET_LINE_STATE'})
    }
  })
)(AddCoctail);
