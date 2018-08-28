import { SET_PARTICIPANT } from '../actions/types'

const visualStateDefault = {
  loading: false,
  navBar: {
    left: [],
    right: []
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
          	{ as: "a", icon: "setting", key: "setting" },
          ]
        }
      }
      break;
    default:
      return {...visualState}
  }
}
