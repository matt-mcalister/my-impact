import * as actions from './types'
import { push } from 'connected-react-router'

export const setAuthUser = (uid) => {
  return (dispatch) => {
    dispatch({
      type: actions.SET_AUTH_USER,
      payload: uid
    })
    dispatch(push("/home"))
  }

}

export const removeAuthUser = () => {
  console.log("yo", actions.REMOVE_AUTH_USER);
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
