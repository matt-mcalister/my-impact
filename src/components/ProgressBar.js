import React from "react"
import { connect } from "react-redux"


const ProgressBar = (props) => {
	if (props.hours) {
		const percentage = props.hours/props.goal
		let progressBarCont = {
			gridTemplateColumns: `minmax(12vh, ${percentage*100}%) auto minmax(5%, 12vh)`
		}
		return (
		<div id="progress-container">
			<h1>{percentage*100}% complete</h1>
			<div id="progress-bar-container" style={progressBarCont}>
				<div id="progress-so-far">
					<div id="progress-label-circle">{props.hours}h</div>
				</div>
				<div id="progress-separator" />
				<div id="progress-remainder">{props.goal}h</div>
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
