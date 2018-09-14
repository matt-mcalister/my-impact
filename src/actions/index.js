import * as actions from './types'
import { push } from 'connected-react-router'
import { firebase } from '../firebase'

export const setAuthUser = (uid) => {
  return async (dispatch) => {
    dispatch({
      type: actions.SET_AUTH_USER,
      payload: uid
    })
    firebase.db.collection('participant').doc(uid).get().then( doc => {
      if (doc.data()) {
        dispatch({
          type: actions.SET_PARTICIPANT,
          payload: doc.data()
        })
      } else {
        dispatch(push("/avatar"))
      }
    })
    // dispatch(push("/home"))
  }

}

export const removeAuthUser = () => {
  return {
    type: actions.REMOVE_AUTH_USER
  }
}

export const setParticipant = () => {
  return {
    type: actions.SET_PARTICIPANT
  }
}
export const removeParticipant = () => {
  return {
    type: actions.REMOVE_PARTICIPANT
  }
}

export const redirect = (path) => (dispatch) => {
  dispatch(push(path))
}
