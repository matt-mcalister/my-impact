import React from "react"
import { connect } from "react-redux"
import { setEvents } from "../actions"

class EventsPage extends React.Component {

	componentDidMount(){
		this.props.setEvents(this.props.uid)
	}

	componentDidUpdate(prevProps){
		if (prevProps.uid !== this.props.uid) {
			this.props.setEvents(this.props.uid)
		}
	}

	render(){
		console.log(this.props);
		return (
      <div>
        Check Out The Events
      </div>
      )
	}
}

export default connect(state => ({ uid: state.auth.uid, ...state.events}), { setEvents })(EventsPage)
