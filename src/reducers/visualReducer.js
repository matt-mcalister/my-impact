import React from "react"

import { SET_PARTICIPANT, REMOVE_PARTICIPANT } from '../actions/types'

import { Popup, Menu } from "semantic-ui-react"

class Contact extends React.Component {

  state = {
    isOpen: false
  }

  handleOpen = () => {
    this.setState({ isOpen: true })

    this.timeout = setTimeout(() => {
      window.addEventListener("click", this.closePopUp)
    }, 0)
  }

  closePopUp = () => {
    this.setState({ isOpen: false }, window.removeEventListener("click", this.closePopUp))
  }

  handleClose = () => {
    console.log("hey hey");
    this.setState({ isOpen: false })
    clearTimeout(this.timeout)
  }

  render(){
    if (this.state.open) {
      console.log("yo");
    }
    return (
      <Popup
        trigger={<Menu.Item as='a' content='Contact' key='contact' />}
        content={(<div id="contact">
          <h2>Questions?</h2>
          <p>Contact us at: myimpact2018@gmail.com</p>
        </div>)}
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        on="click"
        position='left center'
      />
    )
  }
}

const visualStateDefault = {
  loading: false,
  navBar: {
    left: [],
    right: [
      { as: "a", content: "Sign Up", key: "signup", route: "/signup" },
      { as: "a", content: "Log In", key: "login", route: "/login" },
      { as: Contact, key: "contact" },
      { as: "a", content: "Privacy Policy", key: "privacy", route: "/privacy" },
      { as: "a", content: "Terms of Service", key: "terms", route: "/terms" }
    ]
  }
}

export default function visualReducer(visualState = visualStateDefault, action){
  switch (action.type) {
    case (SET_PARTICIPANT):
      return {
        ...visualState,
        navBar: {
          left: [
          	{ as: "a", content: "Home", key: "home", route: "/home" },
          	{ as: "a", content: "Events", key: "events", route: "/events" },
          	{ as: "a", content: "Spotlight", key: "spotlight", route: "/spotlight" },
          ],
          right: [
            { as: "a", content: "Account Settings", key: "account", route: "/settings" },
            { as: "a", content: "Sign Out", key: "signout", route: "/signout" },
            { as: Contact, key: "contact" },
            { as: "a", content: "Privacy Policy", key: "privacy", route: "/privacy" },
            { as: "a", content: "Terms of Service", key: "terms", route: "/terms" }
          ]
        }
      };
    case (REMOVE_PARTICIPANT):
      return {...visualStateDefault};
    default:
      return {...visualState}
  }
}
