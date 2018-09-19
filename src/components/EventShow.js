import React from "react"
import { Modal } from "semantic-ui-react"
import { connect } from "react-redux"
import { removeSelectedEvent } from "../actions"
import { firebase } from "../firebase"

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

  setAttendees = () => {
    const attendees = this.props.selectedEvent.attendingParticipantIds
    for (let uid in attendees) {
      if (attendees[uid]) {
        this.addAttendeeToState(uid)
      }
    }
  }

  addAttendeeToState(uid){
    const attendees = this.state.attendees || []
    firebase.db.collection("participant").doc(this.props.selectedEvent.hostId)
      .get().then( doc => this.setState({attendees: [...attendees, doc.data()]} ) )
  }

  handleClose = () => {
    this.setState(defaultState)
    this.props.removeSelectedEvent()
  }

  render() {
    console.log(this.state);
    return (
      <Modal id="selected-event" open={!!this.props.selectedEvent} onClose={this.handleClose}>
        <div id="selected-event-img-cont" className="img-container-centered">
          <img src={this.props.selectedEvent && this.props.selectedEvent.imagePath} alt={this.props.selectedEvent && this.props.selectedEvent.title} />
        </div>
        <h1>{this.props.selectedEvent && this.props.selectedEvent.title}</h1>
        <div id="selected-event-sub-header">
          <h4>Posted by {this.state.host ? this.state.host.name : "anonymous"}</h4>
          <h4>{this.props.selectedEvent && (new Date(this.props.selectedEvent.dateStart).toLocaleDateString('en-us-iso8601', {month: 'short', day: "numeric", year: "numeric"}))}</h4>
          <h4>{this.props.selectedEvent && this.props.selectedEvent.location.address}</h4>
        </div>
        <p>{this.props.selectedEvent && this.props.selectedEvent.description}</p>
        {this.state.attendees && (
          <div id="event-attendees">
            Attending:
            <div id="attendees-container">
              yo
            </div>
          </div>
        )}
      </Modal>
    )
  }
}

export default connect(state => ({selectedEvent: state.events.selectedEvent}), { removeSelectedEvent })(EventShow)
