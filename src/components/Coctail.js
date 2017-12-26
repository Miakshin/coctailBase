import React from 'react';
import { loadCoctail } from '../apiActions';
import { connect } from 'react-redux';

class Coctail extends React.Component{
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(loadCoctail(this.props.match.params.id));
  }
  render(){
    const { loading, coctail, errors } = this.props.coctailFitching;

    const mapedComponents = (components)=>{
      if(components){components.map((conponent, id)=>
      <li key={id}>{conponent}</li>)
    }
  }

    console.log(coctail)
    console.log(loading);
    if(loading){return(<div>Coctail is loading ...</div>)}
    if (errors != null) { return (<div>Error!</div>)}
    if(coctail === []){return(<div> loading...</div>)}
    return (
      <article key={coctail._id}>
      <h1>{coctail.name}</h1>
      <p>Компоненты:</p> <ul>{coctail.components.map((conponent, id)=>
      <li key={id}>{conponent}</li>)}</ul>
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
