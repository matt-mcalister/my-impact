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
      <form onSubmit={this.handleSubmit} className="auth-form">
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
				<input type="submit" value="Sign Up" />
				<button type="button" onClick={() => this.props.redirect("/login")} >Log In</button>
      </form>
      )
	}
}

export default connect(null, { setParticipant, redirect })(SignUp)
