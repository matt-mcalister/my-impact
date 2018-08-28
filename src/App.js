import React, { Component } from 'react';

import {setParticipant} from './actions'

import NavBar from "./NavBar"

import { Route } from "react-router-dom"

import { connect } from 'react-redux'
import { changeExampleMessage } from './actions'

import LogIn from "./components/LogIn"
import Landing from "./components/Landing"

class App extends Component {
  componentDidMount(){

  }


  render() {
    return (
      <NavBar>
        <Route path="/login" render={LogIn}/>
        <Route exact path="/" render={Landing}/>
        <Route path="/:catch" render={() => {
          return <div>Whoops!</div>
        }} />
      </NavBar>
    );
  }
}

export default connect(null,{setParticipant})(App);
