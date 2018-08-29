import { SET_PARTICIPANT, REMOVE_PARTICIPANT } from './types'
import { push } from 'connected-react-router'


export const setParticipant = () => {
  return {
    type: SET_PARTICIPANT
  }
}
export const removeParticipant = () => {
  return {
    type: REMOVE_PARTICIPANT
  }
}

export const redirect = (path) => (dispatch) => {
  dispatch(push(path))
}
