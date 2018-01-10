import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => (
  <main className="home">
    <div className="homeWrapper">
    <h1>Simplу Recipe Collection</h1>
      <p>
      Welcome to big coctail collection. Today you have the opportunity enjoy cocktails from our collection and spend time with pleasure.
      Transitions to our recipe store to find something to taste.<br/>
      <Link to='/Coctails'>Let`s try</Link>
      </p>
    </div>
  </main>
  );

export default Home;
