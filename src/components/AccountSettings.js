import React from "react"
import { connect } from "react-redux"

class AccountSettings extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			goal: this.props.goal || 50,
		}
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
							<h3>{this.state.goal} hours</h3>
							<h6>Change</h6>
						</div>
						<div>
							<h4>This is about:</h4>
							<p>hrs/week till 2018 midterms</p>
							<p>hrs/week for the rest of 2018</p>
							<p>hrs/month until the 2020 Presidential Elections</p>
						</div>
						<button id="save-pact">Save Pact</button>
				</div>
      </div>
      )
	}
}

export default connect(state => ({ ...state.auth.participant }) )(AccountSettings)
