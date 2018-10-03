import React from "react"
import { connect } from "react-redux"
import { Icon } from "semantic-ui-react"
import { updateGoal, redirect } from "../actions"


const countdownInDays = (goal) => {
	return Math.abs((new Date(goal) - new Date())/86400000 | 0);
}

class AccountSettings extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			goal: props.goal ? props.goal : 50,
			editing: false,
		}
	}
	_input: ?HTMLInputElement;

	handleChange = (e) => {
		const goal = parseInt(e.target.value, 10) || ""
		this.setState({ goal }, () => this._input.focus())
	}

	edit = () => {
		this.setState({editing: true})
	}

	save = () => {
		this.props.updateGoal(this.state.goal, this.props.id)
		this.setState({editing: false})
	}


	updateImage = () => {
		this.props.redirect("/settings/avatar")
	}

	componentDidUpdate(prevProps, prevState){
		if(prevProps.goal !== this.props.goal){
			this.setState({
				goal: this.props.goal,
			})
		}
	}

	renderPact(){
		if (this.state.editing){
			return (
				<React.Fragment>
					<input id="goal-input" type="number" ref={c => (this._input = c)} autoFocus={true} value={this.state.goal} onChange={this.handleChange} />
					<button className="change-pact" onClick={this.save}>Save Pact</button>
				</React.Fragment>
			)
		} else {
			return (
				<React.Fragment>
					<h1>{this.state.goal} hours</h1>
					<button className="change-pact" onClick={this.edit}>Change</button>
				</React.Fragment>
			)
		}
	}

	tillMidterm(){
		const weeks = countdownInDays("November 6, 2018 08:00:00") / 7
		return Math.round(this.state.goal / weeks)
	}

	till2019(){
		const weeks = countdownInDays("January 1, 2019 00:00:00") / 7
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
					<div className="img-container-centered user-img" onClick={this.updateImage}>
						<img src={this.props.image} alt={this.props.name} />
						<div className='change-user-image'>
							Change Photo
							<Icon name="photo" />
						</div>
					</div>
					<h1>{this.props.name}</h1>
					<hr />
						<h3>Set your Pact</h3>
						<div id="your-pact">
							{this.renderPact()}
						</div>
						<h4>This is about:</h4>
						<p>{this.tillMidterm()}hrs/week till 2018 midterms</p>
						<p>{this.till2019()}hrs/week for the rest of 2018</p>
						<p>{this.till2020Election()}hrs/month until the 2020 Presidential Elections</p>
				</div>
      </div>
      )
	}
}

export default connect(state => ({ ...state.auth.participant }), { updateGoal, redirect })(AccountSettings)
