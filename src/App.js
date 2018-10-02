import React, { Component } from 'react';

import { removeAuthUser, setAuthUser } from './actions'

import { firebase } from './firebase';

import NavBar from "./NavBar"

import { Route, Switch, Redirect } from "react-router-dom"

import { connect } from 'react-redux'

import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import AccountSettings from "./components/AccountSettings"
import EventsPage from "./components/EventsPage"
import Home from "./components/Home"
import Landing from "./components/Landing"
import Privacy from "./components/Privacy"
import SpotlightsPage from "./components/SpotlightsPage"
import Terms from "./components/Terms"
import PickAvatar from "./components/PickAvatar"

class App extends Component {

  componentDidMount() {
    this.authListener = firebase.auth.onAuthStateChanged(this.handleAuthStateChanged)
  }

  handleAuthStateChanged = (authUser) => {
    if (authUser) {
      this.props.setAuthUser(authUser.uid)
    } else {
      this.props.removeAuthUser()
    }
  }

  componentWillUnmount(){
    this.authListener()
  }


  render() {
    return (
      <NavBar>
        <Switch>
          <Route exact path="/login" render={() => {
              if (!firebase.isAuthenticated()) {
                return <LogIn />
              } else {
                return <Redirect to="/home" />
              }
            } }/>
        <Route exact path="/signup" render={() => {
            if (!firebase.isAuthenticated()) {
              return <SignUp />
            } else {
                return <Redirect to="/home" />
            }
            } }/>
          <Route exact path="/settings" render={() => {
              if (firebase.isAuthenticated()) {
                return (<AccountSettings />)
              } else {
                return <Redirect to="/" />
              }
            } }/>
          <Route exact path="/settings/avatar" render={() => {
              if (firebase.isAuthenticated()) {
                return (<PickAvatar />)
              } else {
                return <Redirect to="/" />
              }
            } }/>
          <Route exact path="/events" render={() => {
              if (firebase.isAuthenticated()) {
                return (<EventsPage />)
              } else {
                return <Redirect to="/" />
              }
            } }/>
          <Route exact path="/home" render={() => {
              if (firebase.isAuthenticated()) {
                return (<Home />)
              } else {
                return <Redirect to="/" />
              }
            } }/>
          <Route exact path="/privacy" render={() => (<Privacy />)}/>
          <Route exact path="/spotlight" render={() => {
              if (firebase.isAuthenticated()) {
                return (<SpotlightsPage />)
              } else {
                return <Redirect to="/" />
              }
            } }/>
          <Route exact path="/terms" render={() => (<Terms />)}/>
        <Route exact path="/" render={() => {
            if (!firebase.isAuthenticated()) {
              return <Landing />
            } else {
                return <Redirect to="/home" />
            }
      } }/>
          <Route exact path="/:catch" render={() => {
            return (<div>Whoops!</div>)
          }} />
        </Switch>
          {this.props.showCapitol && (<div id="capitolImgContainer" style={{
            position: "absolute",
            left: "0",
          }}>
          <img id="capitolImg" src="/images/onboarding-extra-wide.png" alt="The US Capitol"/>
        </div>)}
      </NavBar>
      );
    // }
  }
}

export default connect((state) => ({ participant: state.auth.participant, showCapitol: state.visual.showCapitol, router: state.router, popUrl: state.visual.popUrl }),{ removeAuthUser, setAuthUser })(App);
