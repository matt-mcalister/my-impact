import React from "react"
import { createAuthUser, redirect, clearError } from "../actions"
import { connect } from 'react-redux'

class SignUp extends React.Component {

	state = {
		name: "",
		username: "",
		email: "",
		password: "",
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createAuthUser(this.state)
	}

	componentDidUpdate(prevProps, prevState){
		if (this.props.authError) {
			alert(this.props.authError.message)
			this.props.clearError()
		}
	}


	render(){
		return (
			<div className="auth-form">
				<h1>Sign Up</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
					<input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username"/>
	        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
	        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
					<input className="auth-submit" type="submit" value="Go" />
					<button type="button" onClick={() => this.props.redirect("/login")} >Log In</button>
				</form>
			</div>
      )
	}
}

export default connect(state => ({authError: state.auth.authError}), { redirect, createAuthUser, clearError })(SignUp)
