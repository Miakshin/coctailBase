import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchWraper from './SearchWraper';
import { getCoctailByName } from '../../apiActions';

import './Header.css';

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
        <img src={el.imgSrc ? el.imgSrc : ''} alt="finded coctail"
        />
        <a href={"/Coctails/" + el._id} >{el.name}</a>
        </div>))
      }else{
        return []
      }
    }

    let findedCoctailsByName = getFindedCoctail();
    const { loading, errors } = this.props.findedCoctails;
    if (errors != null) { return (<div>Error!</div>)}

    return(
      <header className="header">
      <div className="label"><Link to='/'><img src="../img/logo.png" alt="logo"/>
      </Link><h1>Coctail Base</h1></div>
      <div className="wrapper">
        <nav className="navigation">
          <Link to='/'>Home</Link>
          <Link to='/Coctails'>Coctails</Link>
          <Link to='/AddCoctail'>Add coctail</Link>
        </nav>
        <div className="search">
          <input type="text" className="inputSearch"
          placeholder="serch coctail..."
          ref={(input)=>{this.searchInput=input}}
          onChange={this.handleChangeSearch}
          value = {this.state.value}
          />
        </div>
        <SearchWraper className={this.state.value === ""?
        "searchWraper-hiden" : "searchWraper"}
          findedCoctails={findedCoctailsByName}
          loading = {loading}/>
      </div>
      </header>
    )
  }
}

export default connect(
  state => ({
    findedCoctails: state.findedCoctails
  })
)(Header);
