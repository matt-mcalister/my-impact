import React from "react"
import { Modal } from "semantic-ui-react"
import { connect } from "react-redux"
import { removeSelectedEvent, markAsAttending, leaveEvent } from "../actions"
import { firebase } from "../firebase"
import EventAttendees from "./EventAttendees"

const defaultState = {
  host: null,
}

class EventShow extends React.Component {
  state = defaultState

  componentDidMount(){
    if (this.props.selectedEvent) {
      this.setHost()
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.selectedEvent && (!prevProps.selectedEvent || this.props.selectedEvent.id !== prevProps.selectedEvent.id)){
      this.setHost()
    }
  }

  setHost = () => {
    firebase.db.collection("participant").doc(this.props.selectedEvent.hostId)
      .get().then( doc => this.setState({host: doc.data()}) )
  }

  handleClose = () => {
    this.setState(defaultState)
    this.props.removeSelectedEvent()
  }

  handleClick = () => {
    if (!this.props.currentUserAttending) {
      this.props.markAsAttending(this.props.participant, this.props.selectedEvent)
    } else {
      this.props.leaveEvent(this.props.participant, this.props.selectedEvent)
    }
  }

  formatDescription() {
    const description = this.props.selectedEvent.description.split("http")
    if (description.length === 1){
      return (<p>{description[0]}</p>)
    } else {
      const url = `http${description[1]}`
      return (
        <p>{description[0]} <a href={url}>{url}</a></p>
      )
    }
  }

  render() {
    return (
      <Modal id="selected-event" open={!!this.props.selectedEvent} onClose={this.handleClose}>
        <div id="selected-event-img-cont" className="img-container-centered">
          <img src={this.props.selectedEvent && (this.props.selectedEvent.imagePath || "/images/default-event.jpg")} alt={this.props.selectedEvent && this.props.selectedEvent.title} />
        </div>
        <div id="selected-event-info">
          <h2>{this.props.selectedEvent && this.props.selectedEvent.title}</h2>
          <div id="selected-event-sub-header">
            <h4>Posted by {this.state.host ? this.state.host.name : "anonymous"}</h4>
            <h4>{this.props.selectedEvent && (new Date(this.props.selectedEvent.dateStart).toLocaleDateString('en-us-iso8601', {month: 'short', day: "numeric", year: "numeric"}))}</h4>
            <h4>{this.props.selectedEvent && this.props.selectedEvent.location.address}</h4>
          </div>
          {this.props.selectedEvent && this.formatDescription()}
          <EventAttendees />
        </div>
        <button id="attend-button" onClick={this.handleClick}>{this.props.currentUserAttending ? "Leave Event" : "Mark as Attending"}</button>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    participant: state.auth.participant,
    selectedEvent: state.events.all[state.events.selectedEvent],
    currentUserAttending: !!state.events.attending[state.events.selectedEvent]
  }
}

export default connect(mapStateToProps, { removeSelectedEvent, markAsAttending, leaveEvent })(EventShow)
