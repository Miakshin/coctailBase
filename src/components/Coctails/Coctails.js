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
  }

  render(){
    const { loading, coctails, errors } = this.props.coctailStore;
    if(loading){return (<div className="coctailsListPage"><h2>Loading</h2></div>)}
    if (errors != null) { return (<div className="coctailsListPage"><h2>Error!</h2></div>)}
    if(!coctails){
      return (<div className="coctailsListPage"><h2>No one coctail isn`t finded. Please, upload some coctails</h2></div>)
    }
    const mapingData =  coctails.map((coctail,id) =>
          <article key={id}>
          <img src={coctail.imgSrc ? coctail.imgSrc : ''} alt="coctail" />
          <aside>
            <Link to={"/Coctails/" + coctail._id}>{coctail.name}</Link>
            <div>Components:
              <ul>{
              coctail.components.map((item,id)=>
            <li key={id}>{item}</li>
        )
      }
              </ul>
            </div>
          </aside>
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
