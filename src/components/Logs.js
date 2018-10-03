import React from "react";
import { connect } from "react-redux"
import Log from "./Log"
import AddLog from "./AddLog"
import { Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"

// add message if there are no logs
// sort by date (oldest to newest)
const Logs = (props) => {
  const sortByDate = (a,b) => {
    const aDate = new Date(a.datePerformed)
    const bDate = new Date(b.datePerformed)
    if (bDate > aDate) return 1;
    if (bDate < aDate) return -1;
    return 0;
  }
  return (
    <div className="home-wrapper">
      <div id="logs-header">
        <h3>LOGS</h3>
        <AddLog />
      </div>
			<div id="logs-container" className="logs-white-round">
        {props.logs.sort(sortByDate).map(l => <Log key={l.id} {...l} />)}
        {props.logs.length === 0 &&
          <div id="no-logs">
            <p>You haven't logged any hours yet!<br />Click the <Icon name="plus circle"/> in the top right to start tracking your Pact.</p>
            <p>Not sure where to start?<br />Explore the <Link to="/spotlights">Spotlight</Link> and <Link to="/events">Events</Link> pages to see ways you can get involved and reach your pact.</p>
          </div>
        }
			</div>
		</div>
  )
}

const mapStateToProps = (state) => {
	return {
    logs: state.activities.logs
  }
}

export default connect(mapStateToProps, null)(Logs)
