import * as actions from '../actions/types'

import Contact from "../components/Contact"

const visualStateDefault = {
  loading: false,
  showCapitol: true,
  navBar: {
    left: [],
    right: [
      { as: "a", content: "Sign Up", key: "signup", route: "/signup" },
      { as: "a", content: "Log In", key: "login", route: "/login" },
      { as: Contact, key: "contact" },
      { as: "a", content: "Privacy Policy", key: "privacy", route: "/privacy" },
      { as: "a", content: "Terms of Service", key: "terms", route: "/terms" }
    ]
  },
}

export default function visualReducer(visualState = visualStateDefault, action){
  switch (action.type) {
    case (actions.SET_AUTH_USER):
      return {
        ...visualState,
        showCapitol: false,
        navBar: {
          left: [
          	{ as: "a", content: "Home", key: "home", route: "/home" },
          	{ as: "a", content: "Events", key: "events", route: "/events" },
          	{ as: "a", content: "Spotlights", key: "spotlight", route: "/spotlights" },
            { as: "a", content: "About", key: "about", route: "/about" },
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
    case (actions.SHOW_CAPITOL):
      return {
        ...visualState,
        showCapitol: true,
      }
    case (actions.HIDE_CAPITOL):
      return {
        ...visualState,
        showCapitol: false,
      }
    case (actions.REMOVE_AUTH_USER):
      return { ...visualStateDefault };
    default:
      return {...visualState}
  }
}
