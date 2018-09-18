import React from "react"

const EventSummaryLarge = (props) => {
  const startDate = new Date(props.dateStart)
  const pastEvent = new Date() > startDate
	return (
      <div className="event-summary-large">
        <div className="img-container-centered event-sum-image">
          <img src={props.imagePath} alt={props.title} />
        </div>
        <div className="event-summary-info">
          <h3>{props.title}</h3>
          <h4 style={{color: "grey"}}>{startDate.toLocaleDateString('en-us-iso8601', {month: 'short', day: "numeric", year: "numeric"})}</h4>
          <p>{props.description.substring(0,139)}{props.description.length > 139 && "..."}</p>
        </div>
        {pastEvent && (<div className="details-overlay" style={{justifyContent: "center"}}>
          <h2>This Event Has Passed</h2>
        </div>)}
      </div>
  )
}

export default EventSummaryLarge
