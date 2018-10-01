import React from "react"
import { connect } from "react-redux"


const countdownInDays = (goal) => {
	return Math.abs((new Date(goal) - new Date())/86400000 | 0);
}

class AccountSettings extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			goal: this.props.goal || 50,
			editing: false,
		}
	}

	handleChange = (e) => {
		this.setState({goal: e.target.value})
	}

	edit = () => {
		this.setState({editing: true})
	}

	save = () => {
		this.setState({editing: false})
	}

	renderPact(){
		if (this.state.editing){
			return (<input id="goal-input" type="number" value={this.state.goal} onChange={this.handleChange} />)
		} else {
			return (
				<React.Fragment>
					<h3>{this.state.goal} hours</h3>
					<h6 onClick={this.edit}>Change</h6>
				</React.Fragment>
			)
		}
	}

	tillMidterm(){
		const weeks = countdownInDays("November 6, 2018 08:00:00") / 7
		return Math.round(this.state.goal / weeks)
	}

	till2019(){
		const weeks = countdownInDays("January 12, 2019 00:00:00") / 7
		return Math.round(this.state.goal / weeks)
	}

	till2020Election(){
		const months = countdownInDays("November 3, 2020 08:00:00") / 30
		return Math.round(this.state.goal / months)
	}

	render(){
		return (
      <div className="main-content">
        <div className="logs-white-round user-info">
					<h2>Settings</h2>
					<div className="img-container-centered user-img">
						<img src={this.props.image} alt={this.props.name} />
					</div>
					<h1>{this.props.name}</h1>
						<h3>Set your Pact</h3>
						<div id="your-pact">
							{this.renderPact()}
						</div>
						<h4>This is about:</h4>
						<p>{this.tillMidterm()}hrs/week till 2018 midterms</p>
						<p>{this.till2019()}hrs/week for the rest of 2018</p>
						<p>{this.till2020Election()}hrs/month until the 2020 Presidential Elections</p>
						<button id="save-pact" onClick={this.save}>Save Pact</button>
				</div>
      </div>
      )
	}
}

export default connect(state => ({ ...state.auth.participant }) )(AccountSettings)
