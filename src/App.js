import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';

import NavBar from "./NavBar"

import { connect } from 'react-redux'
import { changeExampleMessage } from './actions'

class App extends Component {

  handleClick = () => {
    console.log('hello')
    this.props.changeExampleMessage()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h3> { this.props.exampleMessage }</h3>
        <button onClick={this.handleClick}> Click me </button>
      </div>
    );
  }
}

// export default App

const mapStateToProps = (state) => {
  return {
    exampleMessage: state.exampleState.exampleMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeExampleMessage: () => { dispatch(changeExampleMessage()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
