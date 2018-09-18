import React from "react"
import EventSummarySmall from "./EventSummarySmall"

const EventSummaryContainer = (props) => {
  const sortByDate = (a,b) => {
    const aDate = new Date(a.dateStart)
    const bDate = new Date(b.dateStart)
    if (bDate > aDate) return 1;
    if (bDate < aDate) return -1;
    return 0;
  }
	return (
    <div className="home-wrapper">
      <h3>{props.type}:</h3>
      <div id="events-summary-container" className="logs-white-round events-wrapper">
        {props.events.sort(sortByDate).map(e => <EventSummarySmall key={e.id} {...e} />)}
      </div>
    </div>
  )
}

export default EventSummaryContainer
