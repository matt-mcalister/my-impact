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
    case actions.MARK_AS_ATTENDING:
      let newState = {...eventsState}
      if (newState.hosting[action.payload.id]){
        newState.hosting[action.payload.id] = action.payload
      }
      newState.attending[action.payload.id] = action.payload
      newState.all[action.payload.id] = action.payload
      return newState;
    case actions.REMOVE_AUTH_USER:
      return { ...eventsStateDefault }
    default:
      return { ...eventsState }
  }
}
