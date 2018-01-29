import React from 'react';
import { loadCoctail } from '../../apiActions';
import { connect } from 'react-redux';

import "./Coctail.css"

class Coctail extends React.Component{

  componentDidMount(){
    const { dispatch } = this.props;
    const coctailId = this.props.match.params.id;
    dispatch(loadCoctail(coctailId));
    console.log(this.props)
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
      <p><h3> How to prepare: </h3><br/><pre>{coctail.recipe}</pre></p>
      <footer><span>Added: {coctail.createdAt}</span></footer>
      </article>
    )}

}
}
export default connect(
  state => ({
    coctailFitching: state.coctailFitching
  })
)(Coctail);
