import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchWraper from './SearchWraper';
import { loadCoctails, getCoctailByName } from '../../apiActions';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = { value: ""};
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }


  handleChangeSearch(event){
    const { dispatch } = this.props;
    dispatch(getCoctailByName(event.target.value));
    this.setState({value: event.target.value});
  }


  render(){
    const getFindedCoctail = ()=>{
      if(this.props.findedCoctails.findedCotails){
        return (
        this.props.findedCoctails.findedCotails.map((el)=>
        <div className="searchedCoctail" key={el._id}
        onClick={()=>this.setState({value: ""})}>
        <img src={el.imgSrc ? el.imgSrc : ''} alt="coctail.photo"
        width="40px" height="40px"/>
        <a href={"/Coctails/" + el._id} >{el.name}</a>
        </div>))
      }else{
        return []
      }
    }

    let findedCoctailsByName = getFindedCoctail();
    const { loading, findedCotails, errors } = this.props.findedCoctails;
    if (errors != null) { return (<div>Error!</div>)}

    return(
      <nav className="navigation">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Coctails'>Coctails</Link></li>
        <li><Link to='/AddCoctail'>Add coctail</Link></li>
        <input type="text" className="inputSearch"
        placeholder="serch coctail..."
        ref={(input)=>{this.searchInput=input}}
        onChange={this.handleChangeSearch}
        value = {this.state.value}
        />
        <SearchWraper className={this.state.value === ""?
      "searchWraper-hiden" : "searchWraper"}
        findedCoctails={findedCoctailsByName}
        loading = {loading}/>
      </nav>
    )
  }
}

export default connect(
  state => ({
    findedCoctails: state.findedCoctails
  })
)(Header);
