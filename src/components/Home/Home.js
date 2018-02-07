import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => (
  <main className="home">
    <div className="homeWrapper">
    <h1>Simplу Recipe Collection</h1>
      <div>
      <h2>Cocktails are mysterious drinks. It is necessary to try a lot to choose the one, to your liking. And its quality depends on the skill of the bartender.</h2>
      <span>Welcome to big coctail collection. Today you have the opportunity enjoy cocktails from our collection and spend time with pleasure.
      Transitions to our recipe store to find something to taste.</span><br/>
      <Link to='/Coctails'>Let`s try</Link>
      </div>
    </div>
  </main>
  );

export default Home;
