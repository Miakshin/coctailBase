import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Header extends React.Component{
  onChangeSearch(){
    const coctailName=this.searchInput.value;
    axios.get("http://localhost:3001/coctails")
    .then(res=>{
      res.data.find((el)=>{
        if(el.name.toLowerCase().indexOf(coctailName)!==-1){
          console.log(el.name)
        }
      })
    })
  }
  render(){



    return(
      <nav className="navigation">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Coctails'>Coctails</Link></li>
        <li><Link to='/AddCoctail'>Add coctail</Link></li>
        <input type="text" placeholder="serch coctail..."
        ref={(input)=>{this.searchInput=input}}
        onChange={()=>this.onChangeSearch()}/>
      </nav>
    )
  }
}

export default Header;
