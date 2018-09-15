import React from "react"
import ProgressBar from "./ProgressBar"
import { withParticipant } from "../hoc"

class Home extends React.Component {


	render(){
		return (
      <div>
        We home now
				<ProgressBar />
      </div>
      )
	}
}

export default withParticipant(Home)
