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
        dispatch(push("/home"))
        firebase.db.collection('participant').doc(uid).collection('entries').get().then( payload => {
          if (payload.docs && payload.docs.length > 0){
            const logs = [...payload.docs].map(doc => doc.data() )
            const sortByDate = (a,b) => {
              const aDate = new Date(a.datePerformed)
              const bDate = new Date(b.datePerformed)
              if (bDate > aDate) return 1;
              if (bDate < aDate) return -1;
              return 0;
            }
            dispatch({
              type: actions.SET_LOGS,
              payload: logs.sort(sortByDate)
            })
          }
        })
      } else {
        dispatch(push("/avatar"))
      }
    })
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
