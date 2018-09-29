import React from "react"
import { connect } from "react-redux"
import { setSpotlights } from "../actions"
import Spotlight from "./Spotlight"

class SpotlightsPage extends React.Component {

	componentDidMount(){
		this.props.setSpotlights()
	}

	render(){
		console.log(this.props);
		return (
			<div className="main-content">
				<div className="home-wrapper logs-white-round spotlights-wrapper">
					<h1>Spotlights</h1>
					{this.props.spotlights.map(sp => <Spotlight key={sp.id} {...sp}/>)}
				</div>
			</div>
		)
	}

}


const mapStateToProps = state => {
	const sortByDate = (a,b) => {
		const aDate = new Date(a.datePosted)
		const bDate = new Date(b.datePosted)
		if (bDate > aDate) return 1;
		if (bDate < aDate) return -1;
		return 0;
	}
	return {
		spotlights: Object.keys(state.spotlights.all).map(id => state.spotlights.all[id]).sort(sortByDate)
	}
}

export default connect(mapStateToProps, { setSpotlights })(SpotlightsPage)
