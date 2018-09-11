import React, { Component } from 'react';

import { removeParticipant } from './actions'

import NavBar from "./NavBar"

import { Route, Switch, Redirect } from "react-router-dom"

import { connect } from 'react-redux'

import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import AccountSettings from "./components/AccountSettings"
import Contact from "./components/Contact"
import EventsPage from "./components/EventsPage"
import Home from "./components/Home"
import Landing from "./components/Landing"
import Privacy from "./components/Privacy"
import Spotlight from "./components/Spotlight"
import Terms from "./components/Terms"

class App extends Component {


  render() {
    console.log("butts")
    return (
      <NavBar>
        <Switch>
          <Route exact path="/login" render={() => (<LogIn />)}/>
          <Route exact path="/signup" render={() => (<SignUp />)}/>
          <Route exact path="/settings" render={() => (<AccountSettings />)}/>
          <Route exact path="/contact" render={() => (<Contact />)}/>
          <Route exact path="/events" render={() => (<EventsPage />)}/>
          <Route exact path="/home" render={() => (<Home />)}/>
          <Route exact path="/privacy" render={() => (<Privacy />)}/>
          <Route exact path="/spotlight" render={() => (<Spotlight />)}/>
          <Route exact path="/terms" render={() => (<Terms />)}/>
          <Route exact path="/" render={() => (<Landing />)}/>
          <Route exact path="/:catch" render={() => {
            return (<div>Whoops!</div>)
          }} />
        </Switch>
      </NavBar>
    );
  }
}

export default connect((state) => ({...state}),{ removeParticipant })(App);
