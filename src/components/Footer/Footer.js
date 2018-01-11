import React from 'react';

import './Footer.css';

const Footer = () =>
<footer className="footer">
  <p>The application was created as part of the portfolio by Vlad Tkachov</p>
  <address>
  <p>Contact me:<br/>
    <span>phon number: +380938867784</span>
  </p>
  <div className="links">
    <a href="https://github.com/Miakshin/coctailBase" className="link-to-git"></a>
    <a href="https://www.facebook.com/profile.php?id=1450125752" className="link-to-fb"></a>
    <a href="https://dou.ua/users/vlad-tkachyov/" className="link-to-dou" ></a>
  </div>
  </address>
</footer>

export default Footer;
