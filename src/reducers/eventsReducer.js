import * as actions from "../actions/types"

const eventsStateDefault = {
  attending: {},
  hosting: {},
  all: {},
  selectedEvent: null,
}

export default function eventsReducer( eventsState = eventsStateDefault , action ){
  switch (action.type){
    case actions.SET_EVENTS:
      return {
        ...eventsState,
        ...action.payload,
      }
    case actions.VIEW_EVENT:
      return {
        ...eventsState,
        selectedEvent: action.payload
      }
    case actions.REMOVE_SELECTED_EVENT:
      return {
        ...eventsState,
        selectedEvent: null,
      }
    case actions.REMOVE_AUTH_USER:
      return { ...eventsStateDefault }
    default:
      return { ...eventsState }
  }
}
