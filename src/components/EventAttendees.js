import React from "react"
import AttendeeIcon from "./AttendeeIcon"
import { connect } from "react-redux"


const EventAttendees = (props) => {
		return (
      <div id="event-attendees">
          Attending:
          <div id="attendees-container">
            {props.attendees.length > 0 ?
              props.attendees.map(id => <AttendeeIcon key={id} participant={id}/>)
              :
              <p>Be the first to RSVP!</p>
            }
          </div>
        </div>
      )
	}
// }

const mapStateToProps = (state) => {
  return {
    attendees: state.events.all[state.events.selectedEvent] ? Object.keys(state.events.all[state.events.selectedEvent].attendingParticipantIds) : [],
  }
}

export default connect(mapStateToProps, null)(EventAttendees)
