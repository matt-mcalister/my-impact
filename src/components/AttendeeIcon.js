import React from "react"
import { firebase } from "../firebase"

class AttendeeIcon extends React.Component {

	state = {
		image: null,
		name: null,
		invalidUser: false,
	}

	componentDidMount(){
		this.getAttendee()
	}

	getAttendee = async () => {
    const doc = await firebase.db.collection("participant").doc(this.props.participant).get()
    if (doc.data()) {
      const { image, name } = doc.data()
			this.setState({ image, name })
    } else {
			this.setState({invalidUser: true})
		}
  }

	render(){
		if (this.state.invalidUser){
			console.log(this.props.participant);
			return null
		} else {
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
}

export default AttendeeIcon
