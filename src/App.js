import React, { Component } from 'react';

import { removeAuthUser, setAuthUser } from './actions'

import { firebase } from './firebase';

import NavBar from "./NavBar"

import { Route, Switch } from "react-router-dom"

import { connect } from 'react-redux'

import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import AccountSettings from "./components/AccountSettings"
import EventsPage from "./components/EventsPage"
import Home from "./components/Home"
import Landing from "./components/Landing"
import Privacy from "./components/Privacy"
import Spotlight from "./components/Spotlight"
import Terms from "./components/Terms"

class App extends Component {

  componentDidMount() {
    firebase.auth.onAuthStateChanged(this.handleAuthStateChanged)
  }

  handleAuthStateChanged = (authUser) => {
    console.log("auth state changed: ", authUser);
    if (authUser) {
      this.props.setAuthUser(authUser.uid)
    } else {
      this.props.removeAuthUser()
    }
  }


  render() {
    console.log(this.props);
    return (
      <NavBar>
        <Switch>
          <Route exact path="/login" render={() => (<LogIn />)}/>
          <Route exact path="/signup" render={() => (<SignUp />)}/>
          <Route exact path="/settings" render={() => (<AccountSettings />)}/>
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
          <div id="capitolImgContainer" style={{
            position: "absolute",
            left: "0",
          }}>
          <img id="capitolImg" src="/images/onboarding-extra-wide.png" alt="The US Capitol"/>
        </div>
      </NavBar>
    );
  }
}

export default connect((state) => ({...state}),{ removeAuthUser, setAuthUser })(App);
