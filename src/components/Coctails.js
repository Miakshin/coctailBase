import React from 'react';
import { connect } from 'react-redux';

import { loadCoctails } from '../apiActions'


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
    console.log(this.props.coctailStore);
    const { loading, coctails, errors } = this.props.coctailStore;
    if(loading){return (<div>Loading</div>)}
    if (errors != null) { return (<div>Error!</div>)}
    console.log(coctails);
    const mapingData =  coctails.map((coctail,id) =>
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
    return(
      <div className="coctailsPage">{mapingData}</div>

    )
  }
}


export default connect(
  state => ({
    coctailStore: state.coctailBase
  })
)(Coctails);
