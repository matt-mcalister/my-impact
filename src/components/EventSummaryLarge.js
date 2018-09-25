import React from "react"
import { viewEvent } from "../actions"
import { connect } from "react-redux"

function formatDescription(description){
  let descText = description.substring(0,139).split("http")

  if (descText.length === 1){
    return (<p>{descText[0]}{description.length > 134 ? "..." : null}</p>)
  } else {
    const url = `http${descText[1]}`
    return (
      <p>{descText[0]} <a href={url}>{url}</a>{description.length > 134 ? "..." : null}</p>
    )
  }
}

const EventSummaryLarge = (props) => {
  const startDate = new Date(props.dateStart)
  const pastEvent = new Date() > startDate
	return (
      <div className="event-summary-large" onClick={() => props.viewEvent(props)}>
        <div className="event-location">
          {props.location.region}
        </div>
        <div className="img-container-centered event-sum-image">
          <img src={props.imagePath || "/images/default-event.jpg"} alt={props.title} />
        </div>
        <div className="event-summary-info">
          <h3>{props.title}</h3>
          <h4 style={{color: "grey"}}>{startDate.toLocaleDateString('en-us-iso8601', {month: 'short', day: "numeric", year: "numeric"})}</h4>
          {formatDescription(props.description)}
        </div>
        {pastEvent && (<div className="details-overlay" style={{justifyContent: "center"}}>
          <h2>This Event Has Passed</h2>
        </div>)}
      </div>
  )
}

export default connect(null, { viewEvent })(EventSummaryLarge)
