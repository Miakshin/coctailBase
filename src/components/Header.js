import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
<nav className="navigation">
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/Coctails'>Coctails</Link></li>
  <li><Link to='/AddCoctail'>Add coctail</Link></li>
  <input type="text"/><button>Search</button>
</nav>

export default Header;
