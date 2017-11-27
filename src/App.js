import React, { Component } from 'react';
import {connect } from 'react-redux';

import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return(
  <div>
  {console.log(this.props.testStore)}
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
