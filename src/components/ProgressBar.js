import React from "react"
import { connect } from "react-redux"


const ProgressBar = (props) => {
		const hours = props.hours || 0
		const goal = props.goal || 50
		const percentage = hours/goal
		let progressBarCont = {
			gridTemplateColumns: `minmax(12vh, ${percentage*100}%) auto minmax(5%, 12vh)`
		}
		return (
		<div className="home-wrapper">
			<h3>PROGRESS</h3>
			<div id="progress-container" className="logs-white-round">
				<h1>{parseInt(percentage*100, 10)}% complete</h1>
				<div id="progress-bar-container" style={progressBarCont}>
					<div id="progress-so-far">
						<div id="progress-label-circle">{hours}h</div>
					</div>
					<div id="progress-separator" />
					<div id="progress-remainder">{goal}h</div>
				</div>
			</div>
		</div>
		)
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
