import * as actions from './types'
import { push } from 'connected-react-router'
import { firebase, auth } from '../firebase'


export const setAuthUser = (uid) => {
  return async (dispatch) => {
    dispatch({
      type: actions.SET_AUTH_USER,
      payload: uid
    })
    window.localStorage.setItem(firebase.storageKey, uid)
    firebase.db.collection('participant').doc(uid).get().then( doc => {
      if (doc.data()) {
        dispatch({
          type: actions.SET_PARTICIPANT,
          payload: doc.data()
        })
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
        dispatch(push("/settings/avatar"))
      }
    })
  }
}

export const createAuthUser = ({ name, username, email, password }) => {
  return (dispatch) => {
    dispatch({
      type: actions.CREATE_AUTH_USER,
      payload: {
        name,
        username,
      }
    })
    auth.doCreateUserWithEmailAndPassword(email, password)
      .then(resp => {
        const newParticipant = {
          id: resp.user.uid,
          attendingEventIds: {},
          name,
          username,
          goal: 50,
          isAdmin: false,
          isGoalPublic: false,
          isVerified: false,
          usernameIndex: username,
        }
        firebase.db.collection('participant').doc(resp.user.uid).set(newParticipant)
        dispatch({
          type: actions.SET_PARTICIPANT,
          payload: newParticipant,
        })
        dispatch(push("/settings/avatar"))
      })
      .catch(err => dispatch({
        type: actions.AUTH_ERROR,
        payload: err,
      }))
  }
}

export const clearError = () => {
  return {
    type: actions.CLEAR_ERROR
  }
}

export const addLog = (log, uid) => {
  return (dispatch) => {
    dispatch({
      type: actions.ADD_LOG,
      payload: log,
    })
    const newLogRef = firebase.db.collection('participant').doc(uid).collection('entries').doc()
    newLogRef.set({...log, id: newLogRef.id}).then(() => dispatch({ type: actions.ADD_ID_TO_LOG, payload: newLogRef.id}) )
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
           if (doc.data()){
             const event = doc.data()
             if (event.hostId === uid) {
               hostingEvents[event.id] = event
             } else if (event.attendingParticipantIds && event.attendingParticipantIds[uid]) {
               attendingEvents[event.id] = event
             }
             if (!event.attendingParticipantIds) {
               event.attendingParticipantIds = {}
             }
             allEvents[event.id] = event
           }
         })
        dispatch({
          type: actions.SET_EVENTS,
          payload: {hosting: hostingEvents, attending: attendingEvents, all: allEvents}
        })
      }

    })
  }
}

export const markAsAttending = (participant, eventObj) => {
  return (dispatch) => {
    if (!eventObj.attendingParticipantIds) {
      eventObj.attendingParticipantIds = {}
    }
    eventObj.attendingParticipantIds = {
      ...eventObj.attendingParticipantIds,
      [participant.id]: true,
    }
    if (!participant.attendingEventIds){
      participant.attendingEventIds = {}
    }
    participant.attendingEventIds = {
      ...participant.attendingEventIds,
      [eventObj.id]: true,
    }

    dispatch({
      type: actions.MARK_AS_ATTENDING,
      payload: eventObj
    })
    firebase.db.collection('events').doc(eventObj.id).update({
      attendingParticipantIds: eventObj.attendingParticipantIds
    })
    firebase.db.collection('participant').doc(participant.id).update({
      attendingEventIds: participant.attendingEventIds
    })
  }
}

export const leaveEvent = (participant, eventObj) => {
  return (dispatch) => {

    delete eventObj.attendingParticipantIds[participant.id]
    delete participant.attendingEventIds[eventObj.id]

    dispatch({
      type: actions.LEAVE_EVENT,
      payload: eventObj
    })
    firebase.db.collection('events').doc(eventObj.id).update({
      attendingParticipantIds: eventObj.attendingParticipantIds
    })
    firebase.db.collection('participant').doc(participant.id).update({
      attendingEventIds: participant.attendingEventIds
    })
  }
}

export const setSpotlights = () => {
  return (dispatch) => {
    firebase.db.collection('spotlights').get().then( payload => {

      if (payload.docs && payload.docs.length > 0){
        const all = {}
         payload.docs.forEach(doc => {
          if (doc.data() && doc.data().title !== "Test"){
            all[doc.data().id] = doc.data()
          }
         })
        dispatch({
          type: actions.SET_SPOTLIGHTS,
          payload: { all: all}
        })
      }

    })
  }
}

export const removeAuthUser = () => {
  window.localStorage.removeItem(firebase.storageKey)
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

export const updateImage = (image, id) => {
  return (dispatch) => {

    firebase.db.collection('participant').doc(id).update({
      image: image
    })
    dispatch({
      type: actions.UPDATE_IMAGE,
      payload: image,
    })
    dispatch(push("/settings"))
  }
}


export const updateGoal = (goal, id) => {
  return (dispatch) => {

    firebase.db.collection('participant').doc(id).update({
      goal: goal
    })
    dispatch({
      type: actions.UPDATE_GOAL,
      payload: goal,
    })
  }
}

export const showCapitol = () => {
  return {
    type: actions.SHOW_CAPITOL,
  }
}

export const hideCapitol = () => {
  return {
    type: actions.HIDE_CAPITOL,
  }
}

export const catchError = (error) => {
  return {
    type: actions.AUTH_ERROR,
    payload: error,
  }
}

export const redirect = (path) => (dispatch) => {
  dispatch(push(path))
}
