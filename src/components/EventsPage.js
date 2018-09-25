import React from "react"
import { connect } from "react-redux"
import { setEvents } from "../actions"
import EventSummaryContainer from "./EventSummaryContainer"
import EventsAllContainer from "./EventsAllContainer"
import EventShow from "./EventShow"

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
		return (
      <div className="main-content">
        {this.props.hosting.length > 1 && <EventSummaryContainer type="Hosting" events={this.props.hosting} />}
        {this.props.attending.length > 1 && <EventSummaryContainer type="Attending" events={this.props.attending} />}
        {this.props.all.length > 1 && <EventsAllContainer events={this.props.all} />}
				<EventShow />
      </div>
      )
	}
}
const mapStateToProps = state => {
	const formatEventsObject = (eventsObj) => {
		return Object.keys(eventsObj).map(id => eventsObj[id])
	}
	return {
		uid: state.auth.uid,
		hosting: formatEventsObject(state.events.hosting),
		attending: formatEventsObject(state.events.attending),
		all: formatEventsObject(state.events.all),
	}
}
export default connect(mapStateToProps, { setEvents })(EventsPage)
