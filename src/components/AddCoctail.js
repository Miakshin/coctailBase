import React, { Component } from 'react';

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
    const inputs = document.querySelectorAll('.addCoctailForm input');
    for(var key of inputs){
      console.log(key.value)
    }
    const freshComponents = document.querySelectorAll("div[class|=\"line\"] ");
    // const freshComponents = document.querySelectorAll("div[class|=\"line\"] input[type=\"text\"]");
    for(let i=0;i<freshComponents.length;i++){
      let component ='';
      let children = freshComponents[i].childNodes;
      for(var key of children){
        if(key.value !== undefined){
          component+=" " + key.value;
        };
      }
      console.log(component);
    }
    console.log(freshComponents);
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
          <input type="text" name="name" placeholder="Введите название"/>
          {lineList}
          <button className="AddLineBtn" onClick={()=>this.addMoreLine()}>Add a line</button>
          <br/>
          <label>Рецепт приготовления</label>
          <textarea></textarea>
          <br/>
          <input type="submit" onClick={()=>this.sendForm()}/>
        </form>
      )
  }
}


export default AddCoctail;
