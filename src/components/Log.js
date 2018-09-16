import React from "react";

const Log = (props) => {
  console.log(props);
  return (
    <div className="log">
      <div className="log-hours">{props.numHours}</div>
      <div className="log-description">
        You logged {props.numHours} hours.
        <ul>
          {props.eventTitle && <li>Event: {props.eventTitle}</li>}
          {props.organizationTitle && <li>Organization: {props.organizationTitle}</li>}
          {props.amountDonated && <li>Donation: ${props.amountDonated}.00</li>}
        </ul>
      </div>
      <div className="log-date">Jul 25</div>
    </div>
  )
}
export default Log
