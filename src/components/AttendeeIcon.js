import React from "react"
import { firebase } from "../firebase"

class AttendeeIcon extends React.Component {

	state = {
		image: null,
		name: null,
	}

	componentDidMount(){
		this.getAttendee()
	}

	getAttendee = async () => {
    const doc = await firebase.db.collection("participant").doc(this.props.participant).get()
    if (doc.data()) {
      const { image, name } = doc.data()
			this.setState({ image, name })
    }
  }

	render(){
		return (
			<div className="attendee-icon">
				<div className="img-container-centered">
					<img src={this.state.image || "/images/default-user.png"} alt={this.state.name}/>
				</div>
				<div className="attendee-name">{this.state.name}</div>
			</div>
		)
	}
}

export default AttendeeIcon
