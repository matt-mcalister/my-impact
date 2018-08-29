import { SET_PARTICIPANT, REMOVE_PARTICIPANT } from '../actions/types'

const visualStateDefault = {
  loading: false,
  navBar: {
    left: [],
    right: [
      { as: "a", content: "Sign Up", key: "signup", route: "/signup" },
      { as: "a", content: "Log In", key: "login", route: "/login" },
      { as: "a", content: "Contact", key: "contact", route: "/contact" },
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
            { as: "a", content: "Contact", key: "contact", route: "/contact" },
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
