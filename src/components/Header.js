import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchWraper from './SearchWraper';
import { loadCoctails, onFindCoctail } from '../apiActions';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = { value: ""};
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadCoctails());
  }

  handleChangeSearch(event){
    const { dispatch } = this.props;
    dispatch(onFindCoctail(this.state.value));
    this.setState({value: event.target.value});
  }


  render(){
    const { loading, coctails, errors } = this.props.coctailStore;
    if(loading){return (      <nav className="navigation">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Coctails'>Coctails</Link></li>
            <li><Link to='/AddCoctail'>Add coctail</Link></li>
            <input type="text" className="inputSearch"
            placeholder="serch coctail..."
            ref={(input)=>{this.searchInput=input}}
            onChange={this.handleChangeSearch}
            value = "Loading..."
            />
            <SearchWraper findedCoctails={findedNames}/>
          </nav>)}
    if (errors != null) { return (<div>Error!</div>)}

    const findedNames = this.props.findedCoctails().map((el)=>
  <div className="searchedCoctail" key={el._id}><a href="#">{el.name}</a></div>
)
    console.log(findedNames)


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
        findedCoctails={findedNames}/>
      </nav>
    )
  }
}

export default connect(
  state => ({
    coctailStore: state.coctailBase,
    findedCoctails: ()=>{
      const filtredSoctails =[];
      state.coctailBase.coctails.forEach((el)=>{
        if(el.name.indexOf(state.searchFilter)!==-1){
          filtredSoctails.push(el);
        }
      })
      console.log(filtredSoctails);
      return filtredSoctails
    }
  })
)(Header);
