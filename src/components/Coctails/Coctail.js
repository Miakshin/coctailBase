import React from 'react';
import { loadCoctail } from '../../apiActions';
import { connect } from 'react-redux';

import "./Coctail.css"

class Coctail extends React.Component{

  componentDidMount(){
    const { dispatch } = this.props;
    const coctailId = this.props.match.params.id;
    dispatch(loadCoctail(coctailId));
  }

  getStringDate(data="0T0.1"){
    let day = data.split("T")[0];
    let time = data.split("T")[1].split(".")[0];
    return `${day} at ${time}`;
  }
  render(){

    const { loading, coctail, errors } = this.props.coctailFitching;

    if (loading){return(<div>Coctail is loading ...</div>)}
    if (errors !== null) { return (<div>Error!</div>)}
    if (coctail === []){return(<div> loading...</div>)}
    if (coctail){return (
      <article className="coctailPage" key={coctail._id}>
        <div className="flex">
          <img src={coctail.imgSrc ? coctail.imgSrc : ''} alt="coctail photo" />
          <div className="flexWrapper">
            <h1>{coctail.name}</h1>
            <div className="componentWrapper">
              <h2>you will need:</h2>
              <ul>{
                  coctail.components ? coctail.components.map((conponent, id)=>
                <li key={id}>
                {conponent}</li>) : ""}
              </ul>
            </div>
          </div>
        </div>
      <div className="recipeWraper"><h3> How to prepare: </h3><pre>{coctail.recipe}</pre></div>
      <footer><span>Added: {this.getStringDate(coctail.createdAt)}</span></footer>
      </article>
    )}

}
}
export default connect(
  state => ({
    coctailFitching: state.coctailFitching
  })
)(Coctail);
