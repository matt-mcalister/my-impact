import * as actions from "../actions/types"

const eventsStateDefault = {
  attending: [],
  hosting: [],
  all: [],
}

export default function eventsReducer( eventsState = eventsStateDefault , action ){
  switch (action.type){
    case actions.SET_EVENTS:
      return {
        ...eventsState,
        ...action.payload,
      }
    case actions.REMOVE_AUTH_USER:
      return { ...eventsStateDefault }
    default:
      return { ...eventsState }
  }
}
