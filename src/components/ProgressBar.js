import React from "react"
import { connect } from "react-redux"

const Original = (props) => {
	const percentage = "100%"//`${props.hours/props.goal*100}%`
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
}

const SecondTry = (props) => {
	const percentage = 80//`${props.hours/props.goal*100}%`
	return (
		<div id="progress-container">
			<h1>{percentage}% complete</h1>
			<div id="full-progress-bar">
				<div className="progress-bar-cap" id="begin-cap"/>
				<div id="rect-progress-bar">
					<div id="progress-completed" style={{width: percentage*3.25}}/>
					<p id="progress-hours">{props.hours}h</p>
				</div>
				<p className="progress-bar-cap" id="goal">{props.goal}h</p>
			</div>
		</div>)
}

const ProgressBar = (props) => {
	// circle (behind)
	// rectangle
	// inner Rectangle
	// inner circle, position relative moved over
	// circle (in front)


	// it needs to be two bars that are position absolute or relative, one placed ontop of the other
	// maybe the second one is rendered directly below, but position relative moved above it
	if (props.hours) {
		const percentage = .6//props.hours/props.goal
		return (
			<div id="progress-container">
				<h1>{percentage*100}% complete</h1>
			<div id="background-progress-bar" className="bar">100h</div>
		<div id="progress-completed-layer" className="bar" style={{width: `${percentage*90}%`}}>100h</div>

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
