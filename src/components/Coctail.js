import React from 'react';
import { loadCoctail } from '../apiActions';
import { connect } from 'react-redux';

class Coctail extends React.Component{

  componentWillMount(){
    const { dispatch } = this.props;
    const coctailId = this.props.match.params.id;
    dispatch(loadCoctail(coctailId));
    console.log(this.props.coctailFitching);
  }

  render(){
    // function getComponents(){
    //   return coctail.components.map((conponent, id)=>
    //   <li key={id}>{conponent}</li>)
    // }

    const { loading, coctail, errors } = this.props.coctailFitching;

    console.log(loading);
    console.log(coctail);
    // console.log(getComponents());

    if (loading){return(<div>Coctail is loading ...</div>)}
    if (errors !== null) { return (<div>Error!</div>)}
    if (coctail === []){return(<div> loading...</div>)}

    return (
      <article key={coctail._id}>
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
    )

}
}
export default connect(
  state => ({
    coctailFitching: state.coctailFitching
  })
)(Coctail);
