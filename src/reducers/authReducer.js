import { SET_PARTICIPANT } from '../actions/types'


const authStateDefault = {
  id: null,
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
    default:
      return { ...authState }
  }
}
