import React from "react"
import EventSummaryLarge from "./EventSummaryLarge"

const EventsAllContainer = (props) => {
  const sortByDate = (a,b) => {
    const aDate = new Date(a.dateStart)
    const bDate = new Date(b.dateStart)
    if (bDate > aDate) return 1;
    if (bDate < aDate) return -1;
    return 0;
  }
	return (
    <div className="home-wrapper logs-white-round events-wrapper">
      <h1>Get Involved</h1>
      <div id="events-all-container">
        {props.events.sort(sortByDate).map(e => <EventSummaryLarge key={e.id} {...e} />)}
      </div>
    </div>
  )
}

export default EventsAllContainer
