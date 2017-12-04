import React from 'react';
import {connect } from 'react-redux';
import axios from 'axios';


class Coctails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {data :[]}
  }

  loadDataFromApi(){
    axios.get("http://localhost:3001/coctails")
    .then(res=>{
    let mapedData = res.data.map((coctail,id) =>
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
    this.setState({data: mapedData});

    })
  }

  componentDidMount(){
    this.loadDataFromApi();
    // setTimeout(this.loadDataFromApi, 2000);
  }

  render(){
    return(
      <div className="coctailsPage">{this.state.data}</div>

    )
  }
}


export default connect(
  state => ({
    coctailStore: state.coctailBase
  }),
  dispatch =>({})
)(Coctails);
