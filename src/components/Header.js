import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
<nav>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/Coctails'>Coctails</Link></li>
</nav>

export default Header;
