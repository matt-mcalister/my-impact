import React from "react";
import { connect } from "react-redux"
import Log from "./Log"
import AddLog from "./AddLog"

// add message if there are no logs
// sort by date (oldest to newest)
const Logs = (props) => {
  return (
    <div className="home-wrapper">
      <div id="logs-header">
        <h3>LOGS</h3>
        <AddLog />
      </div>
			<div id="logs-container" className="logs-white-round">
        {props.logs.map(l => <Log key={l.id} {...l} />)}
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
