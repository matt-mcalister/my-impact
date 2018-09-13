import React from "react"
import { setParticipant, redirect } from "../actions"
import { connect } from 'react-redux'

class SignUp extends React.Component {

	state = {
		name: "",
		email: "",
		password: ""
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state);
	}


	render(){
		return (
			<div className="auth-form">
				<h1>Sign Up</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
	        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
	        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
					<input className="auth-submit" type="submit" value="Go" />
					<button type="button" onClick={() => this.props.redirect("/login")} >Log In</button>
				</form>
			</div>
      )
	}
}

export default connect(null, { setParticipant, redirect })(SignUp)
