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

class App extends Component {

  componentDidMount() {
    firebase.auth.onAuthStateChanged(this.handleAuthStateChanged)
  }

  handleAuthStateChanged = (authUser) => {
    if (authUser) {
      this.props.setAuthUser(authUser.uid)
    } else {
      this.props.removeAuthUser()
    }
  }


  render() {
    return (
      <NavBar>
        <Switch>
          <Route exact path="/login" render={() => {
              if (!this.props.participant) {
                return <LogIn />
              } else {
                return <Redirect to="/home" />
              }
            } }/>
        <Route exact path="/signup" render={() => {
            if (!this.props.participant) {
              return <SignUp />
            } else {
                return <Redirect to="/home" />
            }
            } }/>
          <Route exact path="/settings" render={() => {
              if (this.props.participant) {
                return (<AccountSettings />)
              } else {
                return <Redirect to="/" />
              }
            } }/>
          <Route exact path="/events" render={() => {
              if (this.props.participant) {
                return (<EventsPage />)
              } else {
                return <Redirect to="/" />
              }
            } }/>
          <Route exact path="/home" render={() => {
              if (this.props.participant) {
                return (<Home />)
              } else {
                return <Redirect to="/" />
              }
            } }/>
          <Route exact path="/privacy" render={() => (<Privacy />)}/>
          <Route exact path="/spotlight" render={() => {
              if (this.props.participant) {
                return (<SpotlightsPage />)
              } else {
                return <Redirect to="/" />
              }
            } }/>
          <Route exact path="/terms" render={() => (<Terms />)}/>
        <Route exact path="/" render={() => {
            if (!this.props.participant) {
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
  }
}

export default connect((state) => ({ participant: state.auth.participant, showCapitol: state.visual.showCapitol, router: state.router }),{ removeAuthUser, setAuthUser })(App);
