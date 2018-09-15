import * as actions from "../actions/types"

const activitiesStateDefault = {
  logs: []
}

export default function activitiesReducer( activitiesState = activitiesStateDefault , action ){
  switch (action.type){
    case actions.SET_LOGS:
      return {
        ...activitiesState,
        logs: action.payload
      }
    case actions.REMOVE_AUTH_USER:
      return { ...activitiesStateDefault }
    default:
      return { ...activitiesState }
  }
}
