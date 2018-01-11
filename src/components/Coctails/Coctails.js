import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { loadCoctails } from '../../apiActions'

import "./Coctails.css"


class Coctails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {data :[]}
  }

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(loadCoctails());
    console.log(this.props.coctailStore)

  }

  render(){
    const { loading, coctails, errors } = this.props.coctailStore;
    if(loading){return (<div>Loading</div>)}
    if (errors != null) { return (<div>Error!</div>)}
    if(!coctails){
      return (<div><p>No one coctail isn`t finded. Please, upload some coctails</p></div>)
    }
    const mapingData =  coctails.map((coctail,id) =>
          <article key={id}>
          <img src={coctail.imgSrc ? coctail.imgSrc : ''} alt="coctail photo" />
          <p>Название:<Link to={"/Coctails/" + coctail._id}>{coctail.name}</Link></p>
          <p>Компоненты: {
            coctail.components.map((item,id)=>
          <li key={id}>{item}</li>
        )
          }</p>
          <p>Рецепт приготовления: {coctail.recipe}</p>
          </article>
        )
    return(
      <div className="coctailsListPage">{mapingData}</div>

    )
  }
}


export default connect(
  state => ({
    coctailStore: state.coctailBase
  })
)(Coctails);
