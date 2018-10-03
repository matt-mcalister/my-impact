import * as actions from "../actions/types"

const authStateDefault = {
  uid: null,
  participant: null,
  newUserInfo: {
    goal: 50,
    isAdmin: false,
    isGoalPublic: false,
    isVerified: false,
    usernameIndex: '',
    name: '',
    username: '',
    image: '',
    creatingUserParticipant: false
  },
  authError: null,
}

export default function authReducer( authState = authStateDefault , action ){
  switch (action.type){
    case actions.SET_AUTH_USER:
      return {
        ...authState,
        uid: action.payload,
        authError: null,
      }
    case actions.AUTH_ERROR:
      return {
        ...authState,
        authError: action.payload,
      }
    case actions.CLEAR_ERROR:
      return {
        ...authState,
        authError: null,
      }
    case actions.SET_PARTICIPANT:
      return {
        ...authState,
        participant: action.payload
      }
    case actions.CREATE_AUTH_USER:
      return {
        ...authState,
        newUserInfo: {
          ...authState.newUserInfo,
          ...action.payload,
          usernameIndex: action.payload.username,
          creatingUserParticipant: true,
        }
      }
    case actions.UPDATE_GOAL:
      return {
        ...authState,
        participant: {
          ...authState.participant,
          goal: action.payload,
        }
      }
    case actions.UPDATE_IMAGE:
      return {
        ...authState,
        participant: {
          ...authState.participant,
          image: action.payload,
        }
      }
    case actions.REMOVE_AUTH_USER:
      return { ...authStateDefault }
    default:
      return { ...authState }
  }
}
