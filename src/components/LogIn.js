import React from "react"
import { clearError, redirect } from "../actions"
import { connect } from 'react-redux'
import { auth } from '../firebase';


class LogIn extends React.Component {

	state = {
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
		auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
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
				<h1>Log In</h1>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
					<input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
					<input className="auth-submit" type="submit" value="Go" />
					<button type="button" onClick={() => this.props.redirect("/signup")} >Sign Up</button>
				</form>
			</div>
      )
	}
}

export default connect(state => ({authError: state.auth.authError}), { clearError, redirect })(LogIn)
