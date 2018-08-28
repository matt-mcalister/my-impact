import { SET_PARTICIPANT } from '../actions/types'

const visualStateDefault = {
  loading: false,
  navBar: {
    left: [],
    right: [
      { as: "a", content: "Sign Up", key: "signup" },
      { as: "a", content: "Log In", key: "login" },
      { as: "a", content: "Contact", key: "contact" },
      { as: "a", content: "Privacy Policy", key: "privacy" },
      { as: "a", content: "Terms of Service", key: "terms" }
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
          	{ as: "a", content: "Home", key: "home" },
          	{ as: "a", content: "Events", key: "events" },
          	{ as: "a", content: "Spotlight", key: "spotlight" },
          ],
          right: [
            { as: "a", content: "Account Settings", key: "account" },
            { as: "a", content: "Sign Out", key: "signout" },
            { as: "a", content: "Contact", key: "contact" },
            { as: "a", content: "Privacy Policy", key: "privacy" },
            { as: "a", content: "Terms of Service", key: "terms" }
          ]
        }
      }
    default:
      return {...visualState}
  }
}
