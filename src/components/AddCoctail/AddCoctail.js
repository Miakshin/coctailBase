import React, { Component } from 'react';
import {connect } from 'react-redux';
import axios from 'axios';

import Line from './Line.js';

import "./AddCoctail.css";

function printErrorMasage(err){

  if(!document.getElementsByClassName("errorSpan")[0]){

  let perent = document.getElementById("addCoctailForm");
  let resetBtn =  document.getElementsByClassName("AddLineBtn")[1];
  let span = document.createElement("span");
  span.innerHTML = err;
  span.className = "errorSpan";
  perent.insertBefore(span, resetBtn.nextSibling);
  setTimeout(()=>{perent.removeChild(document.getElementsByClassName("errorSpan")[0])}, 5000);
  }
}

class AddCoctail extends Component{
  constructor(props) {
    super(props);
    this.state = {errors : false}
  }

  addMoreLine(){
    this.props.lineState < 12 ?
    this.props.onAddLine() :
    printErrorMasage('Too much components')
  }

  removeLastLine(){
    this.props.lineState > 2 ?
    this.props.onRemoveLine() :
    printErrorMasage('Minimal amount of lines');

  }

  removeLineValues(){
    document.getElementById("uploadImg").src="./img/default.png";
    let form = document.getElementById("addCoctailForm");
    form.reset();
  }

  onSetImg(){
    let uploadedImg = document.getElementById("uploadImg"); //находим картинку куда будет подгружать загруженную картинку
    let uploadingImg = document.getElementById("photoloader").files[0]; //достаём файл из формы

    var reader = new FileReader();
      reader.onloadend = function() {
        uploadedImg.src =  reader.result;
      }
      reader.readAsDataURL(uploadingImg)

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

    let imgSrc = document.getElementById("uploadImg").src;

    // Нужно взять путь файла из картинки и расширение из инпута загрузки и отправить формой

    let coctail = {
      name: document.getElementById('coctailName').value,
      recipe: document.getElementById('recipe').value,
      components: components,
      imgSrc: imgSrc
    }

    if(validation === true & textAdreaIsValid()){
          this.props.addCoctails();
          axios({
            method: 'post',
            url: 'http://localhost:3001/coctails',
            data: coctail
          })
          .then((res)=>{
              this.props.getSendStatus()
          })
          .then((res)=>{
            this.clearForm()
          })
          .catch((result)=>{
            if(result.request.status !== 0){
              this.props.getSendError(result);
                if(result.response.status === 413){
                  printErrorMasage("Coctail photo too large!")
                }
          }else{
            printErrorMasage("Can not connect to the server. Check your internet connection");
          }
        })
      }else{
        console.log(coctail);
        this.setState({errors: true})
      }
  }

  clearForm(){
    this.removeLineValues();
    this.props.onResetLineState();
    this.setState({errors : false})
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
        <form id="addCoctailForm">
          <h1>Add a new coctail</h1>
          <input type="text" name="name"
          placeholder="Coctail colls ..."
          id="coctailName"
          className="formComponent"
          pattern="[A-Za-zА-Яа-яЁё0-9_-]+${3}"
          required/>
          <div className="lineList">
            {lineList}
          </div>
          <input type="button" className="AddLineBtn"
          onClick={()=>this.addMoreLine()} value="Add a line" />
          <input type="button" className="AddLineBtn"
          onClick={()=>this.removeLastLine()} value="Remove line" />
          <br/>
          <textarea id='recipe'
          pattern="[A-Za-zА-Яа-яЁё0-9_-]+${10}"
          required
          placeholder="input recipe of this coctail!">
          </textarea>
          <br/>
          <div>
            <div id="imgPicker">
              <input type="button" value="select file" onClick={()=>{
                document.getElementById("photoloader").click();
              }}/>
              <input type="file" id="photoloader" name="photo" accept=".jpg, .jpeg, .png" onChange={()=>this.onSetImg()}/>
              <img id="uploadImg" src = "./img/default.png" />
            </div>
            <input type="button"
            id="sendForm"
            className ={ passing ? "inPassing": ""}
            value="Add coctail"
            onClick={()=>this.sendForm()}/>
          </div>
          <p className={this.state.errors === false ?
         "hidden" : "error"} >
         Name of a coctail and components shuld be longer then two lettrs<br/>
         recipe length shuld be longer then ten lettrs<br/>
         Don`t forget about a coctail photo
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
    addCoctails: ()=>{
      dispatch({
          type: 'ADD_COCTAIL_REQUESTED'
      });

      // axios({
      //   method: 'post',
      //   url: 'http://localhost:3001/coctails',
      //   data: coctail
      // })
      // .then(result => {
      //     dispatch({
      //         type: 'ADD_COCTAIL_OK'
      //     })
      // })
      // .catch(result => {
      //     dispatch({
      //         type: 'ADD_COCTAIL_FAIL',
      //         errors: result.statusText
      //     })
      // })
    },

    getSendStatus: ()=>{
      dispatch({
          type: 'ADD_COCTAIL_OK'
      })
    },
    getSendError: (result)=>{
      dispatch({
          type: 'ADD_COCTAIL_FAIL',
          errors: result.response.statusText
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
