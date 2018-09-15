import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

export const withParticipant = (Component) => {
  const NewComponent = (props) => {
    if (props.participant) {
      return <Component {...props} />
    } else {
      return <Redirect to="/" />
    }
  }
  return connect(state => ({participant: state.auth.participant}), null)(NewComponent)
}

export const withoutParticipant = (Component) => {
  const NewComponent = (props) => {
    if (!props.participant) {
      return <Component {...props} />
    } else {
      return <Redirect to="/home" />
    }
  }
  return connect(state => ({participant: state.auth.participant}), null)(NewComponent)
}
