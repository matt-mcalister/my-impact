import React from "react"
import { setParticipant } from "../actions"

class SignUp extends React.Component {


	render(){
		return (
      <div>
        Signin up
	      <button onClick={this.props.setParticipant}> signup </button>
      </div>
      )
	}
}

export default connect(null, { setParticipant })(SignUp)
