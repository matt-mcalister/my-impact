import React from "react"

const EventSummarySmall = (props) => {
  const startDate = new Date(props.dateStart)
  const pastEvent = new Date() > startDate
	return (
      <div className="event-summary-small">
        <div className="img-container-centered">
          <img src={props.imagePath} alt={props.title} />
        </div>
        <div className="details-overlay">
          <h5>{props.title}</h5>
          {pastEvent ? <h2>This Event Has Passed</h2> : null }
          <h5>{startDate.toLocaleDateString('en-us-iso8601', {month: 'short', day: "numeric", year: "numeric"})}</h5>
        </div>
      </div>
  )
}

export default EventSummarySmall
