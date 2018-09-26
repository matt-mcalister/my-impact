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
      let newStateAttending = {...eventsState}
      if (newStateAttending.hosting[action.payload.id]){
        newStateAttending.hosting[action.payload.id] = action.payload
      }
      newStateAttending.attending[action.payload.id] = action.payload
      newStateAttending.all[action.payload.id] = action.payload
      return newStateAttending;
    case actions.LEAVE_EVENT:
      let newStateLeaving = {...eventsState}
      if (newStateLeaving.hosting[action.payload.id]){
        newStateLeaving.hosting[action.payload.id] = action.payload
      }
      delete newStateLeaving.attending[action.payload.id]
      newStateLeaving.all[action.payload.id] = action.payload
      return newStateLeaving;
    case actions.REMOVE_AUTH_USER:
      return { ...eventsStateDefault }
    default:
      return { ...eventsState }
  }
}
