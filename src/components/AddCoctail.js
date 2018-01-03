import React, { Component } from 'react';
import {connect } from 'react-redux';
import axios from 'axios';
import fs from 'fs'

import Line from './Line.js';
import { addCoctails } from '../apiActions'


class AddCoctail extends Component{
  constructor(props) {
    super(props);
    this.state = {errors : false}
  }

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

  onSetImg(){
    let uploadImg = document.getElementById("uploadImg");
    let uploadImgSorce = window.URL.createObjectURL(document.getElementById("photoloader").files[0]);
    uploadImg.src = uploadImgSorce;
  }

  sendForm(){
    let validation = true;
    function lengthValidation(input){
      if (input.value.length >= 2){
        return input.value
      }else{
        validation = false
        return input.value
      }
    }
    function countValidation(input){
      if (input.value.length > 0 && input.value.length <=3 && input.value > 0 && input.value <=500){
        return input.value
      }else{
        validation = false
        return input.value
      }
    }
    function textAdreaIsValid(){
      return document.getElementById("recipe").value.length >= 10 ?
      true : false
    }
    let components = [];
    for(let i=0;i<this.props.lineState;i++){
      let currentCoctailComponent = "coctailComponent" + i;
      let currentCoctailComponentCount = "coctailComponentCount" + i;
      let currentCoctailComponentUnit = "coctailComponentUnit" + i;

      let coctailComponent = lengthValidation(document.getElementById(currentCoctailComponent));
      let coctailComponentCount = countValidation(document.getElementById(currentCoctailComponentCount));
      let coctailComponentUnit = document.getElementById(currentCoctailComponentUnit).value;

      let component = `${coctailComponent} ${coctailComponentCount}${coctailComponentUnit}`
      components.push(component);
      }

    let imgPath = document.getElementById("uploadImg").src;
    let contentType = document.getElementById("photoloader").files[0].name

    // Нужно взять путь файла из картинки и расширение из инпута загрузки и отправить формой

    let coctail = {
      name: document.getElementById('coctailName').value,
      recipe: document.getElementById('recipe').value,
      components: components,
      img: {data: fs.readFileSync(imgPath), contentType: ""}
    }
    if(validation === true & textAdreaIsValid()){
      if(document.getElementById("recipe").value.length>=10){
          this.props.addCoctails(coctail);
          this.removeLineValues();
          this.props.onResetLineState();
          this.setState({errors : false})}
      }else{
        this.setState({errors: true})
      }
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
          <input type="text" name="name"
          placeholder="Введите название"
          id="coctailName"
          className="formComponent"
          pattern="[A-Za-zА-Яа-яЁё0-9_-]+${3,}"
          required/>
          {lineList}
          <input type="button" className="AddLineBtn"
          onClick={()=>this.addMoreLine()} value="Add a line" />
          <input type="button" className="AddLineBtn"
          onClick={()=>this.removeLastLine()} value="Remove line" />
          <br/>
          <label>Рецепт приготовления</label>
          <textarea id='recipe'
          pattern="[A-Za-zА-Яа-яЁё0-9_-]+${10,}"
          required>
          </textarea>
          <br/>
          <input type="file" id="photoloader" name="photo" accept=".jpg, .jpeg, .png" onChange={()=>this.onSetImg()}/>
          <img id="uploadImg" src = "http://s1.iconbird.com/ico/1012/DownToEarth/w512h5121350592377G12LoadDown.png" />
          <button onClick={()=>console.log(document.getElementById("photoloader").files[0].name)}>Показать</button>

          <input type="button"
          className ={ passing ? "inPassing": ""}
          value="Add coctail"
          onClick={()=>this.sendForm()}/>
          <p className={this.state.errors === false ?
         "hidden" : ""} >
         Название коктейля и компонента должно быть не короче 2 символов<br/>
         Длинна Рецепта должна быть не меньше 10 символов<br/>
         Не забудьте указать количество компонентов
          </p>
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
