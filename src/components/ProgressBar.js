import React from "react"
import { connect } from "react-redux"

const ProgressBar = (props) => {
	if (props.hours) {
		const percentage = `${props.hours/props.goal*100}%`
		return (
			<div id="progress-container">
				<h1>{percentage} complete</h1>
				<div id="full-progress-bar">
					<div id="progress-completed" style={{width: percentage}}>
						<p id="progress-hours">{props.hours}h</p>
					</div>
					<p>{props.goal}h</p>
				</div>
			</div>)
	} else {
		return null
	}
}

const mapStateToProps = (state) => {
	if (state.activities.logs.length > 0) {
		const reducer = (acc, log) => (acc + log.numHours)
		return {
			goal: state.auth.participant.goal,
			hours: state.activities.logs.reduce(reducer, 0)
		}
	} else {
		return {
			goal: null,
			hours: null
		}
	}
}

export default connect(mapStateToProps, null)(ProgressBar)
