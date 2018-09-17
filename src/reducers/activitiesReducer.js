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
    case actions.ADD_LOG:
      return {
        ...activitiesState,
        logs: [
          ...activitiesState.logs,
          {
            ...action.payload,
            id: `TEMPORARY-${Math.random()*Math.random()*Math.random()}`
          }
        ]
      }
    case actions.ADD_ID_TO_LOG:
    const newLogs = [...activitiesState.logs]
      const log = newLogs.find(l => l.id.includes("TEMPORARY") )
      newLogs[newLogs.indexOf(log)] = {
        ...log,
        id: action.payload,
      }

      return {
        ...activitiesState,
        logs: newLogs,
      }
    case actions.REMOVE_AUTH_USER:
      return { ...activitiesStateDefault }
    default:
      return { ...activitiesState }
  }
}
