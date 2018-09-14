import * as actions from "../actions/types"

const authStateDefault = {
  uid: null,
  participant: null,
  newUserInfo: {
    name: '',
    email: '',
    passwordOne: '',
    image: '',
    creatingUserParticipant: false
  }
}

export default function authReducer( authState = authStateDefault , action ){
  switch (action.type){
    case actions.SET_AUTH_USER:
      return {
        ...authState,
        uid: action.payload
      }
    case actions.SET_PARTICIPANT:
      return {
        ...authState,
        participant: action.payload
      }
    case actions.REMOVE_AUTH_USER:
      return { ...authStateDefault }
    default:
      return { ...authState }
  }
}
