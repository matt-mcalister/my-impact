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
            dispatch({
              type: actions.SET_LOGS,
              payload: logs
            })
          }
        })
      } else {
        dispatch(push("/avatar"))
      }
    })
  }
}

export const addLog = (log, uid) => {
  return (dispatch) => {
    dispatch({
      type: actions.ADD_LOG,
      payload: log,
    })
    const newLogRef = firebase.db.collection('participant').doc(uid).collection('entries').doc()
    console.log("NEW REF ID: ", newLogRef.id);
    newLogRef.set({...log, id: newLogRef.id}).then(() => dispatch({ type: actions.ADD_ID_TO_LOG, payload: newLogRef.id}) ).catch(console.log)
  }
}

export const setEvents = (uid) => {
  return (dispatch) => {
    firebase.db.collection('events').get().then( payload => {

      if (payload.docs && payload.docs.length > 0){
        const hostingEvents = {}
        const attendingEvents = {}
        const allEvents = {}
         payload.docs.forEach(doc => {
           if (doc.data().hostId === uid) {
             hostingEvents[doc.data().id] = doc.data()
           } else if (doc.data().attendingParticipantIds && doc.data().attendingParticipantIds[uid]) {
             attendingEvents[doc.data().id] = doc.data()
           }
           allEvents[doc.data().id] = doc.data()
         })
        dispatch({
          type: actions.SET_EVENTS,
          payload: {hosting: hostingEvents, attending: attendingEvents, all: allEvents}
        })
      }

    })
  }
}

export const markAsAttending = (participantId, eventObj) => {
  return (dispatch) => {
    if (!eventObj.attendingParticipantIds) {
      eventObj.attendingParticipantIds = {}
    }
    eventObj.attendingParticipantIds = {
      ...eventObj.attendingParticipantIds,
      [participantId]: true,
    }
    dispatch({
      type: actions.MARK_AS_ATTENDING,
      payload: eventObj
    })
    firebase.db.collection('events').doc(eventObj.id).update({
      attendingParticipantIds: eventObj.attendingParticipantIds
    })
  }
}

export const leaveEvent = (participantId, eventObj) => {
  return (dispatch) => {

    delete eventObj.attendingParticipantIds[participantId]

    dispatch({
      type: actions.LEAVE_EVENT,
      payload: eventObj
    })
    firebase.db.collection('events').doc(eventObj.id).update({
      attendingParticipantIds: eventObj.attendingParticipantIds
    })
  }
}

export const removeAuthUser = () => {
  return {
    type: actions.REMOVE_AUTH_USER
  }
}

export const viewEvent = (eventId) => {
  return {
    type: actions.VIEW_EVENT,
    payload: eventId
  }
}

export const removeSelectedEvent = () => {
  return {
    type: actions.REMOVE_SELECTED_EVENT
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
