import React from "react"
import { Modal } from "semantic-ui-react"
import { connect } from "react-redux"
import { removeSelectedEvent } from "../actions"
import { firebase } from "../firebase"
import AttendeeIcon from "./AttendeeIcon"

const defaultState = {
  host: null,
  attendees: null,
}
class EventShow extends React.Component {
  state = defaultState

  componentDidMount(){
    if (this.props.selectedEvent) {
      this.setHost()
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.selectedEvent && (!prevProps.selectedEvent || this.props.selectedEvent.id !== prevProps.selectedEvent.id) ){
      this.setHost()
      this.setAttendees()
    }
  }

  setHost = () => {
    firebase.db.collection("participant").doc(this.props.selectedEvent.hostId)
      .get().then( doc => this.setState({host: doc.data()}) )
  }

  setAttendees = async () => {
    const attendees = this.props.selectedEvent.attendingParticipantIds
    const attendeesArr = []
    for (let uid in attendees) {
      if (attendees[uid]) {
        const attendee = await this.getAttendee(uid)
        if (attendee){
          attendeesArr.push(attendee)
        }
      }
    }
    if (attendeesArr.length > 0) {
      this.setState({ attendees: attendeesArr })
    }
  }

  getAttendee = async (uid) => {
    const doc = await firebase.db.collection("participant").doc(uid).get()
    if (doc.data()) {
      return await doc.data()
    }
    return null
  }

  handleClose = () => {
    this.setState(defaultState)
    this.props.removeSelectedEvent()
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
          <div id="event-attendees">
              Attending:
              <div id="attendees-container">
                {this.state.attendees ?
                  this.state.attendees.map(a => <AttendeeIcon key={a.id} participant={a}/>)
                  :
                  <p>Be the first to RSVP!</p>
                }
              </div>
            </div>
        </div>
        <button id="attend-button">{this.props.currentUserAttending ? "Leave Event" : "Mark as Attending"}</button>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedEvent: state.events.all[state.events.selectedEvent],
    currentUserAttending: !!state.events.selectedEvent && !!state.events.selectedEvent.attendingParticipantIds && !!state.events.selectedEvent.attendingParticipantIds[state.auth.uid]
  }
}

export default connect(mapStateToProps, { removeSelectedEvent })(EventShow)
