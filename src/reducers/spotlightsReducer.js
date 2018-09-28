import * as actions from "../actions/types"

const spotlightsStateDefault = {
  all: {},
  selectedSpotlight: null,
}

export default function spotlightsReducer( spotlightsState = spotlightsStateDefault , action ){
  switch (action.type){
    case actions.SET_SPOTLIGHTS:
      return {
        ...spotlightsState,
        ...action.payload,
      }
    case actions.VIEW_SPOTLIGHT:
      return {
        ...spotlightsState,
        selectedSpotlight: action.payload
      }
    case actions.REMOVE_SELECTED_SPOTLIGHT:
      return {
        ...spotlightsState,
        selectedSpotlight: null,
      }
    case actions.REMOVE_AUTH_USER:
      return { ...spotlightsStateDefault }
    default:
      return { ...spotlightsState }
  }
}
