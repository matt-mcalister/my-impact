import React from "react"
import { connect } from "react-redux"
import { setEvents } from "../actions"

class EventsPage extends React.Component {

	componentDidMount(){
		this.props.setEvents()
	}

	render(){
		console.log(this.props.events);
		return (
      <div>
        Check Out The Events
      </div>
      )
	}
}

export default connect(state => ({events: Object.keys(state.events.all)}), { setEvents })(EventsPage)
