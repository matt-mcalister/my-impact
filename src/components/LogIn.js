import React from "react"
import { setParticipant } from "../actions"
import { connect } from 'react-redux'

class LogIn extends React.Component {


	render(){
		return (
      <div>
        Loggin In
	      <button onClick={this.props.setParticipant}> login </button>
      </div>
      )
	}
}

export default connect(null, { setParticipant })(LogIn)
