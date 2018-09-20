import React from "react"

const AttendeeIcon = (props) => {
	return (
    <div className="attendee-icon">
      <div className="img-container-centered">
        <img src={props.participant.image} alt={props.participant.name}/>
      </div>
      <div className="attendee-name">{props.participant.name}</div>
    </div>
  )
}

export default AttendeeIcon
