import React from "react";

const formatDate = (dateString) => {
  const monthKey = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const date = new Date(dateString)
  return `${monthKey[date.getMonth()]} ${date.getDate()}`
}

const Log = (props) => {
  return (
    <div className="log">
      <div className="log-hours">{props.numHours}</div>
      <div className="log-description">
        You logged {props.numHours} hours.
        <ul>
          {props.eventTitle && <li>Event: {props.eventTitle}</li>}
          {props.organizationTitle && <li>Organization: {props.organizationTitle}</li>}
          {props.amountDonated && <li>Donation: ${parseFloat(props.amountDonated).toFixed(2)}</li>}
        </ul>
      </div>
      <div className="log-date">{formatDate(props.datePerformed)}</div>
    </div>
  )
}
export default Log
