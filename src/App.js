import React, { Component } from 'react';
import logo from './logo.svg';
import logo2 from './logo2.svg';
import './App.css';

import {setParticipant} from './actions'

import NavBar from "./NavBar"

import { connect } from 'react-redux'
import { changeExampleMessage } from './actions'

class App extends Component {



  render() {
    return (
      <NavBar>
      <h1>shit and stuff</h1>
      <button onClick={this.props.setParticipant}> login </button>
      </NavBar>
    );
  }
}

export default connect(null,{setParticipant})(App);
