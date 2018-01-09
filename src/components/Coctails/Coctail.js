import React from 'react';
import { loadCoctail } from '../../apiActions';
import { connect } from 'react-redux';

class Coctail extends React.Component{

  componentWillMount(){
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
      <article key={coctail._id}>
      <img src={coctail.imgSrc ? coctail.imgSrc : ''} alt="coctail photo" />
      <h1>{coctail.name}</h1>
      <div>
        <ul>{
            coctail.components ? coctail.components.map((conponent, id)=>
          <li key={id}>
          {conponent}</li>) : ""}
        </ul>
      </div>
      <p>Рецепт:{coctail.recipe}</p>
      <footer><span>Добавлен {coctail.createdAt}</span></footer>
      </article>
    )}

}
}
export default connect(
  state => ({
    coctailFitching: state.coctailFitching
  })
)(Coctail);
