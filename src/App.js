import React, { Component } from 'react';
import {connect } from 'react-redux';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render(){
    return(
  <div>
    <Header />
    <Main />
    <Footer />
  </div>);
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch =>({})
)(App);
